import React, { useEffect, useState } from 'react'
import { FaBars, FaMoon } from 'react-icons/fa'
import { MdSunny } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'

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
    href: "/about"
  },
  {
    title: "Contacts",
    href: "/contacts"
  },
]

const Navbar = () => {
  const location = useLocation()
  const [isNavOpen, setIsNavOpen] = useState(false)
  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen)
  }
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme == "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }
  return (
    <div className='border-b '>
        <nav className="max-w-[90%] mx-auto w-full py-5 flex justify-between items-center">
            <div className="text-blue-200 font-semibold text-[20px]">re: <span className={`text-[20px] ${theme === "light" ? "text-black" : "text-white"} transition-all ease-in-out duration-500 p-0 m-0 font-semibold`}>commerce</span></div>
            <ul className={`fixed lg:flex md:static top-0 flex flex-col items-center bg-inherit md:p-0 md:flex-row md:justify-end transition-all ease-in-out duration-500 p-24 right-0 h-full md:shadow-none z-5 lg:shadow-none  sm:shadow-lg w-1/2  gap-2 ${isNavOpen ? 'right-0' : '-right-full'}`}>
            <button onClick={toggleTheme} className={`p-2 rounded-full transition-all ease-in-out duration-500 ${theme === "light" ? "bg-blue-950" : "bg-yellow-500"}`}>{theme === "light" ? <FaMoon
            color='white'/> : <MdSunny
            color='white'/>}</button>
              {links.map((link) => (
                <li key={link.href}>
                  <Link className={`${location.pathname ===link.href ? "opacity-100" : "opacity-40"} ${theme === "light" ? "text-black" : "text-white"} transition-all`} to={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
            <button onClick={handleNavToggle} className='bg-black z-10 relative lg:hidden text-white rounded-md py-3 px-6 cursor-pointer md:hidden transition-opacity hover:bg-black/85'><FaBars /></button>
        </nav>
    </div>
  )
}

export default Navbar