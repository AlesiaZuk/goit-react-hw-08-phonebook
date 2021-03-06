import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/phonebook/phonebook-actions';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    const { value } = e.target;
    dispatch(filterContact(value));
  };

  return (
    <div className={s.filter}>
      <label className={s.filter_label}>
        <input
          className={s.filter_input}
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
          placeholder="Find contacts by name:"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
    </div>
  );
}

export default Filter;
