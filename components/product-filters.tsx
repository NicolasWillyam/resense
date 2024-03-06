"use client";

import { useRouter, useSearchParams } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

const filters = [
  {
    id: "category",
    name: "Danh mục",
    options: [
      {
        id: "1",
        name: "Size",
        type: [
          { value: "xs", label: "X-Small" },
          { value: "s", label: "Small" },
          { value: "m", label: "Medium" },
          { value: "l", label: "Large" },
          { value: "xl", label: "X-Large" },
          { value: "one-size", label: "One Size" },
        ],
      },

      {
        id: "2",
        name: "Sization",
        type: [
          { value: "xs", label: "X-Small" },
          { value: "s", label: "Small" },
          { value: "m", label: "Medium" },
          { value: "l", label: "Large" },
          { value: "xl", label: "X-Large" },
          { value: "one-size", label: "One Size" },
        ],
      },
      //   { value: "belts", label: "Belts" },
      //   { value: "gloves", label: "Gloves" },
      //   { value: "scarves", label: "Scarves" },
      //   { value: "wallets", label: "Wallets" },
    ],
  },
  //   {
  //     id: "size",
  //     name: "Size",
  //     options: [
  //       { value: "xs", label: "X-Small" },
  //       { value: "s", label: "Small" },
  //       { value: "m", label: "Medium" },
  //       { value: "l", label: "Large" },
  //       { value: "xl", label: "X-Large" },
  //       { value: "one-size", label: "One Size" },
  //     ],
  //   },
  //   {
  //     id: "brand",
  //     name: "Brand",
  //     options: [
  //       { value: "xs", label: "X-Small" },
  //       { value: "s", label: "Small" },
  //       { value: "m", label: "Medium" },
  //       { value: "l", label: "Large" },
  //       { value: "xl", label: "X-Large" },
  //       { value: "one-size", label: "One Size" },
  //     ],
  //   },
  //   {
  //     id: "color",
  //     name: "Color",
  //     options: [
  //       { value: "black", label: "Black" },
  //       { value: "blue", label: "Blue" },
  //       { value: "brown", label: "Brown" },
  //       { value: "green", label: "Green" },
  //       { value: "yellow", label: "Yellow" },
  //     ],
  //   },
];

export function ProductFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchValues = Array.from(searchParams.entries());
  return (
    // <form className="sticky top-20">
    //   <h3 className="sr-only">Categories</h3>

    //   {filters.map((section, i) => (
    //     <Accordion key={i} type="single" collapsible>
    //       <AccordionItem value={`item-${i}`}>
    //         <AccordionTrigger>
    //           <span>
    //             {section.name}{" "}
    //             <span className="ml-1 text-xs font-extrabold uppercase text-gray-400">
    //               {searchParams.get(section.id)
    //                 ? `(${searchParams.get(section.id)})`
    //                 : ""}
    //             </span>
    //           </span>
    //         </AccordionTrigger>
    //         <AccordionContent>
    //           <AccordionTrigger>
    //             <span>
    //               {section.options}{" "}
    //               <span className="ml-1 text-xs font-extrabold uppercase text-gray-400">
    //                 {searchParams.get(section.id)
    //                   ? `(${searchParams.get(section.id)})`
    //                   : ""}
    //               </span>
    //             </span>
    //           </AccordionTrigger>
    //           {/* <div className="space-y-4">
    //             {section.options.map((option, optionIdx) => (
    //               <div
    //                 key={option.options.values}
    //                 className="flex items-center space-x-2"
    //               >
    //                 <Checkbox
    //                   id={`filter-${section.id}-${optionIdx}`}
    //                   checked={searchValues.some(
    //                     ([key, value]) =>
    //                       key === section.id && value === option.value
    //                   )}
    //                   onClick={(event: any) => {
    //                     const params = new URLSearchParams(searchParams);
    //                     const checked =
    //                       event.currentTarget.dataset.state === "checked";
    //                     checked
    //                       ? params.delete(section.id)
    //                       : params.set(section.id, option.value);
    //                     router.replace(`/?${params.toString()}`);
    //                   }}
    //                 />
    //                 <label
    //                   htmlFor={`filter-${section.id}-${optionIdx}`}
    //                   className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    //                 >
    //                   {option.label}
    //                 </label>
    //               </div>
    //             ))}
    //           </div> */}
    //         </AccordionContent>
    //       </AccordionItem>
    //     </Accordion>
    //   ))}
    // </form>

    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
