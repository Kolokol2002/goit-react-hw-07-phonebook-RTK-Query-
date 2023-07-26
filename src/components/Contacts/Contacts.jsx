import { getValueFilter } from 'redux/selectors.';
import {
  ContactsUserList,
  ContactsUser,
  ContactsUserName,
  ContactsButtonDelite,
} from './Contacts.styled';
import { useSelector } from 'react-redux';
import { useDeleteContactMutation } from 'redux/contactsSlice';

const Contacts = ({ contacts }) => {
  const [deleteContact] = useDeleteContactMutation();

  const filter = useSelector(getValueFilter);

  const filterChange = () => {
    return contacts.filter(
      item =>
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.number.includes(filter)
    );
  };

  const onDelete = ({ target }) => {
    const { userId } = target.dataset;
    deleteContact(userId);
  };

  const filteredContacts = filter !== '' ? filterChange() : contacts;

  return (
    <ContactsUserList>
      {filteredContacts?.map(({ name, number, id }) => (
        <ContactsUser key={id}>
          <ContactsUserName>
            {name}: {number}
          </ContactsUserName>

          <ContactsButtonDelite
            data-user-id={id}
            onClick={onDelete}
            type="button"
          >
            Delite
          </ContactsButtonDelite>
        </ContactsUser>
      ))}
    </ContactsUserList>
  );
};

export default Contacts;
