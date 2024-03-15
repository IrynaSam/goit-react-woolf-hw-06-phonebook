import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';

import { Item, DeleteButton } from './ContactList.styled';
export const ListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <Item key={id}>
      {name}: {number}
      <DeleteButton type="button" onClick={handleDelete}>
        delete
      </DeleteButton>
    </Item>
  );
};
