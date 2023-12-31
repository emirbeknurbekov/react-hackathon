import React from "react";
import { useDispatch } from "react-redux";

import deleteIcon from "../icons/delete-icon-favorites.svg";
import cartIcon from "../icons/cart-icon-light.svg";
import { removeItemFromFavorites } from "../store/favorites/FavoriteAction";

const FavoritesItem = ({ favorite }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td
        style={{
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
          borderBottom: "1px solid #EDEEF2",
          //   boxShadow: " 0 0 5px rgba(0, 0, 0, 0.5)",
        }}
      >
        <img
          onClick={() => dispatch(removeItemFromFavorites(favorite.id))}
          src={deleteIcon}
          alt="error"
        />
      </td>
      <td style={{ padding: "20px", borderBottom: "1px solid #EDEEF2" }}>
        <div className="favorites-item__details">
          <img
            src={favorite.picture}
            style={{ width: "100px", borderRadius: "8px" }}
            alt="error"
          />
          <div className="favorites-item__details__content">
            <h2
              style={{
                fontSize: "1.2rem",
                color: "#3c4242",
                textAlign: "start",
              }}
            >
              {favorite.title}
            </h2>
          </div>
        </div>
      </td>
      <td style={{ padding: "20px", borderBottom: "1px solid #EDEEF2" }}>
        <h2
          style={{ fontSize: "1.2rem", color: "#3c4242", textAlign: "start" }}
        >
          {favorite.price}$
        </h2>
      </td>
      <td style={{ padding: "20px", borderBottom: "1px solid #EDEEF2" }}>
        <button
          className="cart__favorites-icon"
          style={{
            background: "#8A33FD",
            display: "flex",
            justufyContent: "center",
            alignItems: "cente",
            cursor: "pointer",
            padding: "18%",
            gap: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        >
          <img style={{ width: "30px" }} src={cartIcon} alt="error" />
        </button>
      </td>
    </tr>
  );
};

export default FavoritesItem;
