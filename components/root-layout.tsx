"use client";

import { useParams, usePathname } from "next/navigation";
import React from "react";
import Footer from "./footer";
import Header from "./header/header";

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = (props) => {
  const pathname = usePathname();
  if (
    pathname.startsWith("/resense-admin") ||
    pathname.startsWith("/huong-dan-su-dung")
  )
    return <div className="w-full">{props.children}</div>;
  else
    return (
      <div className="pt-40 max-w-[1440px] mx-auto">
        <Header />
        <div className="px-4">{props.children}</div>
        <Footer />
      </div>
    );
};

export default RootLayout;
