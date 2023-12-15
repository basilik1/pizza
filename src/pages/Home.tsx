import { FC, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import { PiSmileyXEyes } from 'react-icons/pi';

import Sorting, { listTypeSort } from '../components/Sorting';
import BlockPizza from '../components/BlockPizza';
import Skeleton from '../components/BlockPizza/Skeleton';
import Categories from '../components/Categories';
import Search from '../components/Search/';
import Pagination from '../components/Pagination/';

import {
  setActiveCategoryId,
  setCurrentPage,
  setFilters,
  selectFilter,
} from '../redux/slices/filterSlice';
import { fetchPizzas, selectPizzaData } from '../redux/slices/pizzaSlice';
import { selectSearchValue } from '../redux/slices/searchSlice';

const Home: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { status, data } = useSelector(selectPizzaData);
  const { searchValue } = useSelector(selectSearchValue);
  const { activeCategoryId, sortType, currentPage } = useSelector(selectFilter);

  const onChangeActiveCategoryId = (id) => {
    dispatch(setActiveCategoryId(id));
  };
  const onChangePage = (num) => {
    dispatch(setCurrentPage(num));
  };

  const getPizzas = async () => {
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const category = activeCategoryId > 0 ? `category=${activeCategoryId}` : '';
    const search = searchValue ? `&sortBy=title&search=${searchValue}` : '';

    dispatch(
      fetchPizzas({
        order,
        sortBy,
        category,
        search,
        currentPage,
      })
    );
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortType,
        activeCategoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [activeCategoryId, sortType, currentPage]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = listTypeSort.find((obj) => {
        obj.sortProperty === params.sortProperty;
      });
      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false;
  }, [activeCategoryId, sortType, searchValue, currentPage]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            value={activeCategoryId}
            onClickCategory={onChangeActiveCategoryId}
          />
          <Sorting />
        </div>
        <div className="content__sort">
          <h2 className="content__title">Все пиццы</h2>
          <Search />
        </div>
        {status === 'error' ? (
          <div
            style={{
              textAlign: 'center',
              margin: '100px 0',
            }}
          >
            <h2>
              Произошла ошибка <PiSmileyXEyes />
            </h2>
            <p
              style={{
                fontSize: '20px',
                marginTop: '20px',
              }}
            >
              Не удалось получить даннные
            </p>
          </div>
        ) : (
          <div className="content__items">
            {status === 'loading'
              ? [...Array(8)].map((_, index) => <Skeleton key={index} />)
              : data.map((obj) => <BlockPizza props={obj} key={obj.id} />)}

            {data.length < 1 && searchValue.length >= 1 && (
              <h2 style={{ marginTop: '15px' }}>Пицц не найдено</h2>
            )}
          </div>
        )}
        {status === 'error' || (data.length < 1 && searchValue.length >= 1) ? (
          <></>
        ) : (
          <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        )}
      </div>
    </>
  );
};

export default Home;
