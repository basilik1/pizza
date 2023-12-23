import { FC, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Header.module.scss';
import { FaPizzaSlice as LogoPizza } from 'react-icons/fa';
import basket from '../../assets/cart_basket.svg';

import { calcTotalCountPizza } from '../../utils/calcTotalCountPizza';
import { selectCart } from '../../redux/slices/cartSlice';

const Header: FC = () => {
  const { items, totalPrice } = useSelector(selectCart);

  const countAllPizza = calcTotalCountPizza(items);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current === true) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart_items', json);
      localStorage.setItem('cart_price', String(totalPrice));
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.logo}>
            <LogoPizza size={30} />
            <div>
              <h1>New Pizza</h1>
              <p>Пицца № 1 в городе</p>
            </div>
          </div>
        </Link>
        <div className={styles.header_cart}>
          <Link to="/cart" className={`${styles.button} ${styles.button_cart}`}>
            <span>{totalPrice} ₽</span>
            <div className={styles.button_delimiter}></div>
            <img src={basket} alt="icon basket" />
            <span>{countAllPizza}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
