import React from 'react'
import { Outlet } from 'react-router-dom'
import "../pages/HomePage.css"
import "./Header.css"

export const Header = () => {
  return (
    <div className='backGroundColor'>


      <h1 className='d-flex justify-content-center p-3 font'>League of legends</h1>




      <Outlet />
    </div>

  )
}
