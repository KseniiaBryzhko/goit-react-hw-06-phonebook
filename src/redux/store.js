import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducer';

// const initialState = {
//   contacts: [],
//   filter: '',
// };

// const rootReducer = (state = initialState, action) => {
//   return state;
// };

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
