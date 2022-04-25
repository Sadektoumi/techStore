import axios from 'axios';
import { LOGIN_SUCCESS, REGISTER_SUCCESS } from '../types';

export const register = (body,history) => async dispatch => {
    try{
        const res = await axios.post(`http://192.168.1.10:8000/api/register`,body);
        console.log('hey register',res.data)
        dispatch( {
            type: REGISTER_SUCCESS,
            payload: res.data.res
        })
        console.log('hey register',res.data)
        res.data.success !== undefined && res.data.success && history.replace("/SeConnecter")
    
    }
    catch(e){
        console.log('heyerror',e)
    }
}

export const login = (body,history ) => async dispatch => {
    try{
        const res = await axios.post(`http://192.168.1.10:8000/api/login`,body);
        console.log('heydata',res.data)
        dispatch( {
            type: LOGIN_SUCCESS,
            payload: res.data.res
        })

        res.data.success !== undefined && res.data.success && 
        localStorage.setItem("user",JSON.stringify(res.data))
        localStorage.setItem("token",res.data.access_token)
        history.replace("/")
    }
    catch(e){
        console.log('heyerror',e)
    }
}