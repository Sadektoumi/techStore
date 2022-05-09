import React, { Component } from 'react';
import Categorie from './Categorie';
import Produit from './Produit';
import axios from 'axios';
function Home () {

    return (<div><Categorie /> 
    <div className="col-sm-9 padding-right"> <div>
    <Produit /> 


    </div> </div></div>);

}

export default Home;