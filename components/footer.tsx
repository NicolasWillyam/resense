"use client";

import Image from "next/image";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface FooterItem {
  id: number;
  name: string;
  link?: string;
  subsections?: FooterItem[];
}

const footerItems: FooterItem[] = [
  {
    id: 1,
    name: "GIỚI THIỆU",
    link: "/gioi-thieu",
    subsections: [
      { id: 2, name: "VỀ CHÚNG TÔI", link: "/gioi-thieu" },
      { id: 3, name: "MYSENSE,.LTD", link: "/gioi-thieu" },
      {
        id: 4,
        name: "DANH SÁCH CỬA HÀNG LIÊN KẾT",
        link: "/gioi-thieu",
      },
    ],
  },
  {
    id: 2,
    name: "LIÊN HỆ VỚI CHÚNG TÔI",
    link: "/gioi-thieu",
    subsections: [
      { id: 2, name: "KHIẾU NẠI", link: "/gioi-thieu" },
      { id: 3, name: "ĐẶT HÀNG QUA ĐIỆN THOẠI", link: "/gioi-thieu" },
      {
        id: 4,
        name: "THU MUA HÀNG TẬN NƠI",
        link: "/gioi-thieu",
      },
    ],
  },
  {
    id: 3,
    name: "DỊCH VỤ KHÁCH HÀNG",
    link: "/gioi-thieu",
    subsections: [
      { id: 2, name: "HƯỚNG DẪN SỬ DỤNG", link: "/gioi-thieu" },
      { id: 3, name: "CHÍNH SÁCH ĐỔI TRẢ", link: "/gioi-thieu" },
      {
        id: 4,
        name: "HỖ TRỢ",
        link: "/gioi-thieu",
      },
    ],
  },
  {
    id: 4,
    name: "VỀ TRANG WEB NÀY",
    link: "/gioi-thieu",
    subsections: [
      { id: 2, name: "ĐIỀU KHOẢN SỬ DỤNG", link: "/gioi-thieu" },
      { id: 3, name: "CHÍNH SÁCH RIÊNG TƯ", link: "/gioi-thieu" },
      {
        id: 4,
        name: "SITEMAP",
        link: "/gioi-thieu",
      },
    ],
  },
];

function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/resense-admin")) return null;
  const renderSubsections = (subsections: FooterItem[]) => {
    return (
      <ul>
        {subsections.map((subitem) => (
          <li key={subitem.id}>
            {subitem.link ? (
              <a href={subitem.link}>
                <div className="w-full  flex items-center justify-between p-3 text-[#424242] hover:text-[#424242]/60">
                  <div className="">{subitem.name}</div>
                </div>
              </a>
            ) : (
              <div className="w-full flex items-center justify-between p-3 text-[#424242] hover:text-[#424242]/60">
                <div className="">{subitem.name}</div>
              </div>
            )}
            {subitem.subsections && renderSubsections(subitem.subsections)}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className="w-full">
      <ul className="grid grid-cols-4 gap-8 text-[#424242]">
        {footerItems.map((item) => (
          <li key={item.id} className="font-light">
            {item.link ? (
              <a href={item.link}>
                <div className="w-full mb-2 flex items-center justify-between p-3 py-4 border-y-[1px]">
                  <div className="">{item.name}</div>
                </div>
              </a>
            ) : (
              <div className="w-full mb-2 flex items-center justify-between p-3 py-4 border-y-[1px]">
                <div className="">{item.name}</div>
              </div>
            )}
            {item.subsections && renderSubsections(item.subsections)}
          </li>
        ))}
      </ul>

      <div className="w-full py-12 bg-[#000127] text-white my-16 mb-4 flex gap-5 items-center justify-center">
        <div className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-instagram"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          <div className="text-[10px] font-medium uppercase mt-2">Women</div>
        </div>

        <div className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-instagram"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          <div className="text-[10px] font-medium uppercase mt-2">Official</div>
        </div>

        <div className="text-xl uppercase font-bold">LINE</div>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-twitter"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        </div>

        <div className="h-12 w-0.5 bg-white mx-12"></div>
        <div className="text-xs">KOMEHYO official website</div>
        <div className="text-xs underline underline-offset-2">
          Store information
        </div>
        <div className="text-xs underline underline-offset-2">
          Brand information
        </div>
      </div>

      <div className="w-full py-6 flex items-start justify-between text-[#424242]">
        <div className="text-sm font-light">
          <Image src="/resense.jpeg" alt="logo-image" width={120} height={30} />
          <div className="text-sm mt-6">
            RESENSE được cấp phép là đại lý bán đồ cũ dựa trên luật kinh doanh
            đồ cũ.
          </div>
          <div className="text-xs mt-2">Mã số thuế: 541162007700</div>
          <div className="mt-10 text-sm">
            Bản quyền © Mysense Co.,Ltd. Mọi quyền được bảo vệ.
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-end gap-2">
          <div className="w-16 h-16 bg-cover bg-center bg-[url('https://img.komehyo.jp/static/images/parts/mark/footer_aacd.gif?20240304152536')]"></div>
          <div className="w-16 h-16 bg-cover bg-center bg-[url('https://img.komehyo.jp/static/images/parts/mark/footer_privacy.gif?20240304152536')]"></div>
          <div className="w-28 h-16 bg-cover bg-center bg-[url('https://img.komehyo.jp/static/images/parts/mark/footer_vesca.gif?20240304152536')]"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

// import React from "react";

// // Define interface
// interface FooterItem {
//   id: number;
//   name: string;
//   link?: string;
//   subsections?: FooterItem[];
// }

// const Footer: React.FC = () => {
//   // Example array of footer items
//   const footerItems: FooterItem[] = [
//     {
//       id: 1,
//       name: "About",
//       subsections: [
//         { id: 2, name: "Company", link: "/about/company" },
//         { id: 3, name: "Team", link: "/about/team" },
//         { id: 4, name: "History", link: "/about/history" },
//       ],
//     },
//     {
//       id: 5,
//       name: "Contact",
//       subsections: [
//         { id: 6, name: "Customer Support", link: "/contact/support" },
//         { id: 7, name: "Sales", link: "/contact/sales" },
//       ],
//     },
//     {
//       id: 8,
//       name: "Privacy Policy",
//       link: "/privacy-policy",
//     },
//     {
//       id: 9,
//       name: "Terms of Service",
//       link: "/terms-of-service",
//     },
//   ];

//   // Render subsections recursively
//   const renderSubsections = (subsections: FooterItem[]) => {
//     return (
//       <ul>
//         {subsections.map((subitem) => (
//           <li key={subitem.id}>
//             {subitem.link ? (
//               <a href={subitem.link}>{subitem.name}</a>
//             ) : (
//               <span>{subitem.name}</span>
//             )}
//             {subitem.subsections && renderSubsections(subitem.subsections)}
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   return (
//     <footer>
//       <ul className="flex">
//         {footerItems.map((item) => (
//           <li key={item.id}>
//             {item.link ? (
//               <a href={item.link}>{item.name}</a>
//             ) : (
//               <span>{item.name}</span>
//             )}
//             {item.subsections && renderSubsections(item.subsections)}
//           </li>
//         ))}
//       </ul>
//     </footer>
//   );
// };

// export default Footer;
