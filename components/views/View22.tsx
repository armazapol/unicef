import React from "react";

import Image from "next/image";
import img4 from "../../public/img/videogames/sami/img4.png";
import logo from "../../public/img/videogames/sami/logo.png";
import Button from "../commons/button/Button";

const View22 = () => {
  return (
    <div>
      {" "}
      <Image alt="img1" src={img4} placeholder="blur" fill />
      <div className="flex flex-col z-20 relative items-center">
          <div className="w-80 ">
            <Image alt="logo" src={logo} placeholder="empty" />
          </div>
          <div className="">
            <p className="uppercase font_MilkyNiceClean text-2xl py-5">
           juego de bienestar emocional
            </p>
            <div className="font_LatoRegular text-lg leading-tight">
              <p>
             Sami es la exploración del potencial de los videojuegos no solo
              </p>
              <p>
              para el entretenimiento sino para acercar al jugador temas como
              </p>
              <p>el bienestar emocional y la salud mental.</p>
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

export default View22;
