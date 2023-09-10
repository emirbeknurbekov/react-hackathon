import { setFavorites } from "./FavoriteSlice";

function getFavoritesFromLS() {
  const data = JSON.parse(localStorage.getItem("favorites"));

  if (!data) {
    return [];
  }
  return data;
}

function setFavoritesToLS(data) {
  localStorage.setItem("favorites", JSON.stringify(data));
}

export const getFavorites = () => (dispatch) => {
  const data = getFavoritesFromLS();
  dispatch(setFavorites(data));
};

export const addItemToFavorites = (item) => (dispatch) => {
  let data = getFavoritesFromLS();
  data.push(item);
  setFavoritesToLS(data);
  dispatch(setFavorites(data));
};

export const removeItemFromFavorites = (id) => (dispatch) => {
  let data = getFavoritesFromLS();
  data = data.filter((item) => item.id != id);
  setFavoritesToLS(data);
  dispatch(setFavorites(data));
};

export const isItemInFavorites = (id) => {
  const data = getFavoritesFromLS();
  return data.some((item) => item.id === id);
};
