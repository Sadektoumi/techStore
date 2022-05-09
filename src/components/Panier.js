import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { postCommande } from '../redux/actions/user.actions'
import swal from 'sweetalert2';

function saveCart(cart){
  localStorage.setItem('cart' , JSON.Stringift(cart))
}

function getCart(){
  if (localStorage.getItem('cart') == null ){
    return []
   } else {
     return JSON.parse(localStorage.getItem('cart'))

   }
}




 
const  handleIncrement = async () => {

}


const  handleDeccrement = async () => {


}




let cart = getCart()
var showCart ='';
showCart = cart.map((item) => (
  <tr>
  <td className="car_image">
    <p>{item.product}</p>
   
  </td>
  <td className="cart_price">
    <p>{item.product_desc}</p>
  </td>
  <td>
<div>
  <button type='button' onClick={()=>handleIncrement} className='input-group-text'>+</button>
  <div>{item.Qte}</div>
  <button type='button' onClick={()=>handleDeccrement} className='input-group-text'>-</button>
</div>
  </td>
  <td className="cart_total">
    <p className="cart_total_price">{item.product_price}</p>
  </td>
 <td><p className="cart_total_price">{item.product_price*item.Qte}</p></td>
</tr>

))





function Panier() {
  const history = useHistory()
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
const handleSubmit = async (e) => {
 
  if(token==null){
    history.push('/SeConnecter')
    swal.fire('you need to login', '', 'error')
  }
  cart = JSON.parse(localStorage.getItem('cart'))
   let data = {
    description : cart
 
   }
   let Authorization = localStorage.getItem("token");
   dispatch(await postCommande (data, Authorization , history))
 }

 const handledelete = async(e) => {
  
  localStorage.removeItem('cart');
  window.location.reload(false);
  
 }
  return (<table className="table table-bordered">
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Description</th>
      <th>le nombre_de_produit_commander</th>
      <th>Price</th>
      
      
      <th>Total</th>
     
    </tr>
  </thead>
  <tbody>
   

  {showCart}
  <tr>
  <div><button className="btn btn-primary" onClick={handleSubmit}  >Commander</button></div>
  <div><button className="btn btn-primary" onClick={handledelete}  >Vider</button></div>
  </tr>

   
  </tbody>

</table>



  )
}
 
export default Panier;