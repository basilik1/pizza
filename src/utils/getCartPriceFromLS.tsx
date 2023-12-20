export const getCartFromLocalStorage = () => {
  const dataCart = localStorage.getItem('cart_items');
  return dataCart ? JSON.parse(dataCart) : [];
};

export const getPriceFromLocalStorage = () => {
  const price = localStorage.getItem('cart_price');
  return Number(price);
};
