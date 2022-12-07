import React from "react";

import Image from "next/image";
import img2 from "../../public/img/videogames/mathlines/img2.png";
import logo from "../../public/img/videogames/mathlines/logo.png";
import Button from "../commons/button/Button";

const View20 = () => {
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
            ¡Las matemáticas son divertidas!
            </p>
            <div className="font_LatoRegular text-lg leading-tight">
              <p>
             Es un videojuego que une lo mejor de los puzzles con los juegos
              </p>
              <p>
                lógico-matemáticos. El jugador deberá resolver operaciones
              </p>
              <p>matemáticas, hacer uso de boosters y poderes, y sortear los</p>
              <p>cientos de niveles en su viaje a través del espacio.</p>
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

export default View20;
