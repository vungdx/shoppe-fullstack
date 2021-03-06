import Axios from "axios";
import Cookie from 'js-cookie';
import { USER_SIGNIN_REQUEST, CLEAR_SIGNIN, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from "../constants/userContants";

export const signin = (email, password) => async (dispatch) => {
    dispatch({
        type: USER_SIGNIN_REQUEST,
        payload: { email, password }
    });
    try {
        const { data } = await Axios.post('/api/users/signin', {
            email, password
        })

        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        })

        Cookie.set("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: error.response.data.message
        })
    }
}

export const register = (name, email, password, repassword) => async (dispatch) => {
    dispatch({
        type: USER_REGISTER_REQUEST,
        payload: { name, email, password, repassword }
    });
    try {
        const { data } = await Axios.post('/api/users/register', {
            name, email, password, repassword
        })
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
        Cookie.set("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearSignin = () => async (dispatch) => {
    dispatch({
        type: CLEAR_SIGNIN
    })
}