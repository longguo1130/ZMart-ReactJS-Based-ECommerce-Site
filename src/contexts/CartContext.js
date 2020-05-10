import React, { useReducer,createContext } from 'react';
import { CartReducer } from '../reducers/CartReducer';


export const CartContext = createContext();

const CartContextProvider = (props) => {

  const initialState = [
    
  ]

  const [cart,dispatchCart] = useReducer(CartReducer,initialState)

  return (
    <CartContext.Provider value={{cart,dispatchCart}}>
      {props.children}
    </CartContext.Provider>
  );
}
 
export default CartContextProvider;