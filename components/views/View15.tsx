import React from "react";
import Image from "next/image";
import Button from "../commons/button/Button";
import img1 from "../../public/img/videogames/babimaiki/img1.jpg";
import img2 from "../../public/img/videogames/babimaiki/img2.png";
import img3 from "../../public/img/videogames/babimaiki/img3.png";
import img4 from "../../public/img/videogames/babimaiki/img4.png";
import img5 from "../../public/img/videogames/babimaiki/img5.jpg";
import logo from "../../public/img/products/trivia/logo.png";

type Props = {
  viewVideo: () => void;
  toggleViewImages: () => void;
};

const View15 = ({ viewVideo, toggleViewImages }: Props) => {
  return (
    <div className="w-full h-screen grid grid-cols-12 grid-rows-3 ">
      <div className="row-span-2 col-span-7 flex items-center justify-center bg-blue-500 relative">
      <Image alt="img1" src={img2} placeholder="blur" fill />
        <div className="bg-black/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700"></div>
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
      <div className="row-span-2 col-span-5 flex items-center justify-center bg-red-500 relative">
      <Image alt="img5" src={img3} placeholder="blur" fill />
          <div className="bg-black/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700"></div>
          <a onClick={toggleViewImages} className="z-20">
            <Button text="Galería de Fotos" />
          </a>
      </div>
      <div className="col-span-4  flex items-center justify-center bg-pink-500 relative">
      <Image alt="img2" src={img4} placeholder="blur" fill />
        <div className="bg-black/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700 flex items-center justify-center  group">
          <a
            onClick={viewVideo}
            className="z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 "
          >
            <Button text="Ver Video" />
          </a>
        </div>
      </div>
      <div className="col-span-4 flex items-center justify-center bg-green-500 relative">
      <Image alt="img3" src={img5} placeholder="blur" fill />
        <div className="bg-black/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700 flex items-center justify-center  group">
          <a
            className="z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 "
            href="https://www.google.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Button text="Web" />
          </a>
        </div>
      </div>
      <div className="col-span-4 flex items-center justify-center bg-violet-500 relative">
      <Image className="" alt="img4" src={img1} placeholder="blur" fill />
        <div className="bg-black/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700 flex items-center justify-center  group" />
      </div>
    </div>
  );
};

export default View15;
