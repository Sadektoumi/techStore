import axios from 'axios';
import { LOGIN_SUCCESS, REGISTER_SUCCESS } from '../types';
import swal from 'sweetalert';
import Swal from 'sweetalert2';

export const register = (body,history) => async dispatch => {
    try{
        const res = await axios.post(`http://127.0.0.1:8000/api/register`,body);
        console.log('hey register',res.data)
        dispatch( {
            type: REGISTER_SUCCESS,
            payload: res.data.res
        })
        console.log('hey register',res.data)
        swal("success",res.data.message,"success");
        res.data.success !== undefined && res.data.success && history.replace("/SeConnecter")
    
    }
    catch(e){
        console.log('heyerror',e)
    }
}

export const login = (body,history ) => async dispatch => {
    try{
        const res = await axios.post(`http://127.0.0.1:8000/api/login`,body);
        console.log('heydata',res.data)
        dispatch( {
            type: LOGIN_SUCCESS,
            payload: res.data.res
        })
        swal("success",res.data.message,"success");

        res.data.success !== undefined && res.data.success && 
        localStorage.setItem("user",JSON.stringify(res.data))
        localStorage.setItem("token",res.data.access_token)
        history.push('/');
        window.location.reload(false);
    }
    catch(e){
        console.log('heyerror',e)
    }
}



export const postIntervention = (body,Authorization,history) => async dispatch => {
  
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + `${Authorization}`
      }
      
      axios.post("http://127.0.0.1:8000/api/interventionPost", body, {
          headers: headers
        })
        .then((response) => {
            console.log('hey intervention',response.data)
            dispatch( {
                type: REGISTER_SUCCESS,
                payload: response.data.res
               
            })
            Swal.fire('intervention Successfully created', '', 'success');
            history.replace("/")
        })
        .catch((error) => {
            console.log('heyerror',error)
        })
}

 export const logout = (Authorization,history)=> async dispatch => {
    
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + `${Authorization}`
      }

      axios.post(`http://127.0.0.1:8000/api/logout`, {
        headers: headers
      })
      
      .then(res => {
        if(res.data.status === 201){
          localStorage.removeItem('token');
          swal("success",res.data.message,"success");;
          history.push('/');
          
        } 
    
    
       })
        




   
}

export const postCommande = (body,Authorization,history) => async dispatch => {
  
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + `${Authorization}`
      }
      
      axios.post("http://127.0.0.1:8000/api/CommandePost", body, {
          headers: headers
        })
        .then((response) => {
            console.log('hey commande',response.data)
            dispatch( {
                type: REGISTER_SUCCESS,
                payload: response.data.res
               
            })
            Swal.fire('commande Successfully created', '', 'success');
            history.replace("/")
        })
        .catch((error) => {
            console.log('heyerror',error)
        })
}

