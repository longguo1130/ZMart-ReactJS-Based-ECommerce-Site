import React, { createContext,useReducer } from 'react';
import {ProductReducer} from '../reducers/ProductReducer';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {

  const initialState = [
    {id: 1, title: 'Kedmi Note 4', description: 'An official Xi Kedmi note 4 device.', category: 'Electronics', price: 249.99,top_item: false, stock: 25},
    {id: 2, title: 'VCorp Woollen Sweater', description: 'VCorp branded official woollen sweater', category: 'Fashion', price: 29.99,top_item: true, stock: 15},
    {id: 3, title: 'ZPhone 3S', description: 'An official ZPhone 3S device.', category: 'Electronics', price: 1249.99,top_item: true, stock: 87},
    {id: 4, title: 'VCorp pants', description: '', category: 'Fashion', price: 9.99,top_item: true, stock: 65},
    {id: 5, title: 'CDE Home Cleaner', description: 'CDE Corp official Home cleaner.', category: 'Lifestyle', price: 14.99,top_item: true, stock: 988},
    {id: 6, title: 'VCorp Bedsheet & Pillow set', description: 'Official VCorp bedsheet & pillow set.', category: 'Home', price: 19.99,top_item: true, stock: 134},
    {id: 7, title: 'VCorp Corp Sofa Set', description: 'A sofa set by the made in india initiative by VCorp Corp', category: 'Home', price: 349.99,top_item: true, stock: 4},
    {id: 8, title: 'ABC Curtain', description: 'Official ABC curtain set.', category: 'Home', price: 39.99,top_item: true, stock: 24},
    {id: 9, title: 'VCorp Shirts', description: '', category: 'Fashion', price: 19.99,top_item: true, stock: 100},
    {id: 10, title: 'ABC Home Brush', description: 'Clean your Homes with brown VCorp Home brushes.', category: 'Lifestyle', price: 5.99, top_item: false, stock: 46}
  ]
  const [products, productsDispatch] = useReducer(ProductReducer, initialState)

  return (
    <ProductContext.Provider value={{products,productsDispatch}}>
      {props.children}
    </ProductContext.Provider>
  );
}
 
export default ProductContextProvider;