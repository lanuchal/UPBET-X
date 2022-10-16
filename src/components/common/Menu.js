import React from "react";
import Footer from "./Footer";
import Head from "./Head";
import LeftBar from "./LeftBar";

function Menu() {
  return (
    <div className="bg-home p-4 position-relative">
      <Head />
      {/* <img src={logo} alt=""/> */}
      <LeftBar />
      <Footer />
    </div>
  );
}

export default Menu;
