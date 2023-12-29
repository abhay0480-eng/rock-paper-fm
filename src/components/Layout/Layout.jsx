import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const Layout = () => {
  return (
    <div className='flex flex-col justify-center max-w-4xl mx-auto h-screen p-10'>
    <Header/>
    <main className='flex-1 relative'>
    <Outlet/>
    </main>
    <Footer/>
    </div>
  )
}

export default Layout