export const ThemeReducer = (state,action) => {
  switch(action.type){
    case 'TOGGLE_THEME':
      if (state.curr_theme_status == 'light_theme'){
        return {...state,active_theme:state.dark_theme,curr_theme_status: 'dark_theme'};
      }
      else{
        return {...state,active_theme:state.light_theme,curr_theme_status: 'light_theme'};
      }
    
      default:
        return state;
  }
}
