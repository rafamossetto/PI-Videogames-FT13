import './App.css';
import Landing from './components/landing/Landing';
import Home from './components/home/Home';
import { Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Route exact path='/' component={Landing} />
      <Route exact path='/videogames' component={Home} />
    </>
  );
}

export default App;
