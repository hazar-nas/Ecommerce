// dispatch is a hook from react-redux to call or raise an action to change the redux state.
// the parameter of dispatch  is a function that returns another function. 
// the second function accept dispatch and getState from redux-thunk.
// in the useEffect [dispatch] is a dependency variable and when it changes the useEffect runs again.
import axios from 'axios'

import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
} from '../constants/productConstants'

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })

    const { data } = await axios.get('/api/products') // we've defined proxy as localhost:5000 so it can perform that routing 
   
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST }) // using dispatch we provoke or create a func right here

    const { data } = await axios.get(`/api/products/${id}`) // we've defined proxy as localhost:5000 so it can perform that routing 
   
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

