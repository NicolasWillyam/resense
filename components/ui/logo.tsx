import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <div><Link href={'/'}><Image src="/resense.jpeg" alt="logo-image" height={30} width={160} /></Link>
      </div>

  )
}

export default Logo