import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage.component';
import { Switch,Route,BrowserRouter } from 'react-router-dom';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/Header/Header.component';
//import {Link} from 'react-router';
import SignInAndSignUpPage from './pages/SignIn-and-signup-component/SignIn-and-signup-component';
//import SignIn from './components/Sign-in/Sign-in-component';
import {auth} from './firebase/firebase.utils';







class App extends React.Component {

  constructor(){

    super();
    this.state={
      currentUser : null
    }
  }



  unsubscribeFromAuth = null

componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
      console.log(user);
    })

}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}




  render() {
    return (
      <div >
        <BrowserRouter>
       <Header currentUser={this.state.currentUser} />
        
        <Switch>
        <Route exact path = '/' component = {HomePage} />
        <Route exact path = '/shop' component = {ShopPage} />
        <Route exact path = '/signin' component = {SignInAndSignUpPage} />
        </Switch>
        </BrowserRouter>
        
       
      </div>
    );

  }
  
}

export default App;
