export const SearchReducer = (state,action) => {
  switch(action.type){
    case 'MODIFY_SEARCH_TERM':
      return action.new_search_term;
    default:
      return state;
  }
}