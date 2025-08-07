'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import BottomSide from './BottomSide'

const Sidebar = () => {
    const pathname = usePathname()
  return (
    <section className="sidebar">
        <nav className="flex flex-col gap-4">
            <div className="flex mb-8 justify-center ">
                <Link href="/" className="sidebar-logo">
                Lux
                </Link>
            </div>
            <div className="flex flex-col items-center gap-4">
                {sidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                    return(
                        <Link 
                        href={item.route}
                        key={item.label}
                        className={cn('sidebar-link', {'bg-bank-gradient': isActive})}
                        >
                        <div className="relative size-6">
                            <Image 
                            src={item.imgURL}
                            alt={item.label}
                            fill
                          
                            />
                        </div>
                        <p className='sidebar-label'>
                            {item.label}
                        </p>
                        </Link>
                    )
                })}
            </div>
        </nav>
        <BottomSide/>
    </section>
  )
}

export default Sidebar