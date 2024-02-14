// product

import { ADD_CART, GET_CART, GET_PRODUCT, REMOVE_PRODUCT, SINGLE_PRODUCT } from "./ActionType";

export const Get_Product=(data)=>async(dispatch)=>{
    let user=await axios.get(`http://localhost:8090/product`)
    dispatch({
        type:GET_PRODUCT,
        payload:user.data
    })
}

// single product

export const Single_Product = (id) => async (dispatch) => {
    let res = await axios.get(`http://localhost:8090/product/${id}`);
    dispatch({
      type: SINGLE_PRODUCT,
      payload: res.data,
    });
  };
  
  export const Add_Cart = (data) => async (dispatch) => {
    let res = await axios.post(" http://localhost:8090/cart", data);
  
    dispatch({
      type: ADD_CART,
      payload: res.data,
    });
  };
  
  
  
  export const Get_Cart = () => async (dispatch) => {
    let res = await axios.get("http://localhost:8090/cart");
    dispatch({
      type: GET_CART,
      payload: res.data,
    });
  };
  
  
  
  
  export const Remove_Product = (id) => async (dispatch) => {
    let res = await axios.delete(`http://localhost:8090/cart/${id}`);
    dispatch({
      type: REMOVE_PRODUCT,
      payload: id,
    });
  };