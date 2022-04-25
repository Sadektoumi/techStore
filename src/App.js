import React , {Component} from 'react';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import Home from './components/Home';

import './App.css';
import DetailsProduit from './components/DetailsProduit';
import SeConnecter from './components/SeConnecter';
import Sinscrire from './components/Sinscrire';
import Footer from './components/Footer';
import Reparation from './components/Reparation';
import Intervention from './components/Intervention';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Panier from './components/Panier';
import { ProtectedRoute} from './protected.route';
import { NoAuthRoute } from './noauth.route';

function App () {
  const user = localStorage.getItem("user")
  const token = localStorage.getItem("token")
    return (
      <Router >
      <div> <Navbar user={user}/>
    <Slider />
    <section>
    <div class="container">
        <div class="row" style={{textAlign: "center"}}>
    
    
    <Switch>
    <ProtectedRoute exact path="/">
            <Home />
          </ProtectedRoute>
          <ProtectedRoute exact path="/Sinscrire">
            <Sinscrire />
          </ProtectedRoute>
          <ProtectedRoute exact path="/Reparation">
            <Reparation />
          </ProtectedRoute>
          <ProtectedRoute exact path="/Intervention">
            <Intervention />
          </ProtectedRoute>
          <ProtectedRoute exact path="/SeConnecter">
            <SeConnecter />
          </ProtectedRoute>
          <ProtectedRoute path="/Panier">
            <Panier />
          </ProtectedRoute>
          <ProtectedRoute path="*">
            <Home />
          </ProtectedRoute>
        </Switch>
    
   </div>
   </div>
   </section>
   <Footer />
         </div>
         
         </Router> );
  
}
 
export default App;
