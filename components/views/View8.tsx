import React from 'react'
import Image from "next/image";
import img3 from "../../public/img/portfolio/cashgenious/img3.png";
import logo from "../../public/img/portfolio/cashgenious/logo.png";
import Button from "../commons/button/Button";

const View8 = () => {
  return (
    <div>
        <Image alt="img1" src={img3} placeholder="blur" fill />
        <div className="flex flex-col z-20 relative items-center">
          <div className="w-52 ">
            <Image alt="logo" src={logo} placeholder="empty" />
          </div>
          <div className="">
            <p className="uppercase font_MilkyNiceClean text-2xl py-5">
           juego educativo y publicitario
            </p>
            <div className="font_LatoRegular text-lg leading-tight">
              <p>
                Worl Vision Perú nos encargó diseñar y digitalizar en
              </p>
              <p>
               {'web y móviles 2 juegos de mesa "Genio del Cash y"'} 
              </p>
              <p>{'"Retos de los emprendedores".'} </p>
            </div>
          </div>
          <div className="flex gap-10 mt-5">
            <Button text="Play" />
            <Button text="Compartir" />
          </div>
        </div>
    </div>
  )
}

export default View8