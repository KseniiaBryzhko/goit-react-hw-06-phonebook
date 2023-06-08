import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import { useState, useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('Contacts');
    const parsedContacts = JSON.parse(savedContacts);
    if (savedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    if (contacts.length > 0)
      localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (name, number) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in list`);
      return;
    }

    setContacts([...contacts, contact]);
  };

  const handleFilterChange = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className={css.phonebook}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm formSubmitHandler={formSubmitHandler}></ContactForm>
      <h2 className={css.title}>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange}></Filter>
      <ContactList
        contacts={getFilteredContacts()}
        deleteContact={deleteContact}
      ></ContactList>
    </div>
  );
};
