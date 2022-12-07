import React from "react";

import Image from "next/image";
import img1 from "../../public/img/videogames/animautas/img1.png";
import logo from "../../public/img/products/trivia/logo.png";
import Button from "../commons/button/Button";

const View14 = () => {
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
             aprender de manera divertida
            </p>
            <div className="font_LatoRegular text-lg leading-tight">
              <p>
                Los Animanautas son amigos que crean e imaginan
              </p>
              <p>
             juegos geniales para aprender. Su búsqueda por nunca
              </p>
              <p>parar de conocer los lleva a que cada rincón sea una</p>
              <p>nueva aventura.</p>
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

export default View14;
