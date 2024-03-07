"use client"

import { useParams, usePathname } from 'next/navigation';
import React from 'react'

interface Props {
  children: React.ReactNode;
}


const RootLayout: React.FC<Props> = (props) => {
    const pathname = usePathname();
    if (pathname.startsWith("/resense-admin") || pathname.startsWith("/huong-dan-su-dung")) return  (
        <div className='w-full'>{props.children}</div>
    ) 
    else return (<div className='pt-40 max-w-[1440px] mx-auto'>{props.children}</div>)
}

export default RootLayout