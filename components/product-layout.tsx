"use client";

import resense from "../public/resense.jpeg";

import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { XCircle } from "lucide-react";
import { formatCurrencyString } from "use-shopping-cart";

import { SanityProduct } from "@/config/inventory";
import { shimmer, toBase64 } from "@/lib/image";

interface Props {
  products: SanityProduct[];
}

export function ProductLayout({ products }: Props) {
  if (products.length === 0) {
    return (
      <div className="mx-auto grid h-40 w-full place-items-center rounded-md border-2 border-dashed bg-gray-50 py-10 text-center dark:bg-gray-900">
        <div>
          <XCircle className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
          <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
            No products found
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-5">
      {products.map((product) => (
        <Link
          key={product._id}
          href={`/products/${product.slug}`}
          className="group text-sm"
        >
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden p-2 border-[1px] border-white hover:border-black/20 duration-150 ease-in-out">
            <Image
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(225, 280)
              )}`}
              src={urlForImage(product.images[0]).url()}
              alt={"name"}
              width={225}
              height={280}
              className="h-full w-full object-cover object-center"
            />
            <div className="text-left ">
              <div className="mt-4 text-sm font-light">{product.name}</div>

              <div className="mt-2">Size: S</div>
              <div className="">Rank: N</div>

              <div className="mt-2 font-medium">vnđ {product.price}</div>
            </div>
            {/* <h3 className="mt-4 font-medium">{product.name}</h3>
            <p className="mt-2 font-medium">{product.price}</p> */}
          </div>
        </Link>
      ))}
    </div>
  );
}
