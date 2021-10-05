import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage.component';
import { Switch,Route,BrowserRouter } from 'react-router-dom';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/Header/Header.component';
import {Link} from 'react-router';
import SignInAndSignUpPage from './pages/SignIn-and-signup-component/SignIn-and-signup-component';
import SignIn from './components/Sign-in/Sign-in-component';



function App() {
  return (
    <div >
      <BrowserRouter>
     <Header />
      
      <Switch>
      <Route exact path = '/' component = {HomePage} />
      <Route exact path = '/shop' component = {ShopPage} />
      <Route exact path = '/signin' component = {SignInAndSignUpPage} />
      </Switch>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
