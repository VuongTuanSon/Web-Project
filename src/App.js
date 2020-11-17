
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
import './assets/default.css'

function App() {
  return (
    <Router>
    <div className="App">
              <Header />
              <Route exact path='/' component={SlideShow} />
              <Route exact path='/' component={HomePage} />
              <Route exact path='/Products' component={Products} />
              <Footer />
    </div>
    </Router>
  );
}

export default App;
