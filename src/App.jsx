import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom';
import { Router, Redirect } from "react-router";
import { createBrowserHistory } from "history";
// import { Route } from "react-router";

import Home from './features/home/home';
import { Authorization } from './app/common/utils/can';
import UserDetails from './features/auth/UserDetails';

import Logout from './features/auth/Logout';

import NavBar from './components/NavBar';
import RegisterPage from './components/RegisterPage';
import RoleList from './components/RoleList';
import LoginForm from './features/auth/Login';


const customHistory = createBrowserHistory();

        export default  function App() {
        
            return (
              <div>
        <Router history={customHistory}>
        <NavBar />
        <Switch>

          <Route exact path="/login" component={LoginForm} />

          {/* <Route exact path="/logout" component={Logout} />  */}

          <Route exact path="/home" component={Home}/>
{/* 
          <Route exact path="/logout" component={Authorization(Logout,["ADMIN","GP"])} /> */}

          <Route exact path="/roleList" component={Authorization(RoleList,["ADMIN"])}/>

          {/* <Route exact path="/home" component={Authorization(Home,["ADMIN"])} /> */}
             
      
       
              
      
        
        
        <Route exact path="/register" component={RegisterPage} />
        {/* <Route exact path="/userDetails" component={Authorization(UserDetails, ["ADMIN"])}/> */}
        {/* <Redirect to="/home" /> */}
        </Switch>
      </Router>
       
    </div>
  );
}



