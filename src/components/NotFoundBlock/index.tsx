import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.info}>
        <h1>Ничего не найдено</h1>
        <p>Страница отсутсвует</p>
      </div>
      <div className={styles.button}>
        <Link to="/cart" className={styles.buttonBack}>
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
  );
};

export default NotFoundBlock;
