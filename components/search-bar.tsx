import React from "react";

function SearchBar() {
  return (
    <div>
      <label htmlFor="" className="flex items-center gap-2 border-b-[1px]">
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
          className="lucide lucide-search"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="text"
          className="w-[240px] h-9 outline-none bg-white text-black"
          placeholder="Tìm kiếm ..."
        />
      </label>
    </div>
  );
}

export default SearchBar;
