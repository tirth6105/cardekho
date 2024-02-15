import axios from "axios";
import { ADD_PRODUCT, GET, LOGIN, LOGOUT, SIGNUP } from "./ActionType";

export const signup = (data) => {
    return {
      type: SIGNUP,
      payload: data,
    };
  };
  
  export const login = (data) => {
    return {
      type: LOGIN,
      payload: data,
    };
  };
  
  export const logout = () => {
    return {
      type: LOGOUT,
    };
  };

  export const get =()=>async(dispatch)=>{
    let res = await axios.get(`http://localhost:8000/products`);
    dispatch({
        type : GET,
        payload : res.data
    })
}

export const addproduct = (data)=>async(dispatch)=>{
  let res =await axios.post('http://localhost:8000/products',data);
  dispatch({
      type : ADD_PRODUCT,
      payload : res.data
  })
}