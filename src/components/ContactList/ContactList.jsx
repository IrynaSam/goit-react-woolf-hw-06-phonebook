import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

import { ListItem } from './ListItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  console.log(contacts);
  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ListItem key={id} name={name} number={number} id={id} />
      ))}
    </List>
  );
};
