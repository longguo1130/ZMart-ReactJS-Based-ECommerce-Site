export const CartReducer = (state,action) => {
  switch(action.type){
    case 'ADD_TO_CART':
      //If item is already in cart, increase the quantity of it, else add it as new entry
      let cartEntry = state.filter(cart => cart.product_id === action.product.product_id);
      let restOfCart = state.filter(cart => cart.product_id !== action.product.product_id);

      console.log(cartEntry);
      console.log(restOfCart);

      if (cartEntry.length){
        if(restOfCart.length){
          let newState = [...restOfCart,{id: cartEntry[0].id, product_id: cartEntry[0].product_id, price: cartEntry[0].price, quantity: cartEntry[0].quantity+1}];
          newState.sort((a,b) => a.id - b.id);
          return newState;
        }
        else{
          return [{id: cartEntry[0].id, product_id: cartEntry[0].product_id, price: cartEntry[0].price, quantity: cartEntry[0].quantity+1}];
        }
      }
      else{
        return [...state,{id: state.length+1,product_id:action.product.product_id,price: action.product.price,quantity: 1}];
      }
      
    case 'REMOVE_FROM_CART':
      return state.filter(cart => cart.id !== action.product.cart_id);


    case 'DECREASE_FROM_CART':

      let cartItem = state.filter(cart => cart.product_id === action.product.product_id);
      let restOfCartItems = state.filter(cart => cart.product_id !== action.product.product_id);

      if(action.product.quantity > 1){
        let newState = [...restOfCartItems,{id:action.product.cart_id,product_id:action.product.product_id,price: action.product.price,quantity: action.product.quantity-1}];
        newState.sort((a,b) => a.id - b.id );
        return newState; 
      }
      else{
        return [...restOfCartItems];
      }
      
    case 'CLEAR_CART':
      return [];

    default:
      return state;
  }
}