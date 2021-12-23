import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://61ba224148df2f0017e5a92f.mockapi.io';

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
