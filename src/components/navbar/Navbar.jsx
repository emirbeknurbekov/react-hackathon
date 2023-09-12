import React, { useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import BurgerMenu from "./burgerMenu/BurgerMenu";

import "./Navbar.css";
import "./NavbarAdaptive.css";
import logo from "../../icons/Logo.svg";
import favouritesIcon from "../../icons/favorites-icon.svg";
import cartIcon from "../../icons/cart-icon.svg";
import userIcon from "../../icons/user-icon.svg";
import BurgerMenuIcon from "../../icons/menu-burger.svg";

import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import { logout } from "../../store/user/UserActions";

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

const Navbar = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

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

  return (
    <div className="container">
      <div className="navbar-logo">
        <img onClick={() => navigate("/")} src={logo} alt="" />
      </div>
      <ul className="navbar-items">
        <li onClick={() => navigate("/products")} className="navbar-item ">
          Shop
        </li>
        <li
          onClick={() => navigate("/products?gender=men")}
          className="navbar-item"
        >
          Men
        </li>
        <li
          onClick={() => navigate("/products?gender=women")}
          className="navbar-item"
        >
          Women
        </li>
        <li
          onClick={() => navigate("/products?category=combos")}
          className="navbar-item"
        >
          Combos
        </li>
        <li
          onClick={() => navigate("/products?category=joggers")}
          className="navbar-item"
        >
          Joggers
        </li>
      </ul>
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
      <ul className="navbar-account__block">
        <li className="navbar-account__item">
          <img
            onClick={() => navigate("favorites")}
            src={favouritesIcon}
            alt=""
          />
        </li>

        <li onClick={() => navigate("/cart")} className="navbar-account__item">
          <img onClick={() => navigate("/cart")} src={cartIcon} alt="" />
        </li>
        {user ? (
          <li
            onClick={() => dispatch(logout())}
            className="navbar-account__item"
          >
            <LogoutTwoToneIcon sx={{ fontSize: "18px", color: "red" }} />
          </li>
        ) : (
          <li
            onClick={() => navigate("/login")}
            className="navbar-account__item"
          >
            <img src={userIcon} alt="" />
          </li>
        )}
      </ul>

      <div className="burger-menu-button" onClick={toggleBurgerMenu}>
        <img style={{ width: "25px" }} src={BurgerMenuIcon} alt="" />
      </div>

      {isBurgerMenuOpen && (
        <BurgerMenu isOpen={isBurgerMenuOpen} toggleMenu={toggleBurgerMenu} />
      )}
    </div>
  );
};

export default Navbar;
