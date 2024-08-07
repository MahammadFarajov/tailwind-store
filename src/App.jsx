import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './products'
import Homepages from './pages/home'
import Layout from "./Layout"

export default function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route path='/home' element={<Homepages/>}/>
                <Route path='/products' element={<Products/>}/>
              </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
