import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FaPizzaSlice as LogoPizza } from 'react-icons/fa';
import basket from '../../assets/cart_basket.svg';

const Header: FC = () => {
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
            <span>0 ₽</span>
            <div className="button__delimiter"></div>
            <img src={basket} alt="icon basket" />

            <span></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
