import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../store/cart/CartAction";
import CartItem from "../../components/CartItem";

const CartPage = () => {
  const { products } = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  console.log(products);

  useEffect(() => {
    dispatch(getCart());
  }, []);
  return (
    <div
      className="table__container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4% 0",
        maxWidth: "80%",
        margin: "0 auto",
      }}
    >
      <table>
        <thead>
          <tr>
            <th style={{ padding: "30px" }}>Product Details</th>
            <th style={{ padding: "30px" }}>Price</th>
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
      <div className="cart__total__block">
        <h3>{}</h3>
      </div>
    </div>
  );
};

export default CartPage;
