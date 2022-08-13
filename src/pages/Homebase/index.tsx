import React from 'react'
import { Outlet } from 'react-router'

const Homebase = () => {
  return (
    <div className='homebase'>
      <Outlet />
    </div>
  )
}

export default Homebase
