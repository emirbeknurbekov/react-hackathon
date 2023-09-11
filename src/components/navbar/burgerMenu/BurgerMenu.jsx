import React, { useState, useEffect } from "react";
import "./BurgerMenu.css";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import { useSearchParams } from "react-router-dom";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#F6F6F6",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const BurgerMenu = ({ isOpen, toggleBurgerMenu }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchVal, setSearchVal] = useState(
    searchParams.get("title_like") || ""
  );
  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setSearchParams({
      ...currentParams,
      title_like: searchVal,
    });
  }, [searchVal]);
  const navigate = useNavigate();
  return (
    <div className={`burger-menu ${isOpen ? "open" : ""}`}>
      <div className="navbar-search__block">
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            onChange={(e) => setSearchVal(e.target.value)}
            value={searchVal}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </div>
      <ul className="burger-menu-items">
        <li onClick={() => navigate("/products")} className="burger-menu-item">
          Shop
        </li>
        <li
          onClick={() => navigate("/products?gender=men")}
          className="burger-menu-item"
        >
          Men
        </li>
        <li
          onClick={() => navigate("/products?gender=women")}
          className="burger-menu-item"
        >
          Women
        </li>
        <li
          onClick={() => navigate("/products?category=combos")}
          className="burger-menu-item"
        >
          Combos
        </li>
        <li className="burger-menu-item">Joggers</li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
