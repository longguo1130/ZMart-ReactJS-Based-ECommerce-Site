import React, { useContext } from 'react';
import '../css/Header.css'
import { ThemeContext } from '../contexts/ThemeContext';
import UserControls from './UserControls';
import SearchBar from './SearchBar';

const Header = () => {

  const { theme,dispatchTheme } = useContext(ThemeContext);
  const activeTheme = theme.active_theme;

  return (
    <div className="Header" style={{background: activeTheme.secondary, color: activeTheme.text,borderBottomWidth: 10, borderBottomColor: activeTheme.primary, borderBottomStyle: 'solid'}}>
      <div className="Header-title-component">
        <span className="material-icons" style={{fontSize: 40,paddingRight: 5}}>shopping_cart</span>
        
        <span className="Header-title">ZMart</span>
      </div>
      
      <h3 className="Header-caption">Your go to place for online shopping!</h3>

      <UserControls activeTheme={activeTheme} curr_theme_status={theme.curr_theme_status} dispatchTheme={dispatchTheme}/>

      <SearchBar activeTheme={activeTheme} />

    </div>
  );
}
 
export default Header;