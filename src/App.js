import React from "react";

import MainRoutes from "./routing/MainRoutes";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <MainRoutes />
      <Footer />
    </>
  );
};

export default App;
