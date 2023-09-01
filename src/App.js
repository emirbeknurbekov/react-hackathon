import React from "react";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import MainRoutes from "./routing/MainRoutes";

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
