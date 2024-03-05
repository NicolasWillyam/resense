import React from "react";
import ProductCard from "./product-card";

function ProductLayout() {
  return (
    <div className="py-16">
      <div className="w-full text-lg text-center font-medium">
        Đề xuất: Có thể bạn sẽ thích
      </div>
      <div className="grid grid-cols-5 gap-x-2 gap-y-6 mt-8 mb-12">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="w-2/3 mx-auto h-14 flex items-center justify-between bg-[#F3F3F3] p-4 text-[#424242] hover:text-[#424242]/60 hover:bg-[#F9F9F9] border border-gray-200">
        <div className="w-full text-center">XEM THÊM </div>
      </div>
    </div>
  );
}

export default ProductLayout;
