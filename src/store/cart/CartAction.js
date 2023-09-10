import { setCart } from "./CartSlice";

function calcTotalPrice(items) {
  return items.reduce((acc, item) => acc + item.subPrice, 0);
}

function getCartFromLS() {
  const data = JSON.parse(localStorage.getItem("cart"));

  if (!data) {
    return {
      products: [],
      totalPrice: 0,
    };
  }
  return data;
}

function setCartToLS(data) {
  localStorage.setItem("cart", JSON.stringify(data));
}

export const getCart = () => (dispatch) => {
  const data = getCartFromLS();
  dispatch(setCart(data));
};

export const addItemToCart = (item) => (dispatch) => {
  const data = getCartFromLS();
  data.products.push({ ...item, count: 1, subPrice: item.price });
  data.totalPrice = calcTotalPrice(data.products);
  setCartToLS(data);
  dispatch(setCart(data));
};

export const removeItemFromCart = (id) => (dispatch) => {
  const data = getCartFromLS();
  data.products = data.products.filter((item) => item.id != id);
  data.totalPrice = calcTotalPrice(data.products);
  setCartToLS(data);
  dispatch(setCart(data));
};

export const isItemInCart = (id) => {
  const data = getCartFromLS();
  return data.products.some((item) => item.id === id);
};

export const increaseCount = (id) => (dispatch) => {
  const data = getCartFromLS();

  data.products = data.products.map((item) => {
    if (item.id === id) {
      item.count += 1;
      item.subPrice += item.price;
    }
    return item;
  });

  data.totalPrice = calcTotalPrice(data.products);

  setCartToLS(data);
  dispatch(setCart(data));
};

export const decreaseCount = (id) => (dispatch) => {
  const data = getCartFromLS();

  data.products = data.products.map((item) => {
    if (item.id === id && item.count > 0) {
      item.count -= 1;
      item.subPrice -= item.price;
    }
    return item;
  });

  data.totalPrice = calcTotalPrice(data.products);

  setCartToLS(data);
  dispatch(setCart(data));
};
