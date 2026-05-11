"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const NavLink = ({href, children}) => {
    const pathname = usePathname();
    console.log(pathname, 'pathname');

    const isActive = href === pathname;
        return (
        <Link
        href= {href}
        className= {`${isActive ? "hover:text-blue-600 transition-colors border-b-2 border-b-blue-500" : ""}`}>
            {children}
            
        </Link>
    );
};

export default NavLink;