import React from "react";

import "./ProductItem.css";

import heartIcon from "../../icons/product-heart-icon.svg";
import cartIcon from "../../icons/cart-icon.svg";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import { ADMINS } from "../../helpers/consts";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { deleteProduct } from "../../store/products/ProductAction";
import { useNavigate } from "react-router-dom";
import {
  addItemToCart,
  isItemInCart,
  removeItemFromCart,
} from "../../store/cart/CartAction";
import {
  addItemToFavorites,
  isItemInFavorites,
  removeItemFromFavorites,
} from "../../store/favorites/FavoriteAction";

const ProductItem = ({ product }) => {
  const imageStyle = {
    background: `url(${product.picture})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "270px",
    height: "370px",
  };
  const { user } = useSelector((state) => state.user);
  // const { products } = useSelector((state) => state.cart.cart);
  // const { favorites } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="products__container">
      <div className="products__item">
        <div style={imageStyle} className="products__img__block">
          {isItemInFavorites(product.id) ? (
            <img
              onClick={() => dispatch(removeItemFromFavorites(product.id))}
              src={heartIcon}
              alt=""
              className="products__like-icon"
            />
          ) : (
            <img
              onClick={() => dispatch(addItemToFavorites(product))}
              src={heartIcon}
              alt=""
              className="products__like-icon"
            />
          )}

          {isItemInCart(product.id) ? (
            <img
              onClick={() => dispatch(removeItemFromCart(product.id))}
              src={cartIcon}
              alt=""
              className="products__cart__icon"
            />
          ) : (
            <img
              onClick={() => dispatch(addItemToCart(product))}
              src={cartIcon}
              alt=""
              className="products__cart__icon"
            />
          )}

          {ADMINS.includes(user) && (
            <div
              className="admin-icon_buttons"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                marginRight: "-3%",
              }}
            >
              <IconButton
                className="icon-btn"
                style={{ background: "none" }}
                onClick={() => dispatch(deleteProduct(product.id))}
              >
                <DeleteOutlineTwoToneIcon
                  className="admin-icon__delete"
                  style={{ width: "26px" }}
                />
              </IconButton>
              <IconButton
                className="icon-btn"
                style={{ background: "none" }}
                onClick={() => navigate(`/edit/${product.id}`)}
              >
                <EditTwoToneIcon
                  className="admin-icon__edit"
                  style={{ width: "26px" }}
                />
              </IconButton>
            </div>
          )}
        </div>

        <div className="products__content">
          <div className="products__title">
            <h2
              onClick={() => navigate(`/product/${product.id}`)}
              className="products__header"
            >
              {product.title}
            </h2>
            <h3 className="product__descr">{product.description}</h3>
          </div>
          <h3 className="products__price">{product.price}$</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
