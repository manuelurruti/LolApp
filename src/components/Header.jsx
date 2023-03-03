import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../pages/HomePage.css"
import "./Header.css"

export const Header = () => {
  return (
    <div className='backGroundColor'>


      <Link to={"/"} style={{ textDecoration: 'none' }}> <h1 className='d-flex justify-content-center p-3 font'>League of legends</h1></Link>




      <Outlet />
    </div>

  )
}
