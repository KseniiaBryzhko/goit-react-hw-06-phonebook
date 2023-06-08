export const getContacts = store => store.contacts;

export const getFilter = store => store.filter;

export const getFilteredContacts = store => {
  const { filter, contacts } = store;
  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().trim().includes(normalizedFilter) ||
      number.trim().includes(normalizedFilter)
  );

  return filteredContacts;
};
