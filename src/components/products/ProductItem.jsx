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
const ProductItem = ({ product }) => {
  const imageStyle = {
    background: `url(${product.picture})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "270px",
    height: "370px",
  };
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="products__container">
      <div className="products__item">
        <div style={imageStyle} className="products__img__block">
          <img src={heartIcon} alt="" className="products__like-icon" />
          <img src={cartIcon} alt="" className="products__cart__icon" />

          {ADMINS.includes(user) && (
            <>
              <IconButton onClick={() => dispatch(deleteProduct(product.id))}>
                <DeleteOutlineTwoToneIcon />
              </IconButton>
              <IconButton onClick={() => navigate(`/edit/${product.id}`)}>
                <EditTwoToneIcon />
              </IconButton>
            </>
          )}
        </div>
        <div className="products__content">
          <div className="products__title">
            <h2 className="products__header">{product.title}</h2>
            <h3 className="product__descr">{product.description}</h3>
          </div>
          <h3 className="products__price">{product.price}$</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
