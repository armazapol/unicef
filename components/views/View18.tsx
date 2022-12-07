import React from "react";

import Image from "next/image";
import img1 from "../../public/img/videogames/orquestita/img1.png";
// import logo from "../../public/img/portfolio/cencosud/logo.png";
import Button from "../commons/button/Button";

const View18 = () => {
  return (
    <div>
      {" "}
      <Image alt="img1" src={img1} placeholder="blur" fill />
      <div className="flex flex-col z-20 relative items-center">
          {/* <div className="w-52 ">
            <Image alt="logo" src={logo} placeholder="empty" />
          </div> */}
          <div className="">
            <p className="uppercase font_MilkyNiceClean text-2xl py-5">
           juego para aprender a tocar música
            </p>
            <div className="font_LatoRegular text-lg leading-tight">
              <p>
                La Orquestita es un proyecto transmedia que celebra la música
              </p>
              <p>
               y busca enseñar sobre ella. A todos nos encantan las canciones,
              </p>
              <p>pero ¿de qué están hechas? ¿Por quénos hacen sentir así?</p>
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

export default View18;
