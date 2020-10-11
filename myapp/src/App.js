import React from 'react';
import './App.css';
import HomePage from './components/homepage/pages/homepage.component'
import {Route,Switch} from 'react-router-dom'
import ShopPage from './containers/ShopPage/ShopPage.container'
import Header from './components/header/header.component'
import SignInAndSignUp from './components/Sign-In-And-Sign-Up/sign-in-and-sign-Up.component'
import {auth} from './firebase/firebase.utils'
class App extends React.Component{
state = {
  currentUser: null,
}
  unsubscribeAuth = null;
  componentDidMount(){
  this.unsubscribeAuth = auth.onAuthStateChanged((user)=>{
      this.setState({currentUser: user})
    })
  }
  componentWillUnmount(){
    this.unsubscribeAuth()
  }
  render(){
    return (
    <div>
    <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>      
        <Route exact path="/shop" component={ShopPage}/>  
        <Route exact path="/signin" component={SignInAndSignUp}/>  
      </Switch>    
    </div>
  );
  }
}

export default App;
