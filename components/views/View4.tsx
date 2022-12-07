import React from 'react'
import Image from "next/image";
import img5 from "../../public/img/portfolio/mdcc/img5.png";
import logo from "../../public/img/portfolio/mdcc/logo.png";
import Button from "../commons/button/Button";

const View4 = () => {
  return (
    <div>
        <Image alt="img1" src={img5} placeholder="blur" fill />
        <div className="flex flex-col z-20 relative items-center">
          <div className="w-52 ">
            <Image alt="logo" src={logo} placeholder="empty" />
          </div>
          <div className="">
            <p className="uppercase font_MilkyNiceClean text-2xl py-5">
             web interactiva
            </p>
            <div className="font_LatoRegular text-lg leading-tight">
              <p>
                El proyecto trata el cuidado ambiental de las playas en
              </p>
              <p>
                donde, se puede aprender del trabajo colaborativo con
              </p>
              <p>las comunidades y sus niños para preservar las costas.</p>
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

export default View4