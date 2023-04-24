import React from 'react'
import {Sidebar} from '../components'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <main>
      <Sidebar />

      <section className="p-8 lg:ml-64">
        <Outlet />
      </section>
    </main>
  )
}

export default RootLayout