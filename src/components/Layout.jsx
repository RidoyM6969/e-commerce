import React from 'react'
import Menu from "../components/Menu"
import Search from '../components/Search' 
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
const Layout = () => {
  return (
    <>
        <Menu/>
        <Search/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout
