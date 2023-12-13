import { FC, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Sorting from '../components/Sorting';
import BlockItem from '../components/BlockItem';
import Skeleton from '../components/BlockItem/Skeleton';
import Categories from '../components/Categories';
import Search from '../components/Search/';
import Pagination from '../components/Pagination/';
import { AppContext } from '../components/Context/';

const Home: FC = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategoryId, setActiveCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярности (DESC)',
    sortProperty: 'rating',
  });
  const { searchValue } = useContext(AppContext);

  useEffect(() => {
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
    window.scrollTo(0, 0);
  }, [activeCategoryId, sortType, searchValue, currentPage]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            value={activeCategoryId}
            onClickCategory={(id) => setActiveCategoryId(id)}
          />
          <Sorting value={sortType} onChangeSort={(id) => setSortType(id)} />
        </div>
        <div className="content__sort">
          <h2 className="content__title">Все пиццы</h2>
          <Search />
        </div>
        <div className="content__items">
          {isLoading
            ? [...Array(8)].map((_, index) => <Skeleton key={index} />)
            : data.map((obj) => <BlockItem props={obj} key={obj.id} />)}{' '}
          {data.length < 1 && searchValue.length >= 1 && (
            <h2 style={{ marginTop: '15px' }}>Пицц не найдено</h2>
          )}
        </div>
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
      </div>
    </>
  );
};

export default Home;
