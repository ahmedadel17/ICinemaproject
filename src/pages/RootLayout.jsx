import React from 'react'
import {Sidebar} from '../components'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <main>
      <Sidebar />

      <section className="p-8 bg-lightGray lg:ml-64 dark:bg-darkGray">
        <Outlet />
      </section>
    </main>
  )
}

export default RootLayout