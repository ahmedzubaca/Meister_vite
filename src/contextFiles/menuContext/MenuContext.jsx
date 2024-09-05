import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const MenuContext = createContext();

const initialState = {
  isMenuOpened: window.innerWidth <= 900 ? false : true,
};

const menuReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        isMenuOpened: !state.isMenuOpened,
      };
    case 'TRUE':
      return {
        ...state,
        isMenuOpened: true,
      }
      case 'FALSE':
      return {
        ...state,
        isMenuOpened: false,
      }    
    default:
      return state;
  }
};

export const MenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(menuReducer, initialState);

  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuContext.Provider>
  );
};
export default MenuContext;

MenuProvider.propTypes = {
  children: PropTypes.any.isRequired  
};