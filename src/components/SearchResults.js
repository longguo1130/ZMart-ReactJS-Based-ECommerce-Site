import React, { useContext,useEffect, useRef } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { SearchContext } from '../contexts/SearchContext';
import { ThemeContext } from '../contexts/ThemeContext';
import Product from './Product';
import '../css/SearchResults.css'

const SearchResults = () => {

  const { products } = useContext(ProductContext);
  const { searchTerm,dispatchSearchTerm } = useContext(SearchContext);
  const { theme } = useContext(ThemeContext);
  const activeTheme = theme.active_theme;

  const resultList = useRef([])

  const clearSearch = () => {
    dispatchSearchTerm({type: 'MODIFY_SEARCH_TERM',new_search_term: ''});
  }

  useEffect(()=>{
    resultList.current = [];

    let keyword = searchTerm.toUpperCase();
  
    products.forEach(prod => {
      let productDetail = prod.title + ' ' + prod.category;
      if(productDetail.toUpperCase().indexOf(keyword) > -1){
        resultList.current.push(prod);
      }
    })
    console.log(resultList.current);
  },[searchTerm])

  return (
    <div className="SearchResults">
      {searchTerm !== "" ?

      <div className="SearchResults-container">
        <h3 className="flow-text SearchResults-title" style={{background: activeTheme.secondary}}>
        <i className="material-icons" style={{paddingRight:5,fontSize:30}}>search</i>
        Results for "{searchTerm}" 
        <i alt="Clear Search!" className="material-icons" style={{fontSize:20,paddingTop:5,paddingLeft:10}} onClick={clearSearch}>close</i>
        </h3>
        
        <div className="SearchResults-products-container">
          {resultList.current.length > 0 ? 
            
          <div className="SearchResults-products" style={{display:'table-row'}}>
            
              {resultList.current.map(item => {
                return(
                  <Product product={item} activeTheme={activeTheme} parent={'SearchResults'} />
                )
              })}
            
          </div>
      
          :
          <p>No Results!</p>
          }
        </div>

      </div>

        :
        ''
      }
    </div>

    
  );
}
 
export default SearchResults;