import React from "react";

function ProductCard() {
  return (
    <div>
      <div className="bg-[#F6F6F6]">
        <div className="w-full h-52 p-2 flex justify-end bg-cover bg-center bg-no-repeat bg-[url('https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-bella-tote--M21107_PM2_Front%20view.png?wid=656&hei=656')]">
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
        </div>
      </div>
      <div className="mt-2">
        <div className="text-xs uppercase">ĐỒNG HỒ VACHERON CONSTANTIN</div>
        <div className="text-sm text-[#424242] mt-1">Size: S</div>
        <div className="text-sm text-[#424242]">RANK: A</div>
        <div className="mt-2 text-sm font-semibold uppercase">
          <span className="text-[10px] font-light">VNĐ</span> 123.450.000
        </div>
        <div className="mt-1 flex items-center underline underline-offset-4 text-xs">
          TÀI SIMON
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-move-up-right mt-1 ml-1"
          >
            <path d="M13 5H19V11" />
            <path d="M19 5L5 19" />
          </svg>
        </div>

        <button className="w-full uppercase mt-4 border-[1px] border-black px-2 py-1 text-xs">
          LIÊN HỆ SELLER
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
