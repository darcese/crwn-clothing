import React from 'react';



//import { BrowserRouter } from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import './App.css';


import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Header from './components/header/header.component.jsx';

import {auth} from './firebase/firebase.utils.js';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    //Review Line Below. onAuthStateChanged fires notjust when mounting but whenever 
    // the authstatechanges/ the code below just creates a place in memory
    // to hangle the event onAuthStateChanged
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});

      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (<div> 
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/sign-in' component={SignInAndSignUpPage} />
      </Switch>
   </div>);
  }
  
}

export default App;
