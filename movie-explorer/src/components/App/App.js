import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'
import React, { useState, useEffect, useCallback } from 'react';
import { useElementSize } from 'use-element-size';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import './App.css';

function App() {
  const [isLoggedIn, setLogInState] = useState(true);
  const [isCheckboxActive, setCheckbox] = useState(localStorage.getItem('checkbox')==='true');
  const [searchQuery, setSearchQuery] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);
  const [filteredFoundMovies, setFilteredFoundMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [appWidth, setWidth] = useState();
  const [isMovieCardListMounted, setMoviesCardListMounted] = useState(false);
  const [isPreloaderActive, setPreloaderActive] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [currentUserName, setCurrentUserName] = useState('');
  const [isEmailConflicted, setEmailConflicted] = useState(false);
  const boxRef = useElementSize((size)=> {
    setWidth(size.width);
  });
  useEffect(()=> {
    if(isCheckboxActive) {
      localStorage.setItem('checkbox', 'true')
    } else localStorage.setItem('checkbox', 'false')
  },[isCheckboxActive])
  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      setLogInState(true)
    } else setLogInState(false)
    if (localStorage.getItem('foundMovies')) {
      setFoundMovies(JSON.parse(localStorage.getItem('foundMovies')))
      setMoviesCardListMounted(true)
    }
    if (localStorage.getItem('searchQuery')) {
      setSearchQuery(localStorage.getItem('searchQuery'))
    }
  },[localStorage.getItem('searchQuery'), localStorage.getItem('foundMovies'), localStorage.getItem("jwt")])
  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      mainApi
        .getUserInfo(localStorage.getItem("jwt"))
        .then((data) => {
          setCurrentUser(data);
          setCurrentUserEmail(data.email);
          setCurrentUserName(data.name)
          setLogInState(true);
        })
        .catch((err) => {
          console.log(err);
          setCurrentUser({})
          setCurrentUser({ _id: ` ` });
          setCurrentUserEmail(" ");
          setLogInState(false);
        });
      mainApi
        .getSavedMovies(localStorage.getItem("jwt"))
        .then(movies=>setSavedMovies(movies))
        .catch(err=>console.log(err))
    } else setLogInState(false)
  },[isLoggedIn]);
  const onSaveMovie = useCallback ((nameRU, nameEN, country, director, duration, year, description, image, trailerLink, thumbnail, movieId) => {
    if (!savedMovies.some(m=>m.nameRU.includes(nameRU))){
      mainApi
        .saveMovie(nameRU, nameEN, country, director, duration, year, description, image, trailerLink, thumbnail, movieId, localStorage.getItem('jwt'))
        .then((movie)=>{const arr = savedMovies; for(let key in movie){arr.push(movie[key])}; return arr})
        .then(res=>setSavedMovies(res))
        .catch(err=>console.log(err))
    } else {
      const index = savedMovies.findIndex(m=>m.nameRU.includes(nameRU))
      const array = savedMovies.splice(0, savedMovies.length)
      mainApi
        .unsaveMovie(array[index]._id, localStorage.getItem('jwt'))
        .then(array.splice(index,1))
        .then(setSavedMovies(array))
        .catch(err=>console.log(err))
    }
  },[savedMovies])

  useEffect(() => {
    if(isCheckboxActive) {
      setFilteredFoundMovies(foundMovies.filter((movie)=>movie.duration<40))
    } else {
      setFilteredFoundMovies(foundMovies)
    }
  },[isCheckboxActive, foundMovies])

  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate("/", {replace: true})
  }
  const onProfileClick = () => {
    navigate('/profile', {replace: true})
  }
  const onSearch = (str) => {
    setPreloaderActive(true);
    if (localStorage.getItem('fetchedmovies')) {
      JSON.parse(localStorage.getItem('fetchedmovies'))
      setFoundMovies(JSON.parse(localStorage.getItem('fetchedmovies')).filter((movie)=>movie.nameRU.toLowerCase().includes(str.toLowerCase())))
      localStorage.removeItem('foundMovies');
      localStorage.removeItem('checkbox');
      localStorage.removeItem('searchQuery');
      localStorage.setItem('foundMovies', JSON.stringify(JSON.parse(localStorage.getItem('fetchedmovies')).filter((movie)=>movie.nameRU.toLowerCase().includes(str.toLowerCase()))));
      localStorage.setItem('checkbox', isCheckboxActive);
      localStorage.setItem('searchQuery', str);
      setPreloaderActive(false);
    } else {
      moviesApi.getInitialCards()
        .then(res=>{localStorage.setItem('fetchedmovies', JSON.stringify(res)); return res})
        .then(setFoundMovies([]))
        .then(async (res)=>{const filtered = await res.filter((movie)=>movie.nameRU.toLowerCase().includes(str.toLowerCase())); return filtered;})
        .then((res) => {
          localStorage.removeItem('foundMovies');
          localStorage.removeItem('checkbox');
          localStorage.removeItem('searchQuery');
          localStorage.setItem('foundMovies', JSON.stringify(res));
          localStorage.setItem('checkbox', isCheckboxActive);
          localStorage.setItem('searchQuery', str);
          return res;
        })
        .then(res=>setFoundMovies(res))
        .then((res)=>{setPreloaderActive(false); return res})
        .catch(err=>console.log(err))
        .finally(setMoviesCardListMounted(true));
    }
  }
  const handleSignUp = (name, email, password) => {
    mainApi
      .signup(name, email, password)
      .then(() => {
        handleSignIn(email, password)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSignIn = (email, password) => {
    mainApi
      .signin(email, password)
      .then((data) => {
        localStorage.removeItem("jwt");
        localStorage.setItem("jwt", data.token);
        setLogInState(true);
        setCurrentUserEmail(email);
      })
      .then(() => {
        navigate('/movies',{replace:true})
      })
      .catch(err=>console.log(err));    
  };
  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem('foundMovies');
    localStorage.removeItem('checkbox');
    localStorage.removeItem('searchQuery');
    localStorage.removeItem('fetchedmovies');
    setLogInState(false);
    setFoundMovies([]);
    setSavedMovies([]);
    setFilteredFoundMovies([]);
    setCheckbox(false);
    setSearchQuery('');
    setMoviesCardListMounted(false)
    navigate('/', {replace: true});
  }
  const handleUpdateUser = () => {
    mainApi
      .patchUserInfo(currentUserName, currentUserEmail, localStorage.getItem('jwt'))
      .then((data)=>{
        setEmailConflicted(false);
        setCurrentUser(data.user);
        setCurrentUserEmail(data.user.email);
        setCurrentUserName(data.user.name)
      })
      .catch((err) => {
        setEmailConflicted(true);
        console.log(err)
      });
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div ref={boxRef} className='App'>
        <Routes>
          <Route 
            path='/signin' 
            element={
              isLoggedIn ? <Navigate to='/' replace /> :
              <>
                <Login onLogoClick={onLogoClick} onSubmit={handleSignIn} />
              </>
            }
          />
          <Route 
            path='/signup' 
            element={
              isLoggedIn ? <Navigate to='/' replace /> :
              <>
                <Register onLogoClick={onLogoClick} onSubmit={handleSignUp} />
              </>
            }
          />
          <Route 
            path='/404' 
            element={
              <>
                <NotFound />
              </>
            }
          />
          <Route  
            path='/movies'
            element={
              isLoggedIn ? 
              <>
                <Header path='/movies' loggedIn={isLoggedIn} onLogoClick={onLogoClick} onProfileClick={onProfileClick} appWidth={appWidth} />
                <Movies searchQuery={searchQuery} setCheckbox={setCheckbox} isCheckboxActive={isCheckboxActive} appWidth={appWidth} movies={filteredFoundMovies} onSearch={onSearch} isMovieCardListMounted={isMovieCardListMounted} setMoviesCardListMounted={setMoviesCardListMounted} isPreloaderActive={isPreloaderActive} onSaveMovie={onSaveMovie} savedMovies={savedMovies} saved={false} />
                <Footer />
              </> 
              : <Navigate to='/' replace />
            }
          />
          <Route 
            path='/saved-movies'
            element={
              isLoggedIn ?
              <>
                <Header path='/saved-movies' loggedIn={isLoggedIn} onLogoClick={onLogoClick} onProfileClick={onProfileClick} appWidth={appWidth} />
                <SavedMovies isPreloaderActive={isPreloaderActive} appWidth={appWidth} isMovieCardListMounted={isMovieCardListMounted} setMoviesCardListMounted={setMoviesCardListMounted} onSaveMovie={onSaveMovie} savedMovies={savedMovies} saved={true} />
                <Footer />
              </>
              : <Navigate to='/' replace />
            }
          />
          <Route 
            path='/profile'
            element={
              isLoggedIn ?
              <> 
                <Header path='/profile' loggedIn={isLoggedIn} onLogoClick={onLogoClick} onProfileClick={onProfileClick} appWidth={appWidth} />
                <Profile currentUser={currentUser} name={currentUserName} email={currentUserEmail} setName={setCurrentUserName} isEmailConflicted={isEmailConflicted} setEmail={setCurrentUserEmail} onLogOut={handleLogOut} onUpdateUser={handleUpdateUser} />
              </>
              : <Navigate to='/' replace />
            }
          />
          <Route
            path='/' 
            element={
              <>
                <Header path='/' loggedIn={isLoggedIn} onLogoClick={onLogoClick} onProfileClick={onProfileClick} appWidth={appWidth} />
                <Main />
                <Footer />
              </>
            }
          />
          <Route path='/*' element={<Navigate to='/404' replace />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
