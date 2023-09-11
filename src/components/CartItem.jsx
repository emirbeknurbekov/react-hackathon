import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseCount,
  increaseCount,
  removeItemFromCart,
} from "../store/cart/CartAction";

import deleteIconCart from "../icons/delete-icon-cart.png";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <tr
      style={{
        border: "1px solid black",
        borderRadius: "12px",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <td
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2
          style={{
            fontSize: "1.2rem",
            color: "#3c4242",
            textAlign: "center",
            marginBottom: "5%",
          }}
        >
          {product.title}
        </h2>
        <img
          style={{ width: "80px", borderRadius: "8px" }}
          src={product.picture}
          alt="error"
        />
      </td>
      <td style={{ padding: "20px" }}>
        <h2 style={{ fontSize: "1.2rem", color: "#3c4242", marginBottom: "0" }}>
          {product.price}$
        </h2>
      </td>
      <td style={{ padding: "20px" }}>
        <ul
          style={{
            width: "70px",
            paddingLeft: "2%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "9px",
            textAlign: "center",
            background: "#F6F6F6",
            borderRadius: "8px",
            padding: "0 auto",
            marginBottom: "0",
          }}
        >
          <li
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(decreaseCount(product.id))}
          >
            -
          </li>
          <li>{product.count}</li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(increaseCount(product.id))}
          >
            +
          </li>
        </ul>
      </td>
      <td style={{ padding: "20px", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "1.2rem",
            color: "#3c4242",
            textAlign: "center",
            marginBottom: "0",
          }}
        >
          {product.subPrice}$
        </h2>
      </td>
      <td style={{ padding: "20px", textAlign: "center" }}>
        <img
          onClick={() => dispatch(removeItemFromCart(product.id))}
          style={{ width: "18px", cursor: "pointer" }}
          src={deleteIconCart}
          alt="error"
        />
      </td>
    </tr>
  );
};

export default CartItem;
