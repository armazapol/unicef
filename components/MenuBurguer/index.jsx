import React, { useState } from 'react'
import Hamburger from "hamburger-react";

const MenuBurguer = ({stateHamburger,toggleMenu}) => {

    
 
  return (
    <div
    className="absolute -bottom-14 -right-14 lg:-bottom-20 lg:-right-20 bg-blue-900 rounded-full w-32 h-32 lg:w-40  lg:h-40 text-white cursor-pointer z-50"
    onClick={toggleMenu}
  >
    <div className="absolute top-5 left-4 lg:top-7 lg:left-6 ">
      <Hamburger toggled={stateHamburger} />
    </div>
  </div>
  )
}

export default MenuBurguer