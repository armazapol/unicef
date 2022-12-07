import React from "react";
import Image from "next/image";
import { gsap } from "gsap";
import img1 from "../../public/img/portfolio/mdcc/img1.png";
import img2 from "../../public/img/portfolio/mdcc/img2.png";
import img3 from "../../public/img/portfolio/mdcc/img3.png";
import img4 from "../../public/img/portfolio/mdcc/img4.png";
import img5 from "../../public/img/portfolio/mdcc/img5.png";
import logo from "../../public/img/portfolio/mdcc/logo.png";
import Button from "../commons/button/Button";
// import video from '../../public/img/view1/video.mp4';
// import img5 from '../../public/img/view1/img1.png';

type Props = {
  viewVideo: () => void;
  toggleViewImages: () => void;
};

const View3 = ({ viewVideo, toggleViewImages }: Props) => {
  return (
    <div className="w-full h-screen grid grid-cols-3 grid-rows-3 z-20">
      <div className="row-span-2 col-span-2 flex items-center justify-center  relative">
        <Image alt="img1" src={img5} placeholder="blur" fill />
        <div className="bg-black/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700"></div>
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
      <div className="col-start-3 row-span-3 grid grid-rows-2">
        <div className="flex items-center justify-center  relative">
          <Image alt="img2" src={img1} placeholder="blur" fill />
          <div className="bg-black/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700"></div>
          <a onClick={toggleViewImages} className="z-20">
            <Button text="Galería de Fotos" />
          </a>
        </div>
        <div className="flex items-center justify-center  relative">
        <Image alt="img5" src={img4} placeholder="blur" fill />
          <div className="bg-black/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700"></div>
        </div>
      </div>
      <div className="flex items-center justify-center  relative">
        <Image alt="img3" src={img2} placeholder="blur" fill />
        <div className="bg-black/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700 flex items-center justify-center  group">
          <a
            onClick={viewVideo}
            className="z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 "
          >
            <Button text="Ver Video" />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center  relative">
        <Image alt="img2" src={img3} placeholder="blur" fill />
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
    </div>
  );
};

export default View3;
