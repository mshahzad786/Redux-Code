import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from './../components/navbar';
import Home from './index';
import Contact from './contact';
import About from './about';
import "../App.css"



function Routing() {

  return (
    <div className="main" >

      <Router>
        <Navbar/>

        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
       
             
         

        </Router>

    </div>

    );

}




export default Routing;