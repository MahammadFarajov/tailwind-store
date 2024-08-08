import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './products'
import Homepages from './pages/home'
import Layout from "./Layout"
import About from './pages/about'
import Contacts from './pages/contacts'
import SingleProduct from './components/single-product'

export default function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route path='/home' element={<Homepages/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/products/:productId' element={<SingleProduct/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
              </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}