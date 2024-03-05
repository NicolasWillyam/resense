import Link from "next/link";
import React from "react";

function HeaderNote() {
  return (
    <div className="w-full h-7 bg-[#000127] text-white flex items-center justify-center">
      <div className="text-xs font-medium mr-1">Mừng ngày Quốc tế Phụ Nữ.</div>
      <button className="text-xs font-light underline underline-offset-2">
        <Link href="/">Mua sắm ngay</Link>
      </button>
    </div>
  );
}

export default HeaderNote;
