import { ContainerFilter, TitleFilter, InputFilter } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setValueFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(setValueFilter(value));
  };

  return (
    <ContainerFilter>
      <TitleFilter>Find number</TitleFilter>
      <InputFilter type="text" name="filter" onChange={handleFilter} />
    </ContainerFilter>
  );
};

export default Filter;
