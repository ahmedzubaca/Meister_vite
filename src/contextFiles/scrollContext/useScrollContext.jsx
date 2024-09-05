import { useContext } from 'react';
import ScrollContext from './ScrollContext';

export const useScrollContext = () => useContext(ScrollContext);