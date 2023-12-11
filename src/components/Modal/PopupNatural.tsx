import { FC } from 'react';
import styles from './Modal.module.scss';
import { GoTriangleUp } from 'react-icons/go';

const PopupNatural: FC = ({ props }) => {
  return (
    <>
      <div className={styles.popupBlock}>
        <div className={styles.popup}>
          <i className={styles.triangle}>
            <GoTriangleUp />
          </i>
          <h3>Пищевая ценность на 100 г</h3>

          {props.map((obj, i) => (
            <div className={styles.list} key={i}>
              <div>{Object.keys(obj)} </div>
              <div>
                {Object.values(obj)}{' '}
                {Object.keys(obj).includes('Энерг. ценность') ? 'ккал' : 'г'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopupNatural;
