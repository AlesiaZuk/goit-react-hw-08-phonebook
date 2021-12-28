import Section from '../../components/Section/Section';
import Form from '../../components/Form/Form';
import Contacts from '../../components/Contacts/Contacts';
import Filter from '../../components/Filter/Filter';

function PhonebookView() {
  return (
    <>
      <Section title="Add contact">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </>
  );
}

export default PhonebookView;
