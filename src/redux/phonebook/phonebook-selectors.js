export const getContacts = state => state.contacts.contacts;

export const getFilter = state => state.contacts.filter;

export const getLoader = state => state.contacts.loading;

export const getFilteredContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};
