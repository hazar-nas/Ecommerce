import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducer'
import {userLoginReducer, userRegisterReducer, userDetailsReducer,updateProfileReducer} from './reducers/userReducers'
import {orderCreateReducer, orderDetailsReducer} from './reducers/orderReducer';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  updateProfile: updateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const usersFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

  const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  :{}



const initialState = {
  cart: {cartItems: cartItemsFromStorage , shippingAddress:shippingAddressFromStorage}, 
  userLogin: {userInfo: usersFromStorage},
}

const middleware = [thunk]


const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
