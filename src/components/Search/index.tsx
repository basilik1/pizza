import { FC, useContext } from 'react';
import styles from './Search.module.scss';
import { IoMdClose } from 'react-icons/io';
import { AppContext } from '../Context';

const Search: FC = () => {
  const { searchValue, setSearchValue } = useContext(AppContext);

  return (
    <>
      <div className={styles.root}>
        <input
          type="text"
          onChange={(event) => {
            event.preventDefault();
            setSearchValue(event.target.value);
          }}
          className={styles.input}
          placeholder="Поиск по ингредиентам..."
          value={searchValue}
        />
        {searchValue !== '' && (
          <IoMdClose
            onClick={() => setSearchValue('')}
            className={styles.clearIcon}
          />
        )}
      </div>
    </>
  );
};

export default Search;
