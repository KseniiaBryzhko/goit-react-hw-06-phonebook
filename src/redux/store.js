import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filtersReducer } from './reducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});
