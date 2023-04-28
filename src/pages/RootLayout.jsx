import React from 'react'
import {Sidebar} from '../components'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <main className='bg-lightGray dark:bg-darkGray'>
      <Sidebar />

      <section className="p-8 min-h-screen lg:ml-64">
        <Outlet />
      </section>
    </main>
  )
}

export default RootLayout