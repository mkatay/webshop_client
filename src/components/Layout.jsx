import React from 'react'
import { Outlet } from 'react-router'
import { Header } from './Header'

export const Layout = () => {
  return (
    <div className='min-h-screen'>
      <Header />
        <main className="max-w-7xl mx-auto p-6">
        <Outlet />
      </main>

    </div>
  )
}

