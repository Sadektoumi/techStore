import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Navbar = ({ user }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const history = useHistory()

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    history.replace("/login")
  }

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

                <li><Link to="/Reparation"><i className="fa fa-star" /> Réparation</Link></li>
                {user !== null && user !== undefined && (
                  <>
                    <li><Link to="/Intervention"><i className="fa fa-crosshairs" /> Mes interventions</Link></li>
                  </>
                )}
                {user == null && (
                  <>
                    <li><Link to="/Panier"><i className="fa fa-shopping-cart" /> Panier</Link></li>
                    <li><Link to="/Sinscrire"><i className="fa fa-user" />S'inscrire</Link></li>
                    <li><Link to="/SeConnecter"><i className="fa fa-lock" /> Se connecter</Link></li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>);
}

export default Navbar;
