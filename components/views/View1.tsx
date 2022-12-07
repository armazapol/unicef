import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import img1 from "../../public/img/view1/img1.png";
import img2 from "../../public/img/view1/img2.png";
import img3 from "../../public/img/view1/img3.png";
import img4 from "../../public/img/view1/img4.png";
import logo from "../../public/img/view1/logo.png";
import Button from "../commons/button/Button";
// import video from '../../public/img/view1/video.mp4';
// import img5 from '../../public/img/view1/img1.png';

type Props = {
  viewVideo: () => void;
  toggleViewImages: () => void;
  keyCarrousel: number;
  index: number;
  stateSide: string;
};

const View1 = ({
  viewVideo,
  toggleViewImages,
  keyCarrousel,
  index,
  stateSide,
}: Props) => {
  useEffect(() => {
    // console.log(keyCarrousel, index)
    if (keyCarrousel === index) {
      if (stateSide === "left") {
        gsap.fromTo(
          ".animate_logo",
          { x: "50%", opacity: 0 },
          { x: 0, opacity: 1, duration: 1.5, delay: 1.2 }
        );
        gsap.fromTo(
          ".animate_component",
          { x: "50%", opacity: 0 },
          { x: 0, opacity: 1, duration: 1.5, delay: 1.5 }
        );
      } else {
        gsap.fromTo(
          ".animate_logo",
          { x: "-50%", opacity: 0 },
          { x: 0, opacity: 1, duration: 1.5, delay: 1.2 }
        );
        gsap.fromTo(
          ".animate_component",
          { x: "-50%", opacity: 0 },
          { x: 0, opacity: 1, duration: 1.5, delay: 1.5 }
        );
      }
    }
  }, [index]);
  return (
    <div className="w-full h-screen grid grid-cols-3 grid-rows-3 z-20">
      <div className="row-span-2 col-span-2 flex items-center justify-center  relative">
        <Image className="object-cover" alt="img1" src={img1} placeholder="blur" fill />
        <div className="bg-black/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700"></div>
        <div className="flex flex-col z-20 relative items-center  ">
          <div className="w-20  lg:w-52 opacity-0 animate_logo">
            <Image alt="logo" src={logo} placeholder="empty" />
          </div>
          <div className="animate_component opacity-0 flex items-center flex-col">
            <div className=" ">
              <p className="uppercase font_MilkyNiceClean text-sm  lg:text-2xl py-1  lg:py-5">
                curso lúdico a modo de videojuego.
              </p>
              <div className="font_LatoRegular text-xs  lg:text-lg leading-tight">
                <p>
                  Creamos el personaje Salva y mini-juegos ligados a la política
                </p>
                <p>
                  de salvaguarda y canales de atención al cuidado de los niños,{" "}
                </p>
                <p>niñas y adolescentes.</p>
              </div>
            </div>
            <div className="flex gap-10 mt-2 lg:mt-5">
              <Button text="Play" />
              <Button text="Compartir" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-start-3 row-span-3 grid grid-rows-2">
        <div className="flex items-center justify-center  relative">
          <Image className="object-cover" alt="img2" src={img2} placeholder="blur" fill />
          <div className="bg-black/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700"></div>
          <a onClick={toggleViewImages} className="z-20">
            <Button text="Galería de Fotos" />
          </a>
        </div>
        <div className="flex items-center justify-center  relative">
          <video
            className="h-full w-full object-cover "
            autoPlay
            loop
            muted
            // poster="/video/particulas.mp4"
          >
            <source src="/img/view1/video.mp4" type="video/mp4" />
          </video>
          <div className="bg-black/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700"></div>
        </div>
      </div>
      <div className="flex items-center justify-center  relative">
        <Image className="object-cover" alt="img3" src={img3} placeholder="blur" fill />
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
        <Image className="object-cover" alt="img2" src={img4} placeholder="blur" fill />
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

export default View1;
