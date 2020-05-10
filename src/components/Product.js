import React, { useContext } from 'react';
import '../css/Product.css'
import { CartContext } from '../contexts/CartContext';

const Product = ({product,activeTheme,parent}) => {
  
  const { dispatchCart } = useContext(CartContext);

  const addToCart = (id) => {
    dispatchCart({type: 'ADD_TO_CART', product: {product_id:product.id,price:product.price}})
  }


  if(parent === 'TopItems'){
    return (
      <div className='Product' key={product.id} style={{background: activeTheme.secondary, marginBottom:15,width:150,marginRight:10,display:'table-cell',height: 300}}>

        <div className="Product-img material-icons">
        broken_image
        </div>

        <div className="Product-title">
          {product.title}
        </div>

        <div className="Product-category" style={{background:activeTheme.primary}}>
        {product.category}
        </div>

        <div className="Product-price">
          ${product.price}
        </div>

        <div className="Product-buy" style={{background:activeTheme.primary}} onClick={() => addToCart(product.id)}>
        <i className="material-icons left" style={{fontSize:20}}>add_shopping_cart</i>
          Add To Cart
        
        </div>

    </div>
  );
  }

  if(parent === 'SearchResults'){
    return (
      <div className='Product' key={product.id} style={{background: activeTheme.primary, marginBottom:15,width:160,marginRight:10,display:'table-cell',height: 300,border:'3px solid',borderColor:activeTheme.secondary}}>

        <div className="Product-img material-icons">
        broken_image
        </div>

        <div className="Product-title">
          {product.title}
        </div>

        <div className="Product-category" style={{background:activeTheme.secondary}}>
        {product.category}
        </div>

        <div className="Product-price">
          ${product.price}
        </div>

        <div className="Product-buy" style={{background:activeTheme.secondary}} onClick={() => addToCart(product.id)}>
        <i className="material-icons left" style={{fontSize:19}}>add_shopping_cart</i>
          Add To Cart
        
        </div>

    </div>
  );
  }
  
}
 
export default Product;