import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage.component';
import { Switch,Route,BrowserRouter } from 'react-router-dom';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/Header/Header.component';
import {Link} from 'react-router';



function App() {
  return (
    <div >
      <BrowserRouter>
     
      
      <Switch>
      <Route exact path = '/' component = {HomePage} />
      <Route exact path = '/shop' component = {ShopPage} />
      </Switch>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
