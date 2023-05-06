import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  return (
    <div >
        <Link href={"/"}  >
        <Image
              src="https://res.cloudinary.com/dqgeth8jx/image/upload/v1680376302/portfolio/jithlogo.67171ca21e0f39829edf_u6iwxd.png"
              alt="logo"
              width={50}
              height={50}
            
            />
        </Link>
       
    </div>
  )
}
