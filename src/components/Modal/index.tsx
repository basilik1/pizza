import { FC, useState } from 'react';
import styles from './Modal.module.scss';
import { CiCircleInfo } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import PopupNatural from './PopupNatural';
import { IModalPizzaProps } from '../interface/interface';

const ModalPizza: FC<IModalPizzaProps> = ({
  props,
  activeBoard,
  activeSize,
  typeNamesBoard,
  onClick,
}) => {
  const { composition, nutritional, imageUrl, title, weight, sizes } = props;
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.modalBackground} onClick={onClick}></div>
        <div className={styles.modalPadding}>
          <div className={styles.modalInner}>
            <i className={styles.iconClose} onClick={onClick}>
              <IoMdClose size="40" fill="#fff" />
            </i>
            <div className={styles.modal}>
              <div className={styles.block} onClick={() => setOpen(false)}>
                <div className={styles.image}>
                  <img src={imageUrl[activeBoard]} alt={title} />
                </div>
                <div className={styles.info}>
                  <div className={styles.title}>
                    <h2>{title}</h2>
                    <button
                      className={styles.infoValue}
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpen(!open);
                      }}
                    >
                      <i>
                        <CiCircleInfo size="25" />
                      </i>
                    </button>
                  </div>
                  {open && <PopupNatural nutritional={nutritional} />}
                  <div className={styles.description}>
                    <span>
                      {sizes[activeSize]}см, {typeNamesBoard[activeBoard]}{' '}
                      тесто,&nbsp;
                      {weight[activeSize]}&nbsp;г
                    </span>
                  </div>
                  <div className={styles.composition}>
                    <span>{composition}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPizza;
