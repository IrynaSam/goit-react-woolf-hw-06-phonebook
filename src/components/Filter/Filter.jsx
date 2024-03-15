import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { Input, Filters } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <>
      <Filters>
        Find contacts by name
        <Input type="text" name="filter" onChange={handleFilter} />
      </Filters>
    </>
  );
};
