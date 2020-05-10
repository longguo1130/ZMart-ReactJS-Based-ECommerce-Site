import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { ThemeContext } from '../contexts/ThemeContext';
import Product from './Product';
import '../css/TopItems.css'

const TopItems = () => {

  const { products } = useContext(ProductContext);
  const { theme } = useContext(ThemeContext);
  const activeTheme = theme.active_theme;

  const top_products = products.filter(product => product.top_item);

  return (
    
    <div className="TopItems col l7 m7 s7" style={{background: activeTheme.primary, color: activeTheme.text,marginLeft:15}}>
      <h3 className="flow-text TopItems-title" style={{background: activeTheme.secondary}}>
      <i className="material-icons" style={{paddingRight:5,fontSize:30}}>trending_up</i>
      Trending Products</h3>
      
      <div className="flex">
        {top_products.map(product => {
          return (
            <Product product={product} activeTheme={activeTheme} key={product.id} parent={'TopItems'}/>
          )
        })}
      </div>

    </div>
  );
}
 
export default TopItems;