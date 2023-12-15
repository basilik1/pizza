import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaPizzaSlice as LogoPizza } from 'react-icons/fa';
import basket from '../../assets/cart_basket.svg';
import { selectCart } from '../../redux/slices/cartSlice';

const Header: FC = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const countAllPizza = items.reduce((acc, obj) => {
    return acc + obj.count;
  }, 0);
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <LogoPizza size={30} />
            <div>
              <h1>New Pizza</h1>
              <p>Пицца № 1 в городе</p>
            </div>
          </div>
        </Link>
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>{totalPrice} ₽</span>
            <div className="button__delimiter"></div>
            <img src={basket} alt="icon basket" />

            <span>{countAllPizza}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
