import React, { useState } from 'react';
import Categorie from './Categorie';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert2';

// import { LOGIN_SUCCESS,GET_TICKETS_SUCCESS, REGISTER_SUCCESS } from '../types';
import {postIntervention} from '../redux/actions/user.actions';

function Reparation() {

  const [name, setname] = useState("");
  const [type, settype] = useState("");
  const [maintenance, setmainteance] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const handlename = (e) => {
    setname(e.target.value)
  }

  const handletype = (e) => {
    settype(e.target.value)
  }

  const handlemaintenance = (e) => {
    setmainteance(e.target.value)
  }

  const handleSubmit = async () => {
  
    let data = {
      name : name,
      type :type ,
      maintenance : maintenance,

    }
    let Authorization = localStorage.getItem("token");
    dispatch(await postIntervention (data, Authorization , history))
    if ( Authorization == null) {
      history.push('/SeConnecter')
      swal.fire('you need to login', '', 'error')
    }
  }

  return (<div> <Categorie /> <div className="col-sm-9 padding-right">
    <div className="col-sm-9 col-sm-offset-1">

  <div className="bill-to">
  <p>Réparation</p>
  <div className="login-form ">
  <form onSubmit={e => e.preventDefault()}>
  <input type="text" placeholder="Marque de PC *" value={name} onChange={handlename} required />

  <select value={type} onChange={handletype} required>
  <option >Choissiez votre type de machine</option>
  <option value={"PC portable"}>PC Portable</option>
  <option value={"pc fixe"}>PC Fixe</option>
  </select>
  <p></p>
 <select value={maintenance} onChange={handlemaintenance}>
  <option>Choisisser votre panne</option>
  <option value={"Réparation et maintenance PC"}>Réparation et maintenance PC</option>
  <option value={"Maintenance Systèmes et Equipements"}>Maintenance Systèmes et Equipements</option>
  <option value={"Récupération données disque dur"}>Récupération données disque dur</option>
  <option value={"Réseau informatique et internet"}>Réseau informatique et internet</option>
  <option value={"Sécurité informatique et antivirus"}>Sécurité informatique et antivirus</option>
</select>
<button className="btn btn-primary" onClick={handleSubmit} >Reparer</button>
 </form>
 </div>
 </div></div></div></div>
 );
}
       

 
export default Reparation;