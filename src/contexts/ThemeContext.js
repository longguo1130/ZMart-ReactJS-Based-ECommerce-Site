import React, { createContext,useReducer } from 'react';
import { ThemeReducer } from '../reducers/ThemeReducer';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

  const initialState = {
    active_theme: {primary: '#5d4037', secondary: '#3e2723', text: '#FFFFFF'},
    light_theme: {primary: '#5d4037', secondary: '#3e2723', text: '#FFFFFF'},
    dark_theme: {primary: '#252525', secondary: '#101010', text: '#FFFFFF'},
    curr_theme_status: 'light_theme'
  }

  const [theme, dispatchTheme] = useReducer(ThemeReducer,initialState);

  return (
    <ThemeContext.Provider value={{theme,dispatchTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
}
 
export default ThemeContextProvider;