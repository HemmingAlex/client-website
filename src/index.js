/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index.js";
import Blog from "views/Blog.jsx";


import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Fiction from "Book/Fiction/Fiction.jsx";
import Gallary from "views/Thanks.jsx";
import PoliticalTheory from "Book/PoliticalTheory/PoliticalTheory.jsx";
import Intro from "Book/PoliticalTheory/Intro/Intro.jsx";

//bot
import Debate from "bot/Debate/Debate.jsx";




ReactDOM.render(

  

  <BrowserRouter>
  <Switch>
    <Switch>
      <Route path="/index" render={props => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={props => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
            <Route
        path="/Blog"
        render={props => <Blog {...props} />}
      />



<Route
        path="/debate"
        render={props => <Debate {...props} />}
      />
      

<Route
        path="/About-me"
        render={props => <Gallary {...props} />}
      />

<Route
        path="/Intro"
        render={props => <Intro {...props} />}
      />

      <Route path="/login-page" render={props => <LoginPage {...props} />} />
      <Redirect to="/index" />
      <Redirect from="/" to="/index" />
    </Switch>
  </Switch>
</BrowserRouter>,

  


  
  document.getElementById("root")
);
