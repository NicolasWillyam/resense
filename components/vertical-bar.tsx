import Link from "next/link";
import React from "react";

interface menuBrands {
  id: number;
  name: string;
  link: string;
}

const brands: menuBrands[] = [
  { id: 1, name: "HERMES", link: "/" },
  { id: 2, name: "ROLEX", link: "/" },
  { id: 3, name: "LOUIS VUITTON", link: "/" },
  { id: 4, name: "CATIER", link: "/" },
  { id: 5, name: "CHANEL", link: "/" },
  { id: 6, name: "TIFFANY", link: "/" },
  { id: 7, name: "HARRY WINSTON", link: "/" },
  { id: 8, name: "BVLGARI", link: "/" },
  { id: 9, name: "GUCCI", link: "/" },
  { id: 10, name: "PRADA", link: "/" },
  { id: 11, name: "VAN CLEEF & ARPEL", link: "/" },
  { id: 12, name: "BALENCIAGA", link: "/" },
  { id: 13, name: "FENDI", link: "/" },
  { id: 14, name: "CELINE", link: "/" },
  { id: 15, name: "GIVENCHY", link: "/" },
  { id: 16, name: "DIOR", link: "/" },
  { id: 17, name: "BURBERRY", link: "/" },
  { id: 18, name: "THOM BROWNE", link: "/" },
  { id: 19, name: "DESIGNER", link: "/" },
];

function VerticalBar() {
  return (
    <div>
      <div className="w-72">
        <div className="w-full flex-row gap-1">
          <div className="w-full h-14 flex items-center justify-between bg-[#000127] p-4 text-white">
            <div className="">Tất cả</div>
            <div className="">9999 sản phẩm</div>
          </div>
          <div className="w-full h-14 flex items-center justify-between bg-[#F3F3F3] p-4 text-[#424242] hover:text-[#424242]/60 hover:bg-[#F9F9F9] mb-0.5">
            <div className="">Danh muc</div>
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
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          <div className="w-full h-14 flex items-center justify-between bg-[#F3F3F3] p-4 text-[#424242] hover:text-[#424242]/60 hover:bg-[#F9F9F9] mb-0.5">
            <div className="">Danh muc</div>
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
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          <div className="w-full h-14 flex items-center justify-between bg-[#F3F3F3] p-4 text-[#424242] hover:text-[#424242]/60 hover:bg-[#F9F9F9] mb-0.5">
            <div className="">Danh muc</div>
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
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          <div className="w-full h-14 flex items-center justify-between bg-[#F3F3F3] p-4 text-[#424242] hover:text-[#424242]/60 hover:bg-[#F9F9F9] mb-0.5">
            <div className="">Danh muc</div>
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
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          <div className="w-full h-14 flex items-center justify-between bg-[#F3F3F3] p-4 text-[#424242] hover:text-[#424242]/60 hover:bg-[#F9F9F9] mb-0.5">
            <div className="">Danh muc</div>
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
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>

        <div className="w-full pt-6">
          <div className="w-full font-medium text-center">BRAND</div>

          <div className="pt-6 flex-col text-[#424242]">
            {brands.map((brand: menuBrands) => (
              <Link key={brand.id} href={"/"}>
                <button className="w-full h-14 p-4 flex items-center justify-between border-b-[1px] border-gray-200 hover:bg-gray-100 duration-300 ease-in-out">
                  <div className="uppercase">{brand.name}</div>
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
                    className="lucide lucide-chevron-down -rotate-90"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalBar;
