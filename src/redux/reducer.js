import { addContact, removeContact, setFilter } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const contactsInitialState = [];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [removeContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

const filterInitialState = '';

export const filtersReducer = createReducer(filterInitialState, {
  [setFilter.type]: (state, action) => {
    return action.payload;
  },
});
