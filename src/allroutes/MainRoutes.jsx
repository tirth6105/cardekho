import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import AddProduct from '../pages/AddProduct'
import Book from '../pages/Book'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/add_product' element={<AddProduct/>}/>
        <Route path='/Book' element={<Book/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign' element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes