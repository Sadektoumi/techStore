import Categorie from './Categorie';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

// import { LOGIN_SUCCESS,GET_TICKETS_SUCCESS, REGISTER_SUCCESS } from '../types';
import {register} from '../redux/actions/user.actions';

function Sinscrire() {
  const [nom, setnom] = useState("");
  const [password, setpassword] = useState("");
  const [pseudo, setpseudo] = useState("");
  const [prenom, setprenom] = useState("");
  const [cin, setcin] = useState("");
  const [adresse, setadresse] = useState("");
  const [telephone, settelephone] = useState("");
  const [codePostal, setcodePostal] = useState("");
  const [sexe, setsexe] = useState("");
  const [email, setemail] = useState("");

  const handlenom = (e) => {
    setnom(e.target.value)
  }

  const handleemail = (e) => {
    setemail(e.target.value)
  }

  const handlepassword = (e) => {
    setpassword(e.target.value)
  }

  const handlepseudo = (e) => {
    setpseudo(e.target.value)
  }

  const handleprenom = (e) => {
    setprenom(e.target.value)
  }

  const handlecin = (e) => {
    setcin(e.target.value)
  }

  const handleadresse = (e) => {
    setadresse(e.target.value)
  }

  const handletelephone = (e) => {
    settelephone(e.target.value)
  }

  const handlecodePostal = (e) => {
    setcodePostal(e.target.value)
  }

  const handlesexe = (e) => {
    setsexe(e.target.value)
  }

  
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async () => {
 
    let data = {
      nom : nom,
      prenom :prenom ,
      password : password,
      email : email,
      pseudo :pseudo ,
      sexe : sexe,
      codePostal : codePostal,
      cin : cin,
      telephone : telephone,
      adresse  : adresse
    }
    dispatch(await register(data, history))
  }



  return (<div>
    <Categorie />
    <div className="col-sm-9 padding-right">
    <div className="col-sm-9 col-sm-offset-1">
      <p>S'inscrire</p>
      
      <div className="login-form ">
        <form onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Email *" value={email} onChange={handleemail} required />
          <input type="text" placeholder="S'identifier *" value={pseudo} onChange={handlepseudo} required />
          <input type="password" placeholder="mot de passe * " value={password} onChange={handlepassword} required />
          <select placeholder ="sexe" value={sexe} onChange={handlesexe} required>
           <option>sexe</option> 
            <option value={"Homme"}>Homme</option>
            <option value={"Femme"}>Femme</option>
          </select>
          <p></p>
          <input type="text" placeholder="Nom *" value={nom} onChange={handlenom} required />
          <input type="text" placeholder="Prenom *" value={prenom} onChange={handleprenom} required />
          <input type="text" placeholder="Telephone *" value={telephone} onChange={handletelephone} required />
          <input type="text" placeholder="Addresse *" value={adresse} onChange={handleadresse} required />
          <input type="text" placeholder="Code Postal *" value={codePostal} onChange={handlecodePostal} required />
          <input type="text" placeholder="Cin *" value={cin} onChange={handlecin} required />
          <button className="btn btn-primary" onClick={handleSubmit}>S'inscrire</button>
        </form>
      </div>
    </div> </div></div>);
}


export default Sinscrire;