import React from "react";

import Image from "next/image";
import img2 from "../../public/img/videogames/babimaiki/img2.png";
import logo from "../../public/img/portfolio/cencosud/logo.png";
import Button from "../commons/button/Button";

const View16 = () => {
  return (
    <div>
      {" "}
      <Image alt="img1" src={img2} placeholder="blur" fill />
      <div className="flex flex-col z-20 relative items-center">
          <div className="w-52 ">
            <Image alt="logo" src={logo} placeholder="empty" />
          </div>
          <div className="">
            <p className="uppercase font_MilkyNiceClean text-2xl py-5">
             ¡rescata y cuida a los animales del mundo!
            </p>
            <div className="font_LatoRegular text-lg leading-tight">
              <p>
               Es un juego casual de aventura como ningún otro, con una gran variedad
              </p>
              <p>de mini juegos e interacciones de esta dupla que día a día buscan</p>
              <p>proteger a todo aquel animalito que se encuentre en peligro.</p>
            </div>
          </div>
          <div className="flex gap-10 mt-5">
            <Button text="Play" />
            <Button text="Compartir" />
          </div>
        </div>
    </div>
  );
};

export default View16;
