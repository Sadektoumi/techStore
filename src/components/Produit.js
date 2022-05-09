
import { useHistory } from "react-router-dom";
import React, { useEffect , useState} from 'react';
import axios from 'axios';
import swal from "sweetalert2";



function ListProduit (){
  
  const history = useHistory();
  const [products,setProducts] = useState([]);
  
  function saveCart(cart){
    localStorage.setItem('cart' , JSON.stringify(cart))
  }
  
  function getCart(){
    if (localStorage.getItem('cart') == null ){
     return []
    } else {
      return JSON.parse(localStorage.getItem('cart'))

    }
  }
  
  function addToCart(product){
    let cart = getCart();
    cart.push(product);
    saveCart(cart);
    swal.fire('added to the cart', '', 'success');
    
   
  }

     useEffect(() => {
    let isMounted = true

    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + `${token}`
    }
    
    axios.get("http://127.0.0.1:8000/api/afficherProduits")
    .then(res => {
        console.log('heydata',res.data)
        setProducts(res.data.message)
     
    
    }).catch(err => {
      console.log(err)
    })

    return() => {isMounted =false
    };

  },[history]);





  var showProductList ='';
  showProductList = products.map((item) => (
    <div className="col-md-3">
      <div className="card"> 
        <div className="car_body">
      <div className="single-products">
      <div className="productinfo text-center">
        <img src="images/home/product1.jpg" alt="" />
        <h2>{item.produitDesc}</h2>
        <p>{item.produitImg}</p>
        <p>{item.prix}</p>
        <button className="btn btn-default add-to-cart" onClick={()=>addToCart({product:item.produitImg ,product_id : item.id, product_price: item.prix , product_desc : item.produitDesc , Qte : 1})}><i className="fa fa-shopping-cart" />Add to cart</button>
      </div>
      </div>
      </div>
      </div>
      </div>
      
    
  ))
  



 
    return (
      
      <div className="row">
      
         <div className="product-image-wrapper">
       
       {showProductList}
      </div>
     
    </div>
   
    )
}
export default ListProduit;
