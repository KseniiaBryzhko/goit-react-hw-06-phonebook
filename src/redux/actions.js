import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contacts/addContact',
  ({ name, number }) => {
    return {
      payload: {
        id: nanoid(),
        name,
        number,
      },
    };
  }
);

export const removeContact = createAction('contact/removeContact', id => {
  return {
    type: 'contact/removeContact',
    payload: id,
  };
});

export const setFilter = createAction('filter/setFilter', payload => {
  return {
    type: 'filter/setFilter',
    payload,
  };
});
