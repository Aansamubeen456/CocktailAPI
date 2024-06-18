import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

const HomeLayout = () => {
  const navigation = useNavigation()
  const loading = navigation.state === 'loading'
  return (
    <>
      <Navbar />
      <section className="page">
        {loading ? <div className="loading" /> : <Outlet />}
      </section>
    </>
  )
}

export default HomeLayout
