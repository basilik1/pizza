import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { RiShoppingBasket2Line } from 'react-icons/ri';
import styles from './CartBlock.module.scss';

import { clearItems, selectCart } from '../../redux/slices/cartSlice';
import { calcTotalCountPizza } from '../../utils/calcTotalCountPizza';

import CartItem from './CartItem';
import CartEmpty from '../CartEmpty';

const CartBlock: FC = () => {
  const { items, totalPrice } = useSelector(selectCart);

  const countAllPizza = calcTotalCountPizza(items);

  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      {items.length === 0 ? (
        <CartEmpty />
      ) : (
        <div className={styles.cart}>
          <div className={styles.top}>
            <h2 className={styles.title}>Корзина</h2>
            <div
              className={styles.clear}
              onClick={() => {
                if (items.length > 0 && window.confirm('Очистить корзину?')) {
                  dispatch(clearItems());
                }
              }}
            >
              <RiShoppingBasket2Line size={25} />
              <span>Очистить корзину</span>
            </div>
          </div>

          <div className={styles.items}>
            {items.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
          <div className={styles.bottom}>
            <div className={styles.details}>
              <span>
                Всего&nbsp;пицц <b>{countAllPizza}&nbsp;шт.</b>
              </span>
              <span>
                Сумма&nbsp;заказа: <b>{totalPrice}&nbsp;₽</b>
              </span>
            </div>

            <div className={styles.cartBottom}>
              <Link
                to="/"
                className={`${styles.buttonNav} ${styles.buttonBack}`}
              >
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 6.93015L6.86175 1"
                    stroke="#D3D3D3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>Вернуться назад</span>
              </Link>
              <Link
                to="*"
                className={`${styles.buttonNav} ${styles.buttonPay}`}
              >
                <span>Оплатить сейчас</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartBlock;
