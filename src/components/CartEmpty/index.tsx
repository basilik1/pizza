import { FC } from 'react';
import { LuShoppingCart } from 'react-icons/lu';
import styles from './CartEmpty.module.scss';
import { Link } from 'react-router-dom';

const CartEmpty: FC = () => {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.cartEmpty}>
          <h2>Корзина пуста</h2>
          <p>Для заказа, перейдите на главную страницу.</p>
          <LuShoppingCart size={150} />
        </div>
        <div className={styles.button}>
          <Link to="/" className={styles.buttonBack}>
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
        </div>
      </div>
    </>
  );
};

export default CartEmpty;
