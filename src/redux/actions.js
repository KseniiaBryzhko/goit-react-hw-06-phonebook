import { nanoid } from 'nanoid';

export const addContact = ({ name, number }) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const removeContact = id => {
  return {
    type: 'contact/removeContact',
    payload: id,
  };
};

export const setFilter = payload => {
  return {
    type: 'filter/setFilter',
    payload,
  };
};
