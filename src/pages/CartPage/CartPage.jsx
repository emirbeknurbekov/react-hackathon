import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../store/cart/CartAction";
import CartItem from "../../components/CartItem";

import "./CartPage.css";
import "./CartPageAdaptive.css";

const CartPage = () => {
  const { products } = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  console.log(products);

  useEffect(() => {
    dispatch(getCart());
  }, []);
  return (
    <div className="cart-page__container">
      <div
        className="table__container"
        style={{
          padding: "4% 0",
        }}
      >
        <table>
          <thead>
            <tr>
              <th style={{ padding: "30px" }}>Product Details</th>
              <th className="cart-page__price" style={{ padding: "30px" }}>
                Price
              </th>
              <th style={{ padding: "30px" }}>Quantity</th>
              <th style={{ padding: "30px" }}>SubTotal</th>
              <th style={{ padding: "30px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="cart__total__block">
        <h3 className="cart-page__total">Total: {cart.totalPrice}$</h3>
        <button className="cart-page__buy-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default CartPage;
