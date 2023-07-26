import Form from '../Form';
import Contacts from '../Contacts';
import Title from '../Title';
import Filter from '../Filter';
import { MainContainer } from './App.styled';
import { useGetContactsQuery } from 'redux/contactsSlice';

function App() {
  const { data: contacts, isFetching, isError } = useGetContactsQuery();

  return (
    <MainContainer>
      <Title title={'Phonebook'}>
        <Form contacts={contacts} />
      </Title>

      {contacts?.length !== 0 && (
        <Title title={'Contacts'}>
          <Filter />
          {isFetching && !isError && <b>Request in progress...</b>}
          <Contacts contacts={contacts} />
        </Title>
      )}
    </MainContainer>
  );
}

export default App;
