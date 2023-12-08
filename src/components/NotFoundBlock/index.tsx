import { FC } from 'react';
import styles from './NotFoundBlock.module.scss';
const NotFoundBlock: FC = () => {
  return (
    <div className={styles.root}>
      <h1>Ничего не найдено</h1>
      <p>Страница отсутсвует</p>
    </div>
  );
};

export default NotFoundBlock;
