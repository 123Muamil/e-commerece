import React from 'react'
import Head from 'next/head'
import { ChooseUs, Footer, Navbar } from '../components'
import Service from './Service'
import Sidebar from '../pages/sidebar'
const Layout = ({ children }) => {

  return (
    <div>
      <Head>
        <title>Rafeed</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>

      <footer>
        <ChooseUs />
<Service/>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
