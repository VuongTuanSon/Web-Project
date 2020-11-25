
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
import DetailedItems from './pages/detailedItems'
import ProfilePage from './pages/profilePage'
import Chat from './pages/chat'
import PostAddress from './pages/postAddress'
import PostImage from './pages/postImage'
import PostContact from './pages/postContact'
import PostInfo from './pages/postInfo'
import Notification from './pages/notification'
import './assets/default.css'

function App() {
  return (
    <Router>
    <div className="App">
              <Header />
              <Route exact path='/' component={SlideShow} />
              <Route exact path='/' component={HomePage} />
              <Route exact path='/Products' component={Products} />
              <Route exact path='/DetailedItems' component={DetailedItems} />
              <Route exact path='/ProfilePage' component={ProfilePage} />
              <Route exact path='/Chat' component={Chat} />
              <Route exact path='/PostAddress' component={PostAddress} />
              <Route exact path='/PostImage' component={PostImage} />
              <Route exact path='/PostContact' component={PostContact} />
              <Route exact path='/PostInfo' component={PostInfo} />
              <Route exact path='/Notification' component={Notification}/>
              <Footer />
    </div>
    </Router>
  );
}

export default App;
