
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './headerComponents/header';
import Footer from './footerComponents/footer';
import HomePage from './pages/homePage';
import Products from './pages/products';
import DetailedItems from './pages/detailedItems'
import ProfilePage from './pages/profilePage'
import Chat from './pages/chat'
import PostAddress from './pages/postAddress'
import PostImage from './pages/postImage'
import PostContact from './pages/postContact'
import PostInfo from './pages/postInfo'
import Notification from './pages/notification'
import LikedPosts from './pages/likedPosts'
import './assets/default.css'
import { Switch } from 'react-router-dom'
import PrivateRoute  from './myapp/Utils/PrivateRoute'
import PublicRoute from './myapp/Utils/PublicRoute'

import Login from './myapp/pages/login'
import NotFoundScreen from './myapp/pages/notfound'
import Register from './myapp/pages/register/register'
import Home from './myapp/pages/home/home'
import ForgotPassword from './myapp/pages/forgot-password'
import RegisterRenterScreen from './myapp/pages/register/register-renter'
import RegisterOwnerScreen from './myapp/pages/register/register-owner'
function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
          <Switch>
              {/* <Route exact path='/' component={SlideShow} /> */}
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
              <Route exact path='/LikedPosts' component={LikedPosts}/>
          
              {/* <PublicRoute exact path="/" component={Home} /> */}
              <PublicRoute path="/login" component={Login} />
              <PublicRoute path="/register" component={Register} />
              <PublicRoute path="/forgotpass" component={ForgotPassword} />
              <PublicRoute path="/renter" component={RegisterRenterScreen} />
              <PublicRoute path="/owner" component={RegisterOwnerScreen} />
              <Route component={NotFoundScreen} />
          </Switch>
          {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
