/* Designed  by Alexander Hemming. With use of:

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
import About from "views/Blog.jsx";
import P from "views/Privacypolicy.jsx";

import LoginPage from "views/examples/LoginPage.js";
import Gallery from "views/Thanks.jsx";

import Word from "views/Word.jsx";
//bot






ReactDOM.render(

  

  <BrowserRouter>
  <Switch>
    <Switch>
      <Route path="/Home" render={props => <Index {...props} />} />
     
            <Route
        path="/About-me"
        render={props => <About {...props} />}
      />

<Route
        path="/Gallery"
        render={props => <Gallery {...props} />}
      />
     
     <Route
 path="/privacypolicy"
 render={props => <P {...props} />}
/>
<Route
 path="/word"
 render={props => <Word {...props} />}
/>



      <Route path="/login-page" render={props => <LoginPage {...props} />} />
      <Redirect to="/Home" />
      <Redirect from="/" to="/Home" />
    </Switch>
  </Switch>
</BrowserRouter>,

  


  
  document.getElementById("root")
);
