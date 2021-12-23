import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from '../../redux/phonebook/phonebook-operations';
import {
  getFilteredContacts,
  getLoader,
} from '../../redux/phonebook/phonebook-selectors';
import Loader from '../Loader/Loader';
import s from './Contacts.module.css';

function Contacts() {
  const dispatch = useDispatch();
  const filterContacts = useSelector(getFilteredContacts);
  const load = useSelector(getLoader);

  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteContact = e => {
    const { id } = e.target;
    console.log(id);
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {load && <Loader />}
      {filterContacts.map(({ id, name, phone }) => (
        <li className={s.contacts_item} key={id}>
          <p className={s.contacts_text}>
            {name}: {phone}
          </p>
          <button
            className={s.contacts_button}
            id={id}
            type="button"
            onClick={handleDeleteContact}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Contacts;
