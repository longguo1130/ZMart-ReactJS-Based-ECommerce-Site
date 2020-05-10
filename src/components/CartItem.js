import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import '../css/CartItem.css'

const CartItem = ({item,activeTheme,dispatchCart}) => {

  const { products } = useContext(ProductContext);
  const currProduct = products.filter(product => product.id === item.product_id)[0];
  
  const handleDelete = () => {
    dispatchCart({type: 'REMOVE_FROM_CART', product: { product_id:item.product_id, cart_id:item.id } });
  }

  const handleIncreaseQuantity = () => {
    dispatchCart({type: 'ADD_TO_CART', product: {product_id: item.product_id, price: item.price}});
  }

  const handleDecreaseQuantity = () => {
    dispatchCart({type: 'DECREASE_FROM_CART', product: {cart_id:item.id,product_id:item.product_id,price:item.price,quantity:item.quantity}})
  }

  return (
    <tr className="CartItem" key={item.id}>
      <td>{currProduct.title}</td>
      <td>{item.price}</td>
      <td>
        <i className="material-icons" style={{fontSize:16,padding: 3,cursor:'pointer'}} onClick={() => handleDecreaseQuantity()}>remove</i>
        {item.quantity}
        <i className="material-icons" style={{fontSize:16,padding:3,cursor:'pointer'}} onClick={() => handleIncreaseQuantity()}>add</i>
      </td>
      <td>{(item.price*item.quantity).toFixed(2)}</td>
      <td>
        <i className="material-icons" onClick={() => handleDelete()} style={{cursor: 'pointer'}}>delete_forever</i>
      </td>
    </tr>
  );
}
 
export default CartItem;