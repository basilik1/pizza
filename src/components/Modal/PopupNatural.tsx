import { FC } from 'react';
import styles from './Modal.module.scss';
import { GoTriangleUp } from 'react-icons/go';
import { TNutritional } from '../interface/interface';

const PopupNatural: FC<TNutritional> = ({ nutritional }) => {
  return (
    <>
      <div className={styles.popupBlock}>
        <div className={styles.popup}>
          <i className={styles.triangle}>
            <GoTriangleUp />
          </i>
          <h3>Пищевая ценность на 100&nbsp;г</h3>
          {nutritional.map((obj, i) => (
            <div className={styles.list} key={i}>
              <div>{obj.property}</div>
              <div>
                {obj.value}&nbsp;
                {obj.property === 'Энерг. ценность' ? 'ккал' : 'г'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopupNatural;
