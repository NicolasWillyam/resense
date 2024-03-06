import React from "react";
import VerticalBar from "../vertical-bar";
import ProductCard from "../product-card";
import { ProductLayout } from "../product-layout";
import RightBar from "../right-bar";
import Link from "next/link";

function HomeSection() {
  return (
    <div className="w-full">
      <div className="w-full flex">
        <VerticalBar />
        <div className="w-[840px] mx-auto px-4">
          <div className="banner w-full h-[520px] bg-cover bg-no-repeat bg-center bg-[url('https://komehyo.jp/include_html/images/home/202402Cartierwatch_top-100.jpg')]"></div>
          <div className="grid grid-cols-6 gap-2 mt-2">
            <div className="banner w-full h-20 bg-cover bg-no-repeat bg-center bg-[url('https://komehyo.jp/include_html/images/home/202402Cartierwatch_top-100.jpg')]"></div>
            <div className="banner w-full h-20 bg-cover bg-no-repeat bg-center bg-[url('https://komehyo.jp/include_html/images/home/202402Cartierwatch_top-100.jpg')]"></div>
            <div className="banner w-full h-20 bg-cover bg-no-repeat bg-center bg-[url('https://komehyo.jp/include_html/images/home/202402Cartierwatch_top-100.jpg')]"></div>
            <div className="banner w-full h-20 bg-cover bg-no-repeat bg-center bg-[url('https://komehyo.jp/include_html/images/home/202402Cartierwatch_top-100.jpg')]"></div>
            <div className="banner w-full h-20 bg-cover bg-no-repeat bg-center bg-[url('https://komehyo.jp/include_html/images/home/202402Cartierwatch_top-100.jpg')]"></div>
            <div className="banner w-full h-20 bg-cover bg-no-repeat bg-center bg-[url('https://komehyo.jp/include_html/images/home/202402Cartierwatch_top-100.jpg')]"></div>
          </div>
        </div>
        <RightBar />
      </div>

      <div className="instagram w-full text-[#424242]">
        <div className="w-full text-center font-semibold my-8">Instagram</div>
        <div className="w-fit mx-auto overflow-auto grid grid-cols-6 gap-3  ">
          <div className="w-48 h-48 bg-cover bg-center bg-[url('https://video.visumo.jp/image/e2031301-3235-4260-962f-4d8b1d80079c/carousel/e8021510-2915-4c68-935c-f16f5200b054-large.jpg')]"></div>
          <div className="w-48 h-48 bg-cover bg-center bg-[url('https://video.visumo.jp/image/e2031301-3235-4260-962f-4d8b1d80079c/carousel/e8021510-2915-4c68-935c-f16f5200b054-large.jpg')]"></div>
          <div className="w-48 h-48 bg-cover bg-center bg-[url('https://video.visumo.jp/image/e2031301-3235-4260-962f-4d8b1d80079c/carousel/e8021510-2915-4c68-935c-f16f5200b054-large.jpg')]"></div>
          <div className="w-48 h-48 bg-cover bg-center bg-[url('https://video.visumo.jp/image/e2031301-3235-4260-962f-4d8b1d80079c/carousel/e8021510-2915-4c68-935c-f16f5200b054-large.jpg')]"></div>
          <div className="w-48 h-48 bg-cover bg-center bg-[url('https://video.visumo.jp/image/e2031301-3235-4260-962f-4d8b1d80079c/carousel/e8021510-2915-4c68-935c-f16f5200b054-large.jpg')]"></div>
          <div className="w-48 h-48 bg-cover bg-center bg-[url('https://video.visumo.jp/image/e2031301-3235-4260-962f-4d8b1d80079c/carousel/e8021510-2915-4c68-935c-f16f5200b054-large.jpg')]"></div>
        </div>

        <div className="w-full text-center font-medium hover:underline underline-offset-2 my-8">
          <Link href={"/"}>See more</Link>
        </div>
      </div>

      <div className="w-full text-[#424242] mt-32 ">
        <div className="w-fit mx-auto grid grid-cols-3 gap-4">
          <div className="w-80 h-24 bg-gray-500"></div>
          <div className="w-80 h-24 bg-gray-500"></div>
          <div className="w-80 h-24 bg-gray-500"></div>
        </div>
      </div>

      <div className="w-full text-[#424242] my-16">
        <div className="grid grid-cols-2 gap-0.5">
          <div className="w-full bg-[#F3F3F3] py-6 pb-12 text-center">
            <div className="text-lg font-light">ĐẶT HÀNG QUA ĐIỆN THOẠI</div>
            <div className="text-base uppercase">10:00 ~ 20:00</div>
            <button className="mt-4 mx-auto bg-[#080A50] p-3 px-12 flex items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-phone text-white"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="ml-2">0120-229966</span>
            </button>
          </div>

          <div className="w-full bg-[#F3F3F3] py-6 pb-12 text-center">
            <div className="text-lg">NHẬN TƯ VẤN TRỰC TIẾP</div>
            <div className="text-base">8:30 - 22:00</div>
            <button className="mt-4 mx-auto bg-[#080A50] p-3 px-12 flex items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-phone text-white"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="ml-2 uppercase">Chat ngay</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
