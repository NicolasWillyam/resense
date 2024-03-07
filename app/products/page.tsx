import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

import { ProductLayout } from "@/components/product-layout";
import VerticalBar from "@/components/vertical-bar";
import React from "react";
import Link from "next/link";
import { seedSanityData } from "@/lib/seed";
import { SanityProduct } from "@/config/inventory";
import { ProductFilters } from "@/components/product-filters";

interface menuBrands {
  id: number;
  name: string;
  link: string;
}

const brands: menuBrands[] = [
  { id: 1, name: "Danh mục", link: "/" },
  { id: 2, name: "Thương hiệu", link: "/" },
  { id: 3, name: "Giá Cả", link: "/" },
  { id: 4, name: "Vật liệu", link: "/" },
  { id: 5, name: "Màu sắc", link: "/" },
  { id: 6, name: "Kích thước", link: "/" },
];

export default async function Page() {
  
  const products = await client.fetch<SanityProduct[]>(
    groq`*[_type == "product"]
    {
      _id, 
      _createdAt,
      name,
      sku,
      images,
      currency,
      price,
      description,
      "slug": slug.current
    }`
  );
  console.log("Hello");
  console.log(products);
  return (
    <div className="w-full py-12 text-center">
      <div className="text-3xl font-semibold capitalize text-black">
        Women’s Clothing
      </div>
      <div className="text-sx text-black/50 mt-1">
        Women / Collections/ <span className="text-black">Clothing</span>
      </div>

      <div className="w-full flex gap-8">
        <div className="w-72">
          {/* <div className="w-full h-14 flex items-center justify-between bg-[#000127] p-4 text-white">
            <div className="">
              {products.length} product{products.length === 1 ? "" : "s"}
            </div>
          </div> */}
          <ProductFilters />
        </div>
        <div className="w-4/5">
          <ProductLayout products={products} />
        </div>
      </div>
    </div>
  );
}
