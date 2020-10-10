import React from 'react';
import './App.css';
import HomePage from './components/homepage/pages/homepage.component'
import {Route,Switch} from 'react-router-dom'
import ShopPage from './containers/ShopPage/ShopPage.container'
import Header from './components/header/header.component'

function App() {
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>      
        <Route exact path="/shop" component={ShopPage}/>  
      </Switch>    
    </div>
  );
}

export default App;
