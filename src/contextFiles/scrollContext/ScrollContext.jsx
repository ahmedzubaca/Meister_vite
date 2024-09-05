import { createContext, useReducer} from 'react';
import PropTypes from 'prop-types';

const ScrollContext = createContext();

const SET_SCROLL_POSITION = 'SET_SCROLL_POSITION';

const initialState = {
  scrollPosition: 0,
};

const scrollReducer = (state, action) => {
  switch (action.type) {
    case SET_SCROLL_POSITION:
      return { ...state, scrollPosition: action.payload };
    default:
      return state;
  }
};

export const ScrollProvider = ({ children }) => {
  const [state, dispatch] = useReducer(scrollReducer, initialState);

  const setScrollPosition = (scrollPosition) => {
    dispatch({ type: SET_SCROLL_POSITION, payload: scrollPosition });
  };

  return (
    <ScrollContext.Provider value={{ scrollPosition: state.scrollPosition, setScrollPosition }}>
      {children}
    </ScrollContext.Provider>
  );
};
export default ScrollContext;

ScrollProvider.propTypes = {
  children: PropTypes.any.isRequired  
};