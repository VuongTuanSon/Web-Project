
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './headerComponents/header';
import Footer from './footerComponents/footer';
import HomePage from './pages/homePage';
import SlideShow from './pages/slideShow';
import Products from './pages/products';
import Products2 from './pages/products2';
import Products3 from './pages/products3';
import Products4 from './pages/products4';
import Products5 from './pages/products5';
import './assets/default.css'

function App() {
  return (
    <Router>
    <div className="App">
              <Header />
              <Route exact path='/' component={SlideShow} />
              <Route exact path='/' component={HomePage} />
              <Route exact path='/Products' component={Products} />
              <Route exact path='/Products2' component={Products2} />
              <Route exact path='/Products3' component={Products3} />
              <Route exact path='/Products4' component={Products4} />
              <Route exact path='/Products5' component={Products5} />
              <Footer />
    </div>
    </Router>
  );
}

export default App;
