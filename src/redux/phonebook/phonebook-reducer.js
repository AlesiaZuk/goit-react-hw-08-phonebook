import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { filterContact } from './phonebook-actions';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './phonebook-operations';

const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { error }) => console.log(error),
  [fetchContacts.pending]: null,

  [addContact.rejected]: (_, { error }) => console.log(error),
  [addContact.pending]: null,

  [deleteContact.rejected]: (_, { error }) => console.log(error),
  [deleteContact.pending]: null,
});

export default combineReducers({
  contacts,
  filter,
  loading,
  error,
});
