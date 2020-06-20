import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../css/Cart.css'
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem';

const Cart = () => {

  const { theme } = useContext(ThemeContext);
  const activeTheme = theme.active_theme;

  const { cart,dispatchCart } = useContext(CartContext);

  let cartTotal = 0;

  const clearCart = () => {
    alert("Thank you for shopping with ZMart!");
    dispatchCart({type:'CLEAR_CART'});
  }

  return (
    <div className="Cart col l4 m4 s4" style={{background: activeTheme.primary,color:activeTheme.text}}>
      <h3 className="flow-text Cart-title" style={{background: activeTheme.secondary}}>
      <i className="material-icons" style={{paddingRight:5,fontSize:30}}>shopping_cart</i>
      My Cart</h3>

      {cart.length > 0 ?
      <table className="centered responsive Cart-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody>
          {cart.map(item => {
            cartTotal += (item.quantity*item.price);
            return (
              <CartItem activeTheme={activeTheme} item={item} dispatchCart={dispatchCart} key={item.id} />
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2"><div className="Cart-checkout-button" style={{background: activeTheme.secondary,cursor:'pointer'}} onClick={clearCart}><i className="material-icons left" style={{fontSize:20}}>local_shipping</i> Checkout</div></td>
            
            
            <td>Gross Total:<br />GST:<br />Net Total:</td>
            <td>${cartTotal.toFixed(2)} <br /> ${(0.20*cartTotal).toFixed(2)} <br /> <b>${(1.20*cartTotal).toFixed(2)}</b></td>
            
          </tr>
        </tfoot>
        
      </table>   
      : 
      <p>You have no products in the cart! <br />Browse and add items to continue!</p>
     
    
      }

    </div>
  );
}
 
export default Cart;