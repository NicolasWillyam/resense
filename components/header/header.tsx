import React from "react";
import HeaderTitle from "./header-title";
import Navbar from "./navbar";
import Menu from "./menu";
import HeaderNote from "./header-note";

function Header() {
  return (
    <header className="w-full bg-white fixed z-10 top-0 left-0">
      <div className="max-w-[1440px] mx-auto">
        <HeaderTitle />
        <Navbar />
        <Menu />
        <HeaderNote />
      </div>
    </header>
  );
}

export default Header;
