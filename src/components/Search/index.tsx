import { FC, useCallback, useRef, useState } from 'react';
import { /* useSelector, */ useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/searchSlice';

import debounce from 'lodash.debounce';

import { IoMdClose } from 'react-icons/io';
import styles from './Search.module.scss';

const Search: FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  // const searchValue = useSelector((state) => state.searchSlice.searchValue);

  const inputRef = useRef(null);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 400),
    []
  );
  const onChangeSearchValue = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <>
      <div className={styles.root}>
        <input
          ref={inputRef}
          type="text"
          onChange={onChangeSearchValue}
          className={styles.input}
          placeholder="Поиск по ингредиентам..."
          value={value}
        />
        {value !== '' && (
          <IoMdClose onClick={onClickClear} className={styles.clearIcon} />
        )}
      </div>
    </>
  );
};

export default Search;
