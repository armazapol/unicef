import React from "react";
import Image from "next/image";
import Button from "../commons/button/Button";
import img1 from "../../public/img/products/trivia/img1.png";
import img2 from "../../public/img/products/trivia/img2.png";
import img3 from "../../public/img/products/trivia/img3.png";
import img4 from "../../public/img/products/trivia/img4.png";
// import img5 from "../../public/img/products/trivia/img5.png";
import img6 from "../../public/img/products/trivia/img6.png";
import logo from "../../public/img/products/trivia/logo.png";

type Props = {
  viewVideo: () => void;
  toggleViewImages: () => void;
};

const View11 = ({ viewVideo, toggleViewImages }: Props) => {
  return (
    <div className="w-full h-screen grid grid-cols-4 grid-rows-4">
      <div className="row-span-4 col-span-2 flex items-center justify-center bg-blue-500 relative">
        <Image alt="img1" src={img3} placeholder="blur" fill />
        <div className="bg-black/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700"></div>
        <div className="flex flex-col z-20 relative items-center">
          <div className="w-52 ">
            <Image alt="logo" src={logo} placeholder="empty" />
          </div>
          <div className="">
            <p className="uppercase font_MilkyNiceClean text-2xl py-5">
              trivia multiplayer
            </p>
            <div className="font_LatoRegular text-lg leading-tight">
              <p>Para entrenar la mente y poner a prueba tus conocimientos.</p>
            </div>
          </div>
          <div className="flex gap-10 mt-5">
            <Button text="Play" />
            <Button text="Compartir" />
          </div>
        </div>
      </div>
      <div className="row-span-2 col-span-2  bg-red-500">
        <div className="flex items-center justify-center  relative h-full">
          <Image alt="img5" src={img2} placeholder="blur" fill />
          <div className="bg-black/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700"></div>
          <a onClick={toggleViewImages} className="z-20">
            <Button text="Galería de Fotos" />
          </a>
        </div>
      </div>
      <div className="row-span-2  flex items-center justify-center bg-pink-500 relative">
        <Image alt="img2" src={img6} placeholder="blur" fill />
        <div className="bg-black/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700 flex items-center justify-center  group">
          <a
            onClick={viewVideo}
            className="z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 "
          >
            <Button text="Ver Video" />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center bg-green-500 relative">
        <Image alt="img3" src={img4} placeholder="blur" fill />
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
      <div className="flex items-center justify-center bg-violet-500 relative">
        <Image className="" alt="img4" src={img1} placeholder="blur" fill />
        <div className="bg-black/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700 flex items-center justify-center  group" />
      </div>
    </div>
  );
};

export default View11;
