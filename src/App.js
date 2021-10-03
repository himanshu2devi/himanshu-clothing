import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage.component';
import { Switch,Route,BrowserRouter } from 'react-router-dom';


const HatsPage = () => (
  <div>
    <h1> HATS PAGE</h1>
    </div>
);

function App() {
  return (
    <div >
      <BrowserRouter>
      <Switch>
      <Route exact path = '/' component = {HomePage} />
      <Route exact path = '/hats' component = {HatsPage} />
      </Switch>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
