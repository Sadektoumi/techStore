import React, { Component } from 'react';
import Categorie from './Categorie';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/user.actions'


function SeConnecter() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [email, setemail] = React.useState("")
  const [password, setpassword] = React.useState("")

  const handleEmail = (e) => {
    setemail(e.target.value)
  }
  const handlePassword = (e) => {
    setpassword(e.target.value)
  }

  const handleSubmit = async (e) => {

    let data = {
      email: email,
      password: password
    }
    dispatch(await login(data, history))
  }

  return (
    <div>
      <Categorie />
      <div className="col-sm-9 padding-right">
        <div className="col-sm-9 col-sm-offset-1">
          <div className="login-form">
            <h2>Se Connecter</h2>
            <form onSubmit={e => e.preventDefault()}>
              <input value={email}
                onChange={handleEmail} type="email" placeholder="Email" />
              <input value={password}
                onChange={handlePassword} type="password" placeholder="mot de passe" />
              <button className="btn btn-default" onClick={handleSubmit}>Login</button>
            </form>
          </div>
        </div></div></div>
  );
}

export default SeConnecter;