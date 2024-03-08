import Image from "next/image";
import React from "react";
import { GoChevronRight } from "react-icons/go";
import banner from "../../public/thoi-trang-nu-banner.png";
import banner2 from "../../public/thoi-trang-nu-banner2.png";
import banner3 from "../../public/thoi-trang-nu-banner3.png";
import banner4 from "../../public/thoi-trang-nu-banner4.png";
import category1 from "../../public/phan-loai-1.png";
import category2 from "../../public/phan-loai-2.png";
import category3 from "../../public/phan-loai-3.png";

function page() {
  console.log(banner);
  return (
    <div className="max-w-7xl mx-auto mt-8 mb-16 grid grid-cols-1 gap-16">
      <div className="flex gap-2 mb-8">
        <div className="text-sm text-gray-700 font-light">Resense</div>
        <div className="flex gap-2 items-center">
          <GoChevronRight />
          <div className="text-sm font-medium">Thời Trang Nữ</div>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-10">
        <div className="text-2xl h-full font-medium grid grid-cols-1">
          <div>
            <div className="text-3xl">10,000+</div>
            <div className="mt-2">Sản phẩm mới</div>
          </div>
          <button className="w-full mt-auto p-4 bg-black text-white text-sm uppercase tracking-[0.2rem]">
            Xem tất cả
          </button>
        </div>

        <div className="text-2xl font-medium grid grid-cols-1 gap-2">
          <Image alt="image" src={"/tui.png"} width={200} height={200} />
          <button className="w-full p-4 text-black border-[1px] border-black text-sm uppercase tracking-[0.2rem]">
            Xem tất cả
          </button>
        </div>

        <div className="text-2xl font-medium grid grid-cols-1 gap-2">
          <Image alt="image" src={"/tui.png"} width={200} height={200} />
          <button className="w-full p-4 text-black border-[1px] border-black text-sm uppercase tracking-[0.2rem]">
            Xem tất cả
          </button>
        </div>

        <div className="text-2xl font-medium grid grid-cols-1 gap-2">
          <Image alt="image" src={"/tui.png"} width={200} height={200} />
          <button className="w-full p-4 text-black border-[1px] border-black text-sm uppercase tracking-[0.2rem]">
            Xem tất cả
          </button>
        </div>

        <div className="text-2xl font-medium grid grid-cols-1 gap-2">
          <Image alt="image" src={"/tui.png"} width={200} height={200} />
          <button className="w-full p-4 text-black border-[1px] border-black text-sm uppercase tracking-[0.2rem]">
            Xem tất cả
          </button>
        </div>

        <div className="text-2xl font-medium grid grid-cols-1 gap-2">
          <Image alt="image" src={"/tui.png"} width={200} height={200} />
          <button className="w-full p-4 text-black border-[1px] border-black text-sm uppercase tracking-[0.2rem]">
            Xem tất cả
          </button>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${banner.src})` }}
        className="w-full h-[520px] bg-cover bg-no-repeat bg-center flex items-center justify-center"
      >
        <div className="w-[360px] bg-white p-6 text-center">
          <div className="uppercase text-2xl font-medium">
            tuyển chọn <br /> túi xách biểu tượng
          </div>
          <div className="text-sm font-medium mt-2 mb-10">
            Túi carryalls, túi mini, và hàng ngàn thiết kế khác chờ bạn khám phá
          </div>
          <button className="w-full p-4 text-black border-[1px] border-black text-sm uppercase tracking-[0.2rem]">
            Xem tất cả
          </button>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${banner2.src})` }}
        className="w-full h-[420px] bg-cover bg-no-repeat bg-center flex items-center"
      >
        <div className="w-[390px] bg-white p-4 py-3 text-center ml-auto mr-16">
          <div className="uppercase text-2xl font-medium mt-1">
            tuyển chọn <br /> túi xách biểu tượng
          </div>
          <div className="text-sm font-medium mt-2 mb-6">
            Túi carryalls, túi mini, và hàng ngàn thiết kế khác chờ bạn khám phá
          </div>
          <button className="w-full p-4 text-black border-[1px] border-black text-sm uppercase tracking-[0.2rem]">
            Xem tất cả
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <div
            style={{ backgroundImage: `url(${banner3.src})` }}
            className="w-full h-[420px] bg-cover bg-no-repeat bg-center flex items-center"
          ></div>
          <div className="uppercase text-2xl font-medium mt-4">
            tuyển chọn túi xách biểu tượng
          </div>
          <div className="text-sm font-medium mt-2 mb-6">
            Túi carryalls, túi mini, và hàng ngàn thiết kế khác chờ bạn khám phá
          </div>
          <button className="w-1/2 p-4 text-black border-[1px] border-black text-sm uppercase tracking-[0.2rem]">
            Xem tất cả
          </button>
        </div>
        <div>
          <div
            style={{ backgroundImage: `url(${banner3.src})` }}
            className="w-full h-[420px] bg-cover bg-no-repeat bg-center flex items-center"
          ></div>
          <div className="uppercase text-2xl font-medium mt-4">
            tuyển chọn túi xách biểu tượng
          </div>
          <div className="text-sm font-medium mt-2 mb-6">
            Túi carryalls, túi mini, và hàng ngàn thiết kế khác chờ bạn khám phá
          </div>
          <button className="w-1/2 p-4 text-black border-[1px] border-black text-sm uppercase tracking-[0.2rem]">
            Xem tất cả
          </button>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${banner2.src})` }}
        className="w-full h-[420px] bg-cover bg-no-repeat bg-center flex items-center"
      >
        <div className="w-[390px] bg-white p-4 py-3 text-center ml-auto mr-16">
          <div className="uppercase text-2xl font-medium mt-1">
            tuyển chọn <br /> túi xách biểu tượng
          </div>
          <div className="text-sm font-medium mt-2 mb-6">
            Túi carryalls, túi mini, và hàng ngàn thiết kế khác chờ bạn khám phá
          </div>
          <button className="w-full p-4 text-black border-[1px] border-black text-sm uppercase tracking-[0.2rem]">
            Xem tất cả
          </button>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-10">
        <div className="text-2xl h-full font-medium grid grid-cols-1">
          <div>
            <div className="text-3xl">10,000+</div>
            <div className="mt-2">Sản phẩm mới</div>
          </div>
          <button className="w-full mt-auto p-4 bg-black text-white text-sm uppercase tracking-[0.2rem]">
            Xem tất cả
          </button>
        </div>

        <div className="text-2xl font-medium grid grid-cols-1 gap-2">
          <Image alt="image" src={"/tui.png"} width={200} height={200} />
          <button className="w-full p-4 text-black border-[1px] border-black text-sm uppercase tracking-[0.2rem]">
            Xem tất cả
          </button>
        </div>

        <div className="text-2xl font-medium grid grid-cols-1 gap-2">
          <Image alt="image" src={"/tui.png"} width={200} height={200} />
          <button className="w-full p-4 text-black border-[1px] border-black text-sm uppercase tracking-[0.2rem]">
            Xem tất cả
          </button>
        </div>

        <div className="text-2xl font-medium grid grid-cols-1 gap-2">
          <Image alt="image" src={"/tui.png"} width={200} height={200} />
          <button className="w-full p-4 text-black border-[1px] border-black text-sm uppercase tracking-[0.2rem]">
            Xem tất cả
          </button>
        </div>

        <div className="text-2xl font-medium grid grid-cols-1 gap-2">
          <Image alt="image" src={"/tui.png"} width={200} height={200} />
          <button className="w-full p-4 text-black border-[1px] border-black text-sm uppercase tracking-[0.2rem]">
            Xem tất cả
          </button>
        </div>

        <div className="text-2xl font-medium grid grid-cols-1 gap-2">
          <Image alt="image" src={"/tui.png"} width={200} height={200} />
          <button className="w-full p-4 text-black border-[1px] border-black text-sm uppercase tracking-[0.2rem]">
            Xem tất cả
          </button>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${banner.src})` }}
        className="w-full h-[520px] bg-cover bg-no-repeat bg-center flex items-center justify-center"
      >
        <div className="w-[360px] bg-white p-6 text-center">
          <div className="uppercase text-2xl font-medium">
            tuyển chọn <br /> túi xách biểu tượng
          </div>
          <div className="text-sm font-medium mt-2 mb-10">
            Túi carryalls, túi mini, và hàng ngàn thiết kế khác chờ bạn khám phá
          </div>
          <button className="w-full p-4 text-black border-[1px] border-black text-sm uppercase tracking-[0.2rem]">
            Xem tất cả
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10">
        <div
          style={{ backgroundImage: `url(${category1.src})` }}
          className="w-full h-[400px] bg-cover bg-no-repeat bg-center flex items-end p-2"
        >
          <button className="w-full p-4 text-black bg-white border-[1px] border-black text-sm uppercase tracking-[0.2rem]">
            Dưới 5.000.000 vnđ
          </button>
        </div>

        <div
          style={{ backgroundImage: `url(${category2.src})` }}
          className="w-full h-[400px] bg-cover bg-no-repeat bg-center flex items-end p-2"
        >
          <button className="w-full p-4 text-black bg-white border-[1px] border-black text-sm uppercase tracking-[0.2rem]">
            Dưới 5.000.000 vnđ
          </button>
        </div>

        <div
          style={{ backgroundImage: `url(${category3.src})` }}
          className="w-full h-[400px] bg-cover bg-no-repeat bg-center flex items-end p-2"
        >
          <button className="w-full p-4 text-black bg-white border-[1px] border-black text-sm uppercase tracking-[0.2rem]">
            Dưới 5.000.000 vnđ
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
