import { LOGIN_SUCCESS, REGISTER_SUCCESS } from '../types';

const initialState = {

    user: {},
    token: null,
    newUser: {},
    token: localStorage.getItem("token"),
}
export default function loginReducer(state = initialState, action) {

    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                token: action.payload
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                newUser: action.payload
            }
        
        default: return state
    }
}
