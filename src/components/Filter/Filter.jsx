import { Input, Filters } from './Filter.styled';
export const Filter = ({ value, onChange }) => {
  return (
    <>
      <Filters>
        Find contacts by name
        <Input type="text" name="filter" value={value} onChange={onChange} />
      </Filters>
    </>
  );
};
