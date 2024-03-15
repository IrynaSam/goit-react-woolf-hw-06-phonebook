import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
export const Wrapper = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 4px;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
