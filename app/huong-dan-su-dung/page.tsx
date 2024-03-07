import Image from 'next/image'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


import { GoChevronRight } from "react-icons/go";

function page() {
  return (
   <div className="max-w-[960px] mx-auto">
     <div className=" h-24 flex items-center justify-between">
      <div className="text-xl font-semibold">HƯỚNG DẪN SỬ DỤNG</div>
       <Image src="/resense.jpeg" alt="logo-image" height={30} width={160} />
    </div>

   <div className="flex gap-2">  <div className="text-sm text-gray-700 font-light">
      Resense
    </div>
    <div className="flex gap-2 items-center">
      <GoChevronRight />
      <div className="text-sm font-medium">HƯỚNG DẪN SỬ DỤNG</div>
    </div></div>


    <div className="w-full flex items-start gap-10 my-10">
      <div className="w-1/3  h-20 grid grid-cols-1 gap-2">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className=' px-3 py-4 w-full bg-gray-100'>
            <AccordionTrigger><div className="text-sm font-medium">VỀ TRANG WEB NÀY</div></AccordionTrigger>
            <AccordionContent>
              <div className="mt-3">
                <div className="py-2 text-xs ">Điều khoản sử dụng</div>
                <div className="py-2 text-xs ">Chính sách riêng tư</div>
                <div className="py-2 text-xs ">Sitemap</div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className=' px-3 py-4 w-full bg-gray-100'>
            <AccordionTrigger><div className="text-sm font-medium">VỀ TRANG WEB NÀY</div></AccordionTrigger>
            <AccordionContent>
              <div className="mt-3">
                <div className="py-2 text-xs ">Điều khoản sử dụng</div>
                <div className="py-2 text-xs ">Chính sách riêng tư</div>
                <div className="py-2 text-xs ">Sitemap</div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className=' px-3 py-4 w-full bg-gray-100'>
            <AccordionTrigger><div className="text-sm font-medium">VỀ TRANG WEB NÀY</div></AccordionTrigger>
            <AccordionContent>
              <div className="mt-3">
                <div className="py-2 text-xs ">Điều khoản sử dụng</div>
                <div className="py-2 text-xs ">Chính sách riêng tư</div>
                <div className="py-2 text-xs ">Sitemap</div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className=' px-3 py-4 w-full bg-gray-100'>
            <AccordionTrigger><div className="text-sm font-medium">VỀ TRANG WEB NÀY</div></AccordionTrigger>
            <AccordionContent>
              <div className="mt-3">
                <div className="py-2 text-xs ">Điều khoản sử dụng</div>
                <div className="py-2 text-xs ">Chính sách riêng tư</div>
                <div className="py-2 text-xs ">Sitemap</div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </div>
      <div className="w-2/3 bg-red-900 h-20"></div>
    </div>
   </div>
  )
}

export default page