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
    <>
      {load && <Loader />}
      <table className={s.table}>
        <thead>
          <tr className={s.table_row_title}>
            <th className={s.table_data_title}>Name</th>
            <th colSpan="2" className={s.table_data_title}>
              Phone
            </th>
          </tr>
        </thead>
        <tbody>
          {filterContacts.map(({ id, name, phone }) => (
            <tr key={id} className={s.table_row}>
              <td className={s.table_data}>{name}</td>
              <td className={s.table_data}>{phone}</td>
              <td className={s.table_data}>
                <button
                  className={s.contacts_button}
                  id={id}
                  type="button"
                  onClick={handleDeleteContact}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Contacts;
