import React, { useEffect, useState } from 'react'
import Card from '../../components/card'
import axios from 'axios'

export default function Homepages() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res => {
      setProducts(res.data)
    }))
  })
  return (
    <div className='mx-auto max-w-[90%] w-full grid grid-cols-3 mt-5 gap-3'>
      {products && products.map((product) => <Card key={product.id} {...product} />)}
    </div>
  )
}