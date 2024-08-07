import React from 'react'

function Card({title, description, image, price, category}) {
  return (
    <div className='border rounded-xl py-4 px-3 flex gap-2 flex-col'>
        <div className="h-[300px] w-full">
            <img src={image} className='object-contain w-full h-full' alt="" />
        </div>
        <h1 className='text-2xl text-slate-900 font-semibold'>{title}</h1>
        <h1 className='text-lg text-slate-900 font-semibold'>{category}</h1>
        <p className='line-clamp-3 opacity-65'>{description}</p>
        <p className='text-2xl font-semibold mt-auto'>{price}$</p>
        <button className='bg-black text-white rounded-md py-3 px-6 cursor-pointer mt-auto transition-opacity hover:bg-black/85'>Veiw Product</button>
    </div>
  )
}

export default Card