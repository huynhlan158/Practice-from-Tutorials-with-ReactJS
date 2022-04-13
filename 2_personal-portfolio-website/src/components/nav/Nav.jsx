import React from "react"
import { useState } from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'

import './nav.css'

function Nav () {
    const navItems = [
        {
            href: '#',
            icon: <AiOutlineHome />
        },
        {
            href: '#about',
            icon: <AiOutlineUser />
        },
        {
            href: '#experience',
            icon: <BiBook />
        },
        {
            href: '#services',
            icon: <RiServiceLine />
        },
        {
            href: '#contact',
            icon: <BiMessageSquareDetail />
        }
    ]

    const [activeNav, setActiveNav] = useState('#')

    return (
        <nav>
            {navItems.map((item, index) => (
                <a 
                    key={index}
                    href={item.href}
                    className={activeNav === item.href ? 'active' : ''}
                    onClick={() => setActiveNav(item.href)} 
                >
                    {item.icon}
                </a>
            ))}
        </nav>
    )
}

export default Nav