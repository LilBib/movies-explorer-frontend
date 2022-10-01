import { Route, Routes, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import { useElementSize } from 'use-element-size'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import movies from'../../utils/moviesarray';
import './App.css';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';

function App() {
  const [isLoggedIn, setLogInState] = useState(true);
  const [isCheckboxActive, setCheckbox] = useState(true);
  const [foundMovies, setFoundMovies] = useState(movies);
  const [appWidth, setWidth] = useState();
  const boxRef = useElementSize((size)=> {
    setWidth(size.width);
  }); 
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
  return (
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
          path='/movies' 
          element={
            <>
              <Header path='/movies' loggedIn={isLoggedIn} onLogoClick={onLogoClick} onProfileClick={onProfileClick} appWidth={appWidth} />
              <Movies onCheckboxClick={onCheckboxClick} isCheckboxActive={isCheckboxActive} appWidth={appWidth} movies={foundMovies}  />
              <Footer />
            </>
          }
        />
        <Route 
          path='/saved-movies' 
          element={
            <>
              <Header path='/saved-movies' loggedIn={isLoggedIn} onLogoClick={onLogoClick} onProfileClick={onProfileClick} appWidth={appWidth} />
              <SavedMovies onCheckboxClick={onCheckboxClick} isCheckboxActive={isCheckboxActive} appWidth={appWidth} movies={foundMovies} /> {// пока что так
              }
              <Footer />
            </>
          }
        />
        <Route 
          path='/profile' 
          element={
            <> 
              <Header path='/profile' loggedIn={isLoggedIn} onLogoClick={onLogoClick} onProfileClick={onProfileClick} appWidth={appWidth} />
              <Profile name={'Vitalik'} email={'vitalya@yandex.ru'} />
            </>
          }
        />
        <Route 
          path='/signin' 
          element={
            <>
              <Login onLogoClick={onLogoClick} />
            </>
          }
        />
        <Route 
          path='/signup' 
          element={
            <>
              <Register onLogoClick={onLogoClick} />
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
    </div>
  );
}

export default App;
