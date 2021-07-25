import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Analysis from './components/pages/Analysis';
import AboutUs from './components/pages/AboutUs';
import SignUp from './components/pages/SignUp';
import Tableau from './Tableau';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/analysis' component={Analysis} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
