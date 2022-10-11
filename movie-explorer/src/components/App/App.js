import { Route, Routes, useNavigate } from 'react-router-dom'
import React, { useState, useEffect, useCallback } from 'react';
import { useElementSize } from 'use-element-size';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
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
  const [isLoggedIn, setLogInState] = useState(false);
  const [isCheckboxActive, setCheckbox] = useState(false);
  const [foundMovies, setFoundMovies] = useState([]);
  const [filteredFoundMovies, setFilteredFoundMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [appWidth, setWidth] = useState();
  const [isMovieCardListMounted, setMoviesCardListMounted] = useState(false);
  const [isPreloaderActive, setPreloaderActive] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [currentUserName, setCurrentUserName] = useState('');
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const boxRef = useElementSize((size)=> {
    setWidth(size.width);
  }); 
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
          setCurrentUser({ _id: ` ` });
          setCurrentUserEmail(" ");
        });
    }
    mainApi
      .getSavedMovies(localStorage.getItem("jwt"))
      .then(movies=>setSavedMovies(movies))
      .then(setFilteredSavedMovies(savedMovies))
      .catch(err=>console.log(err))
  },[isLoggedIn]);
  const onSaveMovie = useCallback ((nameRU, nameEN, country, director, duration, year, description, image, trailerLink, thumbnail, movieId, _id) => {
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
        .unsaveMovie(_id, localStorage.getItem('jwt'))
        .then(array.splice(index,1))
        .then(setSavedMovies(array))
        .catch(err=>console.log(err))
    }
  },[savedMovies])
  useEffect(() => {
    setFilteredSavedMovies(savedMovies)
  },[savedMovies])

  useEffect(() => {
    if(isCheckboxActive) {
      setFilteredSavedMovies(savedMovies.filter(movie=>movie.duration<40))
      setFilteredFoundMovies(foundMovies.filter((movie)=>movie.duration<40))
    } else {
      setFilteredSavedMovies(savedMovies)
      setFilteredFoundMovies(foundMovies)
    }
  },[isCheckboxActive, savedMovies, foundMovies])

  const navigate = useNavigate();

  const onCheckboxClick = () => {
    setCheckbox(!isCheckboxActive);
  }
  const onLogoClick = () => {
    navigate("/", {replace: true})
  }
  const onProfileClick = () => {
    navigate('/profile', {replace: true})
  }
  const onSearch = (str) => {
    moviesApi.getInitialCards()
      .then(setFoundMovies([]))
      .then(setPreloaderActive(true))
      .then(async (res)=>{const filtered = await res.filter((movie)=>movie.nameRU.toLowerCase().includes(str.toLowerCase())); return filtered;})
      .then(async (res)=> {
        if(isCheckboxActive) {
          const filtered = await res.filter((movie)=>movie.duration<40);
          return filtered;
        }
        return res;
      })
      .then(res=>setFoundMovies(res))
      .then(setPreloaderActive(false))
      .finally(setMoviesCardListMounted(true));
  }
  const onSavedSearch = (str) => {
    setFilteredSavedMovies(savedMovies.filter((movie)=>movie.nameRU.toLowerCase().includes(str.toLowerCase())))
    if (str==='') {
      setFilteredSavedMovies(savedMovies)
    }
    if(isCheckboxActive) {
      setFilteredSavedMovies(savedMovies.filter(movie=>movie.duration<40))
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
      .catch((err) => {
        console.log(err);
      });
    mainApi
      .getUserInfo(localStorage.getItem("jwt"))
      .then(user=>setCurrentUser(user))
      .catch(err=>console.log(err))
  };
  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setLogInState(false);
    navigate('/', {replace: true});
  }
  const handleUpdateUser = () => {
    mainApi
      .patchUserInfo(currentUserName, currentUserEmail, localStorage.getItem('jwt'))
      .then((data)=>{
        setCurrentUser(data);
        setCurrentUserEmail(data.email);
        setCurrentUserName(data.name)
      })
      .catch((err) => console.log(err));
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div ref={boxRef} className='App'>
        <Routes>
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
                    <Route 
            path='/signin' 
            element={
              <>
                <Login onLogoClick={onLogoClick} onSubmit={handleSignIn} />
              </>
            }
          />
          <Route 
            path='/signup' 
            element={
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
        </Routes>
          <ProtectedRoute  path='/movies' loggedIn={isLoggedIn}>
          <>
                <Header path='/movies' loggedIn={isLoggedIn} onLogoClick={onLogoClick} onProfileClick={onProfileClick} appWidth={appWidth} />
                  <Movies onCheckboxClick={onCheckboxClick} isCheckboxActive={isCheckboxActive} appWidth={appWidth} movies={filteredFoundMovies} onSearch={onSearch} isMovieCardListMounted={isMovieCardListMounted} setMoviesCardListMounted={setMoviesCardListMounted} isPreloaderActive={isPreloaderActive} onSaveMovie={onSaveMovie} savedMovies={savedMovies} saved={false} />
                <Footer />
              </>
          </ProtectedRoute>
          
          <ProtectedRoute path='/saved-movies' loggedIn={isLoggedIn}>
              <>
                <Header path='/saved-movies' loggedIn={isLoggedIn} onLogoClick={onLogoClick} onProfileClick={onProfileClick} appWidth={appWidth} />
                  <SavedMovies onCheckboxClick={onCheckboxClick} isCheckboxActive={isCheckboxActive} appWidth={appWidth} movies={filteredSavedMovies} onSearch={onSavedSearch} isMovieCardListMounted={isMovieCardListMounted} setMoviesCardListMounted={setMoviesCardListMounted} isPreloaderActive={isPreloaderActive} onSaveMovie={onSaveMovie} savedMovies={savedMovies} saved={true} />
                <Footer />
              </>
          </ProtectedRoute>
          
          <ProtectedRoute path='/profile' loggedIn={isLoggedIn}>
            <> 
                <Header path='/profile' loggedIn={isLoggedIn} onLogoClick={onLogoClick} onProfileClick={onProfileClick} appWidth={appWidth} />
                <Profile name={currentUserName} email={currentUserEmail} setName={setCurrentUserName} setEmail={setCurrentUserEmail} onLogOut={handleLogOut} onUpdateUser={handleUpdateUser} />
              </>
          </ProtectedRoute>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
