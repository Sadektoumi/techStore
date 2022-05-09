
import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import swal from 'sweetalert2';
import axios from 'axios';




function Navbar  ()  {
  const history = useHistory();
  // const token = localStorage.getItem('token');
  // const headers = {
  //    'Content-Type': 'application/json',
  //    'Authorization': 'Bearer ' + `${token}`
  //   }
    
   

   const LogoutSubmit = async(e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    history.push('/');
    

    swal.fire({
      title: 'Do you want to Loggout',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'yes',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        swal.fire('Logged Out!', '', 'error')
        window.location.reload(false);
      } else if (result.isDenied) {
        swal.fire('Welcome Back', '', 'success')
      }
    })
    //
   

  };


   


  var AuthButtons ='';

  if(!localStorage.getItem('token'))
  {
    AuthButtons = (
  
      <ul >
      <li className="nav-item"><Link to="/"><i className="fa fa-home" />Acceuil</Link></li>
      <li className="nav-item"><Link to="/Reparation"><i className="fa fa-star" /> Réparation</Link></li>
      <li><Link to="/Panier"><i className="fa fa-shopping-cart" /> Panier</Link></li>
      <li className="nav-item" ><Link to="/Sinscrire"><i className="fa fa-user" />S'inscrire</Link></li>
      <li className="nav-item"><Link to="/SeConnecter"><i className="fa fa-lock" /> Se connecter</Link></li>
      </ul>
      )
  }
  else{
    AuthButtons =(

      <ul >
      <li className="nav-item"><Link to="/"><i className="fa fa-home" />Acceuil</Link></li>
      <li className="nav-item"><Link to="/Reparation"><i className="fa fa-star" /> Réparation</Link></li>
    <li><Link to="/Intervention"><i className="fa fa-crosshairs" /> Mes interventions</Link></li>
    <li><Link to="/Panier"><i className="fa fa-shopping-cart" /> Panier</Link></li>
    
    <li><button type='button' onClick={ LogoutSubmit} className='nav-lin btn btn-danger btn-sm text_white'>Logout</button></li>
    </ul>

    )
  }

  


  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };


  // const history = useHistory()

  // const handleLogout = () => {
  //   localStorage.removeItem("token")
  //   localStorage.removeItem("user")
  //   history.replace("/login")
  // }

  return (
    <div className="header-middle">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="logo pull-left">
              <Link to="/"><img src="images/home/logo56.png" alt="" /></Link>
            </div>
            <div className="btn-group pull-right">


            </div>
          </div>
          <div className="col-sm-8">
            <div className="shop-menu pull-right">
              <ul className="nav navbar-nav">
               
               
                  {AuthButtons}
                   
               
              
             
                  
                  
               
                    
                    
                  <ul/>
              
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>);
}

export default Navbar;
