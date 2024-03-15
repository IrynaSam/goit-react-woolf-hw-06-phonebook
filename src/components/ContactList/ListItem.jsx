import { Item, DeleteButton } from './ContactList.styled';
export const ListItem = ({ name, number, id, onDelete }) => {
  return (
    <Item key={id}>
      {name}: {number}
      <DeleteButton type="button" onClick={onDelete}>
        delete
      </DeleteButton>
    </Item>
  );
};
