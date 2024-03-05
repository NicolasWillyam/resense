import React from "react";

function Pin() {
  return (
    <div className="text-white flex gap-1  font-light bg-[#004896] w-fit text-xs p-2 fixed z-20 bottom-0 right-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-help-circle"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </svg>{" "}
      <div className="">CÂU HỎI THƯỜNG GẶP</div>
    </div>
  );
}

export default Pin;
