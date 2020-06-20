import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { ThemeContext } from '../contexts/ThemeContext';
import Product from './Product';
import '../css/AllItems.css'

const AllItems = () => {

  const { products } = useContext(ProductContext);
  const { theme } = useContext(ThemeContext);
  const activeTheme = theme.active_theme;

  return (
    
    <div className="AllItems" style={{background: activeTheme.primary, color: activeTheme.text,marginLeft:15}}>
      <h3 className="flow-text AllItems-title" style={{background: activeTheme.secondary}}>
      <i className="material-icons" style={{paddingRight:5,fontSize:30}}>trending_up</i>
      All Products</h3>
      
      <div className="flex">
        {products.map(product => {
          return (
            <Product product={product} activeTheme={activeTheme} key={product.id} parent={'TopItems'}/>
          )
        })}
      </div>

    </div>
  );
}
 
export default AllItems;