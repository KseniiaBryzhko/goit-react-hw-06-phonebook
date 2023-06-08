import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
// import { nanoid } from 'nanoid';
import css from './App.module.css';
// import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, removeContact } from 'redux/actions';
import { getContacts, getFilter, getFilteredContacts } from 'redux/selectors';
import { setFilter } from 'redux/actions';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = useSelector(getFilteredContacts);

  const formSubmitHandler = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in list`);
      return;
    }

    const action = addContact({ name, number });
    dispatch(action);
  };

  const handleFilterChange = event => {
    const action = setFilter(event.target.value.toLowerCase().trim());
    dispatch(action);
  };

  const deleteContact = id => {
    const action = removeContact(id);
    dispatch(action);
  };

  return (
    <div className={css.phonebook}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm formSubmitHandler={formSubmitHandler}></ContactForm>
      <h2 className={css.title}>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange}></Filter>
      <ContactList
        contacts={filteredContacts}
        deleteContact={deleteContact}
      ></ContactList>
    </div>
  );
};