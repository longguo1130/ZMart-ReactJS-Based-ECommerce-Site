import React, { Component, useContext } from 'react';
import '../css/SearchBar.css'
import { SearchContext } from '../contexts/SearchContext';
import SearchResults from './SearchResults';

const SearchBar = ({activeTheme}) => {

  const { searchTerm,dispatchSearchTerm } = useContext(SearchContext);

  const handleChange = (e) => {
    //console.log(e.target.value)
    dispatchSearchTerm({type: 'MODIFY_SEARCH_TERM',new_search_term: e.target.value})
  }

  return (
    <div className="SearchBar">
          <input value={searchTerm} placeholder="Search ..." className="SearchBar-textfield" type="text" style={{all:'unset',background: activeTheme.primary,color:activeTheme.text,padding: 5,borderRadius: 100}} onChange={handleChange}/>
          <SearchResults />
    </div>
  );
}
 
export default SearchBar;