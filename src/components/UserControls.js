import React, { useContext } from 'react';
import '../css/UserControls.css'

const UserControls = ({activeTheme,curr_theme_status,dispatchTheme}) => {



  return (
    <div className="Header-UserControls" style={{background: activeTheme.primary,color:activeTheme.text}}>

      <div className="chip">
        <img src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?ixlib=rb-1.2.1&w=1000&q=80" alt="Contact Person" />
        Welcome
      </div>
      <br />

      <div className="waves-effect waves-light btn-small" onClick={() => dispatchTheme({type: 'TOGGLE_THEME'})}>
      <i className="material-icons" style={{fontSize: 13,paddingRight: 2,paddingTop:2}}>
      
      { curr_theme_status == 'light_theme' ? 'brightness_3' : 'brightness_1'}
      </i>
        Toggle Theme
      </div>
    </div>
  );
}
 
export default UserControls;