import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ModalPizza from '../Modal';
import { addItem, selectPizzaCount } from '../../redux/slices/cartSlice';
import { IBlockPizzaProps, TBlockPizzaItem } from '../interface/interface';
import styles from './BlockItem.module.scss';
const typeNamesBoard: string[] = ['Тонкое', 'Традиционное'];

export const BlockPizza: FC<IBlockPizzaProps> = ({ props }) => {
  const { id, imageUrl, title, price, sizes, types, weight } = props;

  const dispatch = useDispatch();
  const [activeSize, setActiveSize] = useState<number>(0);
  const [activeBoard, setActiveBoard] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const idCart = Number(`${id}${price[activeSize]}${activeBoard}`);
  const pizzaCount = useSelector(selectPizzaCount(idCart));

  const addedPizzaCount = pizzaCount ? pizzaCount.count : 0;

  const onClickAdd = () => {
    const item: TBlockPizzaItem = {
      id: idCart,
      title,
      price: price[activeSize],
      imageUrl: imageUrl[activeBoard],
      sizes: sizes[activeSize],
      typeNamesBoard: typeNamesBoard[activeBoard],
      weight: weight[activeSize],
      count: 0,
    };
    dispatch(addItem(item));
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.pizzaBlock}>
        <img
          onClick={() => setModalOpen(true)}
          className={styles.image}
          src={imageUrl[activeBoard]}
          alt="Pizza"
        />
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.selector}>
          <ul>
            {types.map((type, index) => (
              <li
                key={index}
                onClick={() => setActiveBoard(index)}
                className={
                  activeBoard === index
                    ? `${styles.active}`
                    : `${styles.item_hover}`
                }
              >
                {typeNamesBoard[type]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, index) => (
              <li
                onClick={() => setActiveSize(index)}
                className={
                  activeSize === index
                    ? `${styles.active}`
                    : `${styles.item_hover}`
                }
                key={index}
              >
                {size} см
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.bottom}>
          <div className={styles.price}>от {price[activeSize]} ₽</div>
          <button
            className="button button--outline button--add"
            onClick={onClickAdd}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addedPizzaCount > 0 && <i>{addedPizzaCount}</i>}
          </button>
        </div>
      </div>
      {modalOpen && (
        <ModalPizza
          props={props}
          typeNamesBoard={typeNamesBoard}
          activeBoard={activeBoard}
          activeSize={activeSize}
          onClick={() => setModalOpen(!modalOpen)}
        />
      )}
    </div>
  );
};
