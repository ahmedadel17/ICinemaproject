import React from 'react'
import {Sidebar} from '../components'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <main className='bg-dark'>
      <Sidebar />

      <section className="p-8 bg-lightGray min-h-screen lg:ml-64 dark:bg-darkGray">
        <Outlet />
      </section>
    </main>
  )
}

export default RootLayout