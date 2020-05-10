import React, { useReducer, createContext } from 'react';
import { SearchReducer } from '../reducers/SearchReducer';


export const SearchContext = createContext();

const SearchContextProvider = (props) => {

  const initialState = '';

  const [searchTerm,dispatchSearchTerm] = useReducer(SearchReducer,initialState);

  return (
    <SearchContext.Provider value={{searchTerm,dispatchSearchTerm}}>
      {props.children}
    </SearchContext.Provider>
  );
}
 
export default SearchContextProvider;