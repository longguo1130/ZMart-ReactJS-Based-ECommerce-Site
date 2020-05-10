import React from 'react';
import './App.css';
import Header from './components/Header';
import ThemeContextProvider from './contexts/ThemeContext';
import TopItems from './components/TopItems';
import ProductContextProvider from './contexts/ProductContext';
import Cart from './components/Cart';
import CartContextProvider from './contexts/CartContext';
import SearchContextProvider from './contexts/SearchContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeContextProvider>
          <ProductContextProvider>
            <CartContextProvider>
              <SearchContextProvider>

                <Header />
                <div className="row" style={{display:'flex'}}>
                  <TopItems />
                  <Cart />
                </div>

                

              </SearchContextProvider>
            </CartContextProvider>
          </ProductContextProvider>
        </ThemeContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
