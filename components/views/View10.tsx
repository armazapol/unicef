import React from 'react'
import Image from "next/image";
import img1 from "../../public/img/products/3devents/img1.png";
import logo from "../../public/img/products/3devents/logo.png";
import Button from "../commons/button/Button";

const View10 = () => {
  return (
    <div>
        <Image alt="img1" src={img1} placeholder="blur" fill />
        <div className="flex flex-col z-20 relative items-center">
          <div className="w-52 ">
            <Image alt="logo" src={logo} placeholder="empty" />
          </div>
          <div className="">
            <p className="uppercase font_MilkyNiceClean text-2xl py-5">
             eventos virtuales 3d
            </p>
            <div className="font_LatoRegular text-lg leading-tight">
              <p>
                Una herramienta potente para la venta, rueda de negocios,
              </p>
              <p>
                conferencias y seminarios, e incluso actividades corporativas
              </p>
              <p>de recreación, capacitación y congregación.</p>
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

export default View10