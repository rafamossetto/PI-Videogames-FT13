import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getVideogames } from './redux/actions';
import './App.css';
import Landing from './components/landing/Landing';
import Home from './components/home/Home';
import { Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideogames())
  }, [dispatch])

  return (
    <>
      <Route exact path='/' component={Landing} />
      <Route exact path='/videogames' component={Home} />
      {/* <Route exact path='/videogame/:idVideogame' component={GameDetail} /> */}
    </>
  );
}

export default App;
