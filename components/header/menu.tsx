import Link from "next/link";
import React from "react";

interface MenuItems {
  id: number;
  name: string;
  link: string;
}

const items: MenuItems[] = [
  { id: 1, name: "THỜI TRANG NỮ", link: "/thoi-trang-nu" },
  { id: 2, name: "TÚI", link: "/" },
  { id: 3, name: "TRANG SỨC & PHỤ KIỆN", link: "/" },
  { id: 4, name: "ĐỒNG HỒ NỮ", link: "/" },
  { id: 5, name: "GIÀY", link: "/" },
  { id: 6, name: "THỜI TRANG NAM", link: "/" },
  { id: 7, name: "ĐỒNG HỒ NAM", link: "/" },
  { id: 8, name: "Nước hoa", link: "/" },
];

function Menu() {
  return (
    <div className="w-full h-10 border-y-[1px] flex gap-5 items-center justify-center">
      <ul className="text-sm h-full font-light uppercase flex gap-10 text-[#424242]">
        {items.map((item: MenuItems) => (
          <li
            key={item.id}
            className="hover:text-black duration-300 ease-in-out bg-red-00 h-full py-2.5 hover:border-black hover:font-medium hover:border-b-[3px]"
          >
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
