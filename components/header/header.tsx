"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import HeaderTitle from "./header-title";
import Navbar from "./navbar";
import Menu from "./menu";
import HeaderNote from "./header-note";

function Header() {
  const pathname = usePathname();
  if (pathname.startsWith("/resense-admin")) return null;
  if (pathname.startsWith("/huong-dan-su-dung")) return null;
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
