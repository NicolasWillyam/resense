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
        id: "woman-fashion",
        name: "Thời Trang Nữ",
        types: [
          { value: "tat-ca", label: "Tất cả trang phục" },
          { value: "ao-khoac-ngoai", label: "Áo khoác ngoài" },
          { value: "m", label: "Suit" },
          { value: "l", label: "Đồ dệt kim" },
          { value: "xl", label: "Áo" },
          { value: "one-size", label: "Đồ Denim" },
          { value: "one-size", label: "Quần dài" },
          { value: "one-size", label: "Đầm" },
          { value: "one-size", label: "Váy và quần ngắn" },
          { value: "one-size", label: "Đồ bơi" },
          { value: "phu-kien-va-trang-suc", label: "Đồ bơi" },
          {
            value: "phu-kien-va-trang-suc-nu",
            label: "Phụ kiện & trang sức nữ",
            super_types: [
              { value: "tat-ca", label: "Tất cả" },
              { value: "ao-khoac-ngoai", label: "Vòng cổ & mặt dây chuyền" },
              { value: "m", label: "khuyên tai" },
              { value: "l", label: "Vòng tay" },
              { value: "xl", label: "Nhẫn" },
              { value: "one-size", label: "Ghim cài áo & Khuy măng sét" },
              { value: "one-size", label: "Khăn" },
              { value: "one-size", label: "Mũ & Găng tay" },
              { value: "one-size", label: "Thắt Lưng" },
              { value: "one-size", label: "Kính mẳt" },
              { value: "one-size", label: "Móc khóa & phụ kiện treo túi" },
              { value: "one-size", label: "phụ kiện tóc" },
              { value: "one-size", label: "phụ kiện công nghệ" },
              { value: "one-size", label: "ví dài" },
              { value: "one-size", label: "ví nhỏ" },
              { value: "one-size", label: "ví đựng thẻ" },
              { value: "one-size", label: "ví đựng hộ chiếu" },
              { value: "one-size", label: "ốp điện thoại" },
            ],
          },
          {
            value: "giay-nu",
            label: "Giày Nữ",
            super_types: [
              { value: "tat-ca-giày", label: "Tất cả giày" },
              { value: "ao-khoac-ngoai", label: "Giày lười & giày búp bê" },
              { value: "m", label: "giày thể thao" },
              { value: "l", label: "Giày platform" },
              { value: "xl", label: "sandals & giày đế cói" },
              { value: "one-size", label: "Giày cao gót" },
              { value: "one-size", label: "Boots" },
            ],
          },

        ],
      },

      
    ],
  },
    {
      id: "size",
      name: "Size",
      options: [
        { value: "xs", label: "X-Small"},
        { value: "s", label: "Small" },
        { value: "m", label: "Medium" },
        { value: "l", label: "Large" },
        { value: "xl", label: "X-Large" },
        { value: "one-size", label: "One Size" },
      ],
    },
    {
      id: "brand",
      name: "Brand",
      options: [
        { value: "xs", label: "X-Small" },
        { value: "s", label: "Small" },
        { value: "m", label: "Medium" },
        { value: "l", label: "Large" },
        { value: "xl", label: "X-Large" },
        { value: "one-size", label: "One Size" },
      ],
    },
    {
      id: "color",
      name: "Color",
      options: [
        { value: "black", label: "Black" },
        { value: "blue", label: "Blue" },
        { value: "brown", label: "Brown" },
        { value: "green", label: "Green" },
        { value: "yellow", label: "Yellow" },
      ],
    },
];

export function ProductFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchValues = Array.from(searchParams.entries());

  // console.log(filters[0].options[0].type[0].value)
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
             
    //           <div className="space-y-4">
    //             {section.options.map((option, optionIdx) => (
    //               <div
    //                 key={option.value}
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
    //           </div>
    //         </AccordionContent>
    //       </AccordionItem>
    //     </Accordion>
    //   ))}
    // </form>


   <form className="sticky top-20">
      <h3 className="sr-only">Categories</h3>

      {filters.map((section, i) => (
        <div key={i} className="border-b-[1px] border-gray-100">
          {i === 0 ? (
          <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger><div className="py-3">{section.name}</div></AccordionTrigger>
            <AccordionContent>

              {section.options?.map((option, i) => (
                  <Accordion key={i} type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger><div className="border-t-[1px] border-gray-100 py-3">{option.name}</div></AccordionTrigger>
                  <AccordionContent>
                    <div className="text-sm">
                      {option.types?.map((type, typeIdx) => (

                    <div>
                      {(() => {
                        if (type.super_types) {
                          return ((
                            <div>
                              <Accordion type="single" collapsible>
                          <AccordionItem value="item-1">
                            <AccordionTrigger><div className="border-t-[1px] border-gray-100 py-3">{type.label}</div></AccordionTrigger>

                            {type.super_types.map((superType, superTypeIdx) => (
                            <AccordionContent>
                              <div
                              key={type.value}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                // id={`filter-${section.id}-${superTypeIdx}`}
                                // checked={searchValues.some(
                                //   ([key, value]) =>
                                //     key === section.id && value === superType.value
                                // )}
                                // onClick={(event: any) => {
                                //   const params = new URLSearchParams(searchParams);
                                //   const checked =
                                //     event.currentTarget.dataset.state === "checked";
                                //   checked
                                //     ? params.delete(section.id)
                                //     : params.set(section.id, superType.value);
                                //   router.replace(`/?${params.toString()}`);
                                // }}
                              />
                              <label
                                htmlFor={`filter-${section.id}-${typeIdx}`}
                                className="text-sm my-2  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {superType.label}
                              </label>
                            </div>
                            </AccordionContent>
                          ))}
                          </AccordionItem>
                        </Accordion>
                            </div>

                          ));
                        } else {
                          return (
                            <div
                              key={type.value}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                // id={`filter-${section.id}-${superTypeIdx}`}
                                // checked={searchValues.some(
                                //   ([key, value]) =>
                                //     key === section.id && value === superType.value
                                // )}
                                // onClick={(event: any) => {
                                //   const params = new URLSearchParams(searchParams);
                                //   const checked =
                                //     event.currentTarget.dataset.state === "checked";
                                //   checked
                                //     ? params.delete(section.id)
                                //     : params.set(section.id, superType.value);
                                //   router.replace(`/?${params.toString()}`);
                                // }}
                              />
                              <label
                                htmlFor={`filter-${section.id}-${typeIdx}`}
                                className="text-sm my-2  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {type.label}
                              </label>
                            </div>
                          );
                        }
                      })()}

                    </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              ))}
              
            
            </AccordionContent>
          </AccordionItem>
        </Accordion>
) : (
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
                            <AccordionTrigger><div className="border-t-[1px] border-gray-100 py-3">{section.name}</div></AccordionTrigger>

    <AccordionContent>
      {section.options.map((option, i) => (
        <div
                              key={option.value}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                // id={`filter-${section.id}-${superTypeIdx}`}
                                // checked={searchValues.some(
                                //   ([key, value]) =>
                                //     key === section.id && value === superType.value
                                // )}
                                // onClick={(event: any) => {
                                //   const params = new URLSearchParams(searchParams);
                                //   const checked =
                                //     event.currentTarget.dataset.state === "checked";
                                //   checked
                                //     ? params.delete(section.id)
                                //     : params.set(section.id, superType.value);
                                //   router.replace(`/?${params.toString()}`);
                                // }}
                              />
                              <label
                                htmlFor={`filter-${section.id}-${i}`}
                                className="text-sm my-2  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {option.label}
                              </label>
                            </div>
      ))}
    </AccordionContent>
  </AccordionItem>
</Accordion>
)}
    
      
      </div>
      ))}
      
      
  </form>
  );
}
