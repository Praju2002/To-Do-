import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './nav_bar'

function Rootlayout() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <footer>I am footer</footer>
    </>
  )
}

export default Rootlayout