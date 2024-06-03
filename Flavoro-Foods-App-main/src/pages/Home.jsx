import React from 'react'
import { Navbar } from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import { FoodItems } from '../components/FoodItems'
import Cart from '../components/Cart'

export const Home = () => {
  return (
    <div>
      <Navbar/>  
      <CategoryMenu/>
      <FoodItems/>
      <Cart/>
    </div>
  )
}
