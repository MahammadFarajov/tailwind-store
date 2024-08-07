import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const links = [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "Products",
      href: "/products"
    },
    {
      title: "About",
      href: "/"
    },
    {
      title: "Contacts",
      href: "/"
    },
  ]
  return (
    <div className='border-b '>
        <div className="max-w-[90%] mx-auto w-full py-5 flex justify-between items-center">
            <div className="text-blue-200 font-semibold text-[20px]">re: <span className='text-[20px] text-black font-semibold'>commerce</span></div>
            <ul className='flex gap-2 '>
              {links.map((link) => (
                <li key={link.href}>
                  <Link className={`${location.pathname ===link.href ? "opacity-100" : "opacity-40"} transition-all`} to={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
        </div>
    </div>
  )
}

export default Navbar