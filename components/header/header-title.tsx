import Link from "next/link";
import React from "react";

function HeaderTitle() {
  return (
    <div className="w-full h-6 flex items-center justify-end relative">
      <div className="w-full h-6 border-b-[1px] text-xs font-light flex justify-center items-center absolute top-0 -z-10">
        Miễn phi vận chuyển đơn hàng trên 5.000.000vnđ
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-move-right ml-1"
        >
          <path d="M18 8L22 12L18 16" />
          <path d="M2 12H22" />
        </svg>
      </div>
      <div className="w-fit h-full flex items-center">
        <button className="w-fit px-6 border-l-[1px] text-sm hover:underline underline-offset-4 duration-300">
          Cửa hàng liên kết
        </button>
        <button className="w-fit px-6 border-l-[1px] text-sm hover:underline underline-offset-4 duration-300">
          Dịch vụ
        </button>
      </div>
    </div>
  );
}

export default HeaderTitle;
