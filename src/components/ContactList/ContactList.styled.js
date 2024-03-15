import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  margin: 10px 0;
  font-size: 1rem;
`;

export const DeleteButton = styled.button`
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  margin-left: 10px;
  color: white;
  background-color: #ff6347;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #ff4500;
  }
`;
