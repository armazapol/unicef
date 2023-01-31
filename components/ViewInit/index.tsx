import React, { useEffect } from "react";
import { gsap } from "gsap";
import icono from "../../public/img/icono.png";
import logo from "../../public/img/logo.png";
import Image from "next/image";

import background from "../../public/img/bgModal.png";

type Props = {
  keyCarrousel: number;
  index: number;
  toggleViewInit:()=>void;
  stateSide: string;
};

const ViewInit = ({ keyCarrousel, index, stateSide,toggleViewInit }: Props) => {
  //ref

  useEffect(() => {
    // console.log(keyCarrousel, index)
    if (keyCarrousel === index) {
      if (stateSide === "left") {
        gsap.fromTo(
          ".animate_background",
          { backgroundPosition: `40%` },
          { backgroundPosition: 0, duration: 2 }
        );
      } else {
        gsap.fromTo(
          ".animate_background",
          { backgroundPosition: `-40%` },
          { backgroundPosition: 0, duration: 2 }
        );
      }
    }
    if (keyCarrousel + 1 === index) {
      gsap.to(".animate_background", {
        backgroundPosition: "10%",
        duration: 2,
      });
    }
    if (keyCarrousel - 1 === index) {
      gsap.to(".animate_background", {
        backgroundPosition: "10%",
        duration: 2,
      });
    }
  }, [index]);

  return (
    <div
      className={`w-full h-screen flex items-center justify-center z-10 bg-fixed bg-no-repeat animate_background relative`}
    >
      {/* {isLoading && <Loading text="Cargando.." />} */}
      <Image
        className="object-cover"
        alt="background"
        src={background}
        placeholder="blur"
        fill
      />
      <div className="absolute right-5 top-0 w-28 lg:w-52">
        <Image className="" alt="quest" src={logo} placeholder="blur" />
      </div>
      <div className="z-20 w-10/12 lg:w-[60rem] flex flex-col gap-3 lg:gap-5 items-center">
        {/* <div className="relative w-2/12 lg:w-3/12">
          <Image className="" alt="quest" src={icono} placeholder="blur" />
        </div> */}
        <h1 className=" text-2xl lg:text-5xl text-white font-bold third_color text-left w-full ">
          <p className="leading-snug">CURSO INTERACTIVO</p>
          <p className="leading-snug"> <span className="text-white">COVID-19</span> Y <span className="text-white">VACUNAS</span> </p>
          <p className="leading-snug">PARA LOS <span className="text-white">MEDIOS DE COMUNICACIÓN</span> </p>
        
        </h1>
        <p className="text-sm  lg:text-2xl font-semibold text-left">
          Curso auto formativo, asíncrono, de naturaleza teórica, que brinda
          conocimientos básicos sobre la COVID-19, la vacunación actualizado,
          dirigido al personal que labora en los distintos medios de
          comunicación en el país.
        </p>
        <div className='bg-blue-900 rounded-md py-2 px-12 text-white font-bold text-md  lg:text-3xl cursor-pointer z-20 shadow-md shadow-black' onClick={toggleViewInit}>Iniciar</div>
      </div>
    </div>
  );
};

export default ViewInit;
