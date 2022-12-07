import React from "react";

import Image from "next/image";
import img1 from "../../public/img/portfolio/cencosud/img1.png";
import logo from "../../public/img/portfolio/cencosud/logo.png";
import Button from "../commons/button/Button";

const View6 = () => {
  return (
    <div>
      {" "}
      <Image alt="img1" src={img1} placeholder="blur" fill />
      <div className="flex flex-col z-20 relative items-center">
        <div className="w-52 ">
          <Image alt="logo" src={logo} placeholder="empty" />
        </div>
        <div className="">
            <p className="uppercase font_MilkyNiceClean text-2xl py-5">
              videojuego de aventura espacial
            </p>
            <div className="font_LatoRegular text-lg leading-tight">
              <p>
                Mecánicas y escenarios diseñados en base a actividades reales,
              </p>
              <p>
               fortalecer lo aprendido por los colaboradores de Cencosud, en
              </p>
              <p>las inducciones que realizaron para capacitarse.</p>
            </div>
          </div>
        <div className="flex gap-10 mt-5">
          <Button text="Ver Video" />
          <Button text="Compartir" />
        </div>
      </div>
    </div>
  );
};

export default View6;
