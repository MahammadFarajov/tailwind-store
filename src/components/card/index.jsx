import React from 'react'
import { Link } from 'react-router-dom'

function Card({ id, title, description, image, price, category}) {
  return (
    <div className={`border ${theme === "light" ? "border-black" : "border-white"} rounded-xl py-4 px-3 flex gap-2 flex-col`}>
        <div className="h-[300px] w-full">
            <img src={image} className='object-contain w-full h-full' alt="" />
        </div>
        <h1 className={`text-2xl ${theme === "light" ? "text-slate-900" : "text-slate-50"} font-semibold`}>{title}</h1>
        <h1 className={`text-lg ${theme === "light" ? "text-slate-900" : "text-slate-50"} font-semibold capitalize`}>{category}</h1>
        <p className={`line-clamp-3 ${theme === "light" ? "text-black" : "text-white"} opacity-65`}>{description}</p>
        <p className={`text-2xl ${theme === "light" ? "text-black" : "text-white"} font-semibold mt-auto`}>{price}$</p>
        <Link to={"/products/"+ id} className={`${theme === "light" ? "bg-black" : "bg-white"} ${theme === "light" ? "text-black" : "text-white"} rounded-md py-3 px-6 cursor-pointer transition-opacity hover:bg-black/85`}>Veiw Product</Link>
    </div>
  )
}

export default Card