import React from 'react'
import Header from '../Home/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../Home/Footer/Footer'

export default function Layout() {
  return (
    <div >
      <Header />
      <Outlet />
      <Footer />
   
    </div>
  )
}
