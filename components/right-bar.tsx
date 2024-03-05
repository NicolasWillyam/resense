import React from "react";

function RightBar() {
  return (
    <div className="w-1/5 relative">
      <div className="w-4/5 flex-row gap-1 text-sm">
        <button className="w-full h-14 flex items-center justify-center bg-[#666666]/10 p-4 text-[#424242]  hover:bg-[#F9F9F9] mb-1 duration-300 ease-in-out">
          <div className="">New Arrivals</div>
        </button>
        <button className="w-full h-14 flex items-center justify-center bg-[#666666]/10 p-4 text-red-500  hover:bg-[#F9F9F9] mb-1 duration-300 ease-in-out">
          <div className="">Sale Off</div>
        </button>{" "}
        <button className="w-full h-14 flex items-center justify-center bg-[#666666]/10 p-4 text-[#424242]  hover:bg-[#F9F9F9] mb-1 duration-300 ease-in-out">
          <div className="">Thu mua && Thẩm định</div>
        </button>{" "}
        <button className="w-full h-14 flex items-center justify-center bg-[#666666]/10 p-4 text-[#424242]  hover:bg-[#F9F9F9] mb-1 duration-300 ease-in-out">
          <div className="">Đặt hàng qua điện thoại</div>
        </button>{" "}
        <button className="w-full h-14 flex items-center justify-center bg-[#004896] p-4 text-[#fff]  hover:bg-[#004896]/80 mb-1 duration-300 ease-in-out">
          <div className="">Q/A</div>
        </button>{" "}
        <button className="w-full h-14 flex items-center justify-center bg-[#666666]/10 p-4 text-[#424242]  hover:bg-[#F9F9F9] mb-1 duration-300 ease-in-out">
          <div className="">Kết nối trên Facebook</div>
        </button>
      </div>
    </div>
  );
}

export default RightBar;
