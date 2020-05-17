import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero'
import {HashRouter as Router,Switch,Route} from 'react-router-dom';
import Estadisticas from './containers/Estadisticas';
import Post from './containers/Noticias';
import nosotros from './containers/nosotros';

function App() {
  return (

    <Router>
    <div className="App">
      <Header/>
      <Hero/>
      <Route path="/" exact component={Home}/>
      <Route path="/Estadisticas" component={Estadisticas}/>
      <Route path="/Noticias/:slug" component={Post}/>
      <Route path="/nosotros/" component={nosotros}/>
    </div>
    </Router>
  );
}

export default App;
