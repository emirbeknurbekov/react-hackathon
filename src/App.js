import React, { useEffect } from "react";

import MainRoutes from "./routing/MainRoutes";
import { checkAuth } from "./store/user/UserActions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, []);
  return <MainRoutes />;
};

export default App;
