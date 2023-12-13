import { FC, useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import qs from 'qs';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
} from '../redux/slices/filterSlice';

const Home: FC = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const searchValue = useSelector((state) => state.searchSlice.searchValue);
  const activeCategoryId = useSelector(
    (state) => state.filterSlice.activeCategoryId
  );
  const sortType = useSelector((state) => state.filterSlice.sortType);
  const currentPage = useSelector((state) => state.filterSlice.currentPage);

  const onChangeActiveCategoryId = (id) => {
    dispatch(setActiveCategoryId(id));
  };
  const onChangePage = (num) => {
    dispatch(setCurrentPage(num));
  };

  const fetchPizzas = () => {
    setIsLoading(true);

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const category = activeCategoryId > 0 ? `category=${activeCategoryId}` : '';
    const search = searchValue ? `&sortBy=title&search=${searchValue}` : '';

    axios
      .get(
        `https://656227ecdcd355c083249d4f.mockapi.io/api/v1/pizza_collections?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((res) => res.data)
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
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
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchPizzas();
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
        <div className="content__items">
          {isLoading
            ? [...Array(8)].map((_, index) => <Skeleton key={index} />)
            : data.map((obj) => <BlockPizza props={obj} key={obj.id} />)}{' '}
          {data.length < 1 && searchValue.length >= 1 && (
            <h2 style={{ marginTop: '15px' }}>Пицц не найдено</h2>
          )}
        </div>
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </>
  );
};

export default Home;
