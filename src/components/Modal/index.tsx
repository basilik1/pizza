import { FC, useState } from 'react';
import styles from './Modal.module.scss';
import { CiCircleInfo } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import PopupNatural from './PopupNatural';

// ToDo change PopupNatural, ModalPizza
const ModalPizza: FC = ({ props, onClick }) => {
  const { composition, nutritional, imageUrl, title } = props;
  const [open, setOpen] = useState(false);

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
                  <img src={imageUrl[0]} alt={title} />
                </div>
                <div className={styles.info}>
                  <div className={styles.title}>
                    <h2>{title}</h2>
                    <button
                      className={styles.infoValue}
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpen(true);
                      }}
                    >
                      <i>
                        <CiCircleInfo size="25" />
                      </i>
                    </button>
                  </div>
                  {open && <PopupNatural props={nutritional} />}
                  <div className={styles.description}>
                    <span>50см Традиционое тесто, 500гр</span>
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
