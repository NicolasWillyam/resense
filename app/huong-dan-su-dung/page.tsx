import Image from 'next/image'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


import { GoChevronRight } from "react-icons/go";
import Link from 'next/link';
import Logo from '@/components/ui/logo';

function page() {
  return (
   <div className="max-w-[960px] mx-auto">
     <div className=" h-24 flex items-center justify-between">
      <div className="text-xl font-semibold">HƯỚNG DẪN SỬ DỤNG</div>
       <Logo/>
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
      <div className="w-2/3">
        <div className="grid grid-cols-2 gap-10">
          <div className="border-t-[1px] border-black">
            <ul className=''>
              <li className='font-medium uppercase py-3'>
                VỀ TRANG WEB NÀY
              </li>
              <li>
                <Link href={'/'}> <div className="py-2 text-sm hover:underline hover:underline-offset-4">Điều khoản sử dụng</div></Link>
              </li>
              <li>
                <Link href={'/'}> <div className="py-2 text-sm ">Chính sách riêng tư</div></Link>
              </li>
              <li>
                <Link href={'/'}> <div className="py-2 text-sm ">Sitemap</div></Link>
              </li>
            </ul>
          </div>

           <div className="border-t-[1px] border-black">
            <ul className=''>
              <li className='font-medium uppercase py-3'>
                VỀ TRANG WEB NÀY
              </li>
              <li>
                <Link href={'/'}> <div className="py-2 text-sm hover:underline hover:underline-offset-4">Điều khoản sử dụng</div></Link>
              </li>
              <li>
                <Link href={'/'}> <div className="py-2 text-sm ">Chính sách riêng tư</div></Link>
              </li>
              <li>
                <Link href={'/'}> <div className="py-2 text-sm ">Sitemap</div></Link>
              </li>
            </ul>
          </div>

           <div className="border-t-[1px] border-black">
            <ul className=''>
              <li className='font-medium uppercase py-3'>
                VỀ TRANG WEB NÀY
              </li>
              <li>
                <Link href={'/'}> <div className="py-2 text-sm hover:underline hover:underline-offset-4">Điều khoản sử dụng</div></Link>
              </li>
              <li>
                <Link href={'/'}> <div className="py-2 text-sm ">Chính sách riêng tư</div></Link>
              </li>
              <li>
                <Link href={'/'}> <div className="py-2 text-sm ">Sitemap</div></Link>
              </li>
            </ul>
          </div>

           <div className="border-t-[1px] border-black">
            <ul className=''>
              <li className='font-medium uppercase py-3'>
                VỀ TRANG WEB NÀY
              </li>
              <li>
                <Link href={'/'}> <div className="py-2 text-sm hover:underline hover:underline-offset-4">Điều khoản sử dụng</div></Link>
              </li>
              <li>
                <Link href={'/'}> <div className="py-2 text-sm ">Chính sách riêng tư</div></Link>
              </li>
              <li>
                <Link href={'/'}> <div className="py-2 text-sm ">Sitemap</div></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default page