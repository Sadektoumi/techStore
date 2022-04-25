import React, { Component } from 'react';
import Categorie from './Categorie';
import Produit from './Produit';
import axios from 'axios';
function Home () {

    return (<div><Categorie /> <div className="col-sm-9 padding-right"> <div>
        {/* {this.state.produits.map((data, i) => (
            <Produit key={i} produit={data} />
        ))} */}
    </div> </div></div>);

}

export default Home;