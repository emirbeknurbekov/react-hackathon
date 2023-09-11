import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../store/favorites/FavoriteAction";

import "./FavoritesPage.css";
import "./FavoritesPageAdaptive.css";
import FavoritesItem from "../../components/FavoritesItem";

const FavoritesPage = () => {
  const { favorites } = useSelector((state) => state.favorites);
  console.log(favorites);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavorites());
  }, []);
  return (
    <div className="favorite__container">
      <table style={{ marginBottom: "10%" }}>
        <thead>
          <tr>
            <th className="favorites__headers" style={{ padding: "30px" }}>
              Actions
            </th>
            <th className="favorites__headers" style={{ padding: "30px" }}>
              Product Details
            </th>
            <th className="favorites__headers" style={{ padding: "30px" }}>
              Price
            </th>
            <th className="favorites__headers" style={{ padding: "30px" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((favorite) => (
            <FavoritesItem key={favorite.id} favorite={favorite} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FavoritesPage;
