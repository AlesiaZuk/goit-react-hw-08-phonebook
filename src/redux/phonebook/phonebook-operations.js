import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contact/fetchContacts',
  async () => {
    const resp = await axios.get('/contacts');
    return resp.data;
  },
);

export const addContact = createAsyncThunk(
  'contact/addContact',
  async contact => {
    console.log('Contacts', contact);
    const resp = await axios.post('/contacts', contact);
    return resp.data;
  },
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async contactId => {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  },
);
