import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const RouterLayout = () => {
  return (
    <>
    <header>
        <Navbar/>
    </header>
    <main>
        <Outlet />
    </main>
    <Footer/>
    </>
  )
}

export default RouterLayout
