import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/products/ProductAction";
import ProductItem from "./ProductItem";
import { useSearchParams } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import { setPage } from "../../store/products/ProductSlice";
import { LIMIT } from "../../helpers/consts";

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, loading, page, pageTotalCount } = useSelector(
    (state) => state.products
  );
  const [gender, setGender] = useState(searchParams.get("gender") || "all");
  const [category, setCategory] = useState(
    searchParams.get("category") || "all"
  );
  const dispatch = useDispatch();

  console.log(products, "data");
  useEffect(() => {
    dispatch(getProducts());
  }, [searchParams]);
  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);

    if (gender === "all") {
      delete currentParams.gender;

      setSearchParams({
        ...currentParams,
      });
    } else {
      setSearchParams({
        ...currentParams,
        gender,
      });
    }
  }, [gender]);
  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);

    if (category === "all") {
      delete currentParams.category;
      setSearchParams({
        ...currentParams,
      });
    } else {
      setSearchParams({
        ...currentParams,
        category,
      });
    }
  }, [category]);

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);

    setSearchParams({
      ...currentParams,
      _page: page,
      _limit: LIMIT,
    });
  }, [page]);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <div className="container" style={{ display: "flex" }}>
            <h2
              className="shop-header"
              style={{
                maxWidth: "80%",
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
            <div style={{ maxWidth: "100px", width: "100%" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="Gender"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value={"all"}>All</MenuItem>
                  <MenuItem value={"men"}>Men</MenuItem>
                  <MenuItem value={"women"}>Women</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div style={{ maxWidth: "100px", width: "100%" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <MenuItem value={"all"}>All</MenuItem>
                  <MenuItem value={"shirts"}>Shirts</MenuItem>
                  <MenuItem value={"hoodies"}>Hoodies</MenuItem>
                  <MenuItem value={"jeans"}>Jeans</MenuItem>
                  <MenuItem value={"activewear"}>Activewear</MenuItem>
                  <MenuItem value={"boxers"}>Boxers</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
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

          <Pagination
            count={pageTotalCount}
            page={page}
            onChange={(_, value) => dispatch(setPage(value))}
          />
        </>
      )}
    </div>
  );
};

export default ProductList;
