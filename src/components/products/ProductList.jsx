import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/products/ProductAction";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const { products, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h2
            className="shop-header"
            style={{
              maxWidth: "80%",
              margin: "0 auto",
              borderLeft: "10px solid #8a33fd",
              paddingLeft: "2%",
              marginTop: "2%",
              marginBottom: "2%",
              color: "#3c4242",
              fontSize: " 2.1rem",
              fontWeight: "500",
              lineHeight: "33.5px",
              letterSpacing: "0.68px",
            }}
          >
            {" "}
            Shop
          </h2>
          <div
            style={{
              maxWidth: "90%",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1%",
              flexWrap: "wrap",
              marginTop: "2%",
            }}
            className="Shop-list"
          >
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
