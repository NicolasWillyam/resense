import React from "react";
import Image from "next/image";
import SearchBar from "../search-bar";
import Logo from "../ui/logo";

function Navbar() {
  return (
    <div className="w-full h-16 my-auto grid grid-cols-3 items-center bg-transparent px-4">
      <div className="w-full text-sm gap-2 flex items-center">
        <div className="h-5 w-5 bg-cover bg-center rounded-full bg-[url('http://www.sciencekids.co.nz/images/pictures/flags680/Vietnam.jpg')]"></div>
        <div className="font-light">VN / vnđ</div>
        <div className="font-semibold">| Tiếng Việt</div>
      </div>

      <div className="w-full mx-auto h-full  text-xl font-semibold flex items-center justify-center top-0 hover:underline">
        <Logo/>
      </div>

      <div className="text-sm gap-5 flex items-center justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-user"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-heart"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-shopping-bag"
        >
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        <SearchBar />
      </div>
    </div>
  );
}

export default Navbar;
