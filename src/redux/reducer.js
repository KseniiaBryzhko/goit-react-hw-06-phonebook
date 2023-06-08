import { combineReducers } from 'redux';

const contactsInitialState = [];

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload];
    case 'contacts/removeContact':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const filterInitialState = '';

const filtersReducer = (state = filterInitialState, { type, payload }) => {
  switch (type) {
    case 'filter/setFilter':
      return payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});
