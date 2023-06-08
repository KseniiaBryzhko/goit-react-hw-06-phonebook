import { combineReducers } from 'redux';

import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
});
