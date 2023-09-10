import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../../store/products/ProductAction";
import { clearOneProductState } from "../../store/products/ProductSlice";

import heartIcon from "../../icons/product-heart-icon.svg";
import CartIcon from "../../icons/cart-icon-light.svg";
import "./OneProduct.css";

const OneProduct = () => {
  const { oneProduct, loading } = useSelector((state) => state.products);
  console.log(oneProduct);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneProduct(id));
    return () => dispatch(clearOneProductState());
  }, []);

  return (
    <>
      {oneProduct ? (
        <div className="one-product__container">
          <div className="one-product__items">
            <div className="one-product__item_first">
              <div className="one-product__item_first__img__block">
                <img src={oneProduct.picture} alt="error" />
              </div>
            </div>
            <div className="one-product__item_second">
              <div className="one-product__item_second__content">
                <h2 className="one-product__header">{oneProduct.title}</h2>
                <h3 className="one-product__item__descr">
                  {oneProduct.description}
                </h3>
                <h3 className="one-product__item_second__price">
                  {oneProduct.price}$
                </h3>
              </div>

              <div className="one-product__item_second__icons__block">
                <div className="one-product__item_second__cart__block">
                  <img src={CartIcon} alt="" />
                  <h3>Add to cart</h3>
                </div>
                <div className="one-product__item_second__like__block">
                  <img src={heartIcon} alt="error" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h3 style={{ textAlign: "center" }}>Loading</h3>
      )}
    </>
  );
};

export default OneProduct;
