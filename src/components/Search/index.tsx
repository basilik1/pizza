import { FC, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSearchValue,
  setInterimValue,
  selectSearchValue,
} from '../../redux/slices/searchSlice';

import debounce from 'lodash.debounce';

import { IoMdClose } from 'react-icons/io';
import styles from './Search.module.scss';

export const Search: FC = () => {
  const { interimValue } = useSelector(selectSearchValue);
  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    dispatch(setInterimValue(''));

    inputRef.current?.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 400),
    []
  );
  const onChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInterimValue(event.target.value));
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
          value={interimValue}
        />
        {interimValue !== '' && (
          <IoMdClose onClick={onClickClear} className={styles.clearIcon} />
        )}
      </div>
    </>
  );
};
