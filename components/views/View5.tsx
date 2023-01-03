import React, { useEffect } from "react";
import Image from "next/image";
import Button from "../commons/button/Button";
import { gsap } from "gsap";
import img1 from "../../public/img/view1/img1.png";
import img2 from "../../public/img/view1/img2.jpg";
import img3 from "../../public/img/view1/img3.jpg";
import img4 from "../../public/img/view1/img4.jpg";
import img5 from "../../public/img/view1/img5.jpg";
import logo from "../../public/img/view1/logo.png";

type Props = {
  viewVideo: () => void;
  toggleViewImages: () => void;
  toggleViewVacunas: () => void;
  toggleViewInmunidadColectiva: () => void;
  toggleViewTiposVacunas: () => void;
  toggleViewInocuidadEfectividad: () => void;
  toggleViewEmbarazoLactancia: () => void;
  toggleViewEfectosSecundarios: () => void;
  toggleViewAvanceVacunacion: () => void;
  toggleViewConsecuencias: () => void;
  keyCarrousel: number;
  index: number;
  stateSide: string;
};

const View5 = ({
  viewVideo,
  toggleViewImages,
  toggleViewVacunas,
  toggleViewInmunidadColectiva,
  toggleViewTiposVacunas,
  toggleViewInocuidadEfectividad,
  toggleViewEmbarazoLactancia,
  toggleViewEfectosSecundarios,
  toggleViewAvanceVacunacion,
  toggleViewConsecuencias,
  keyCarrousel,
  index,
  stateSide,
}: Props) => {
  useEffect(() => {
    // console.log(keyCarrousel, index)
    if (keyCarrousel === index) {
      if (stateSide === "left") {
        gsap.fromTo(
          `.animate_logo${keyCarrousel}`,
          { x: "50%", opacity: 0 },
          { x: 0, opacity: 1, duration: 1.5, delay: 1.2 }
        );
        gsap.fromTo(
          `.animate_component${keyCarrousel}`,
          { x: "50%", opacity: 0 },
          { x: 0, opacity: 1, duration: 1.5, delay: 1.5 }
        );
      } else {
        gsap.fromTo(
          `.animate_logo${keyCarrousel}`,
          { x: "-50%", opacity: 0 },
          { x: 0, opacity: 1, duration: 1.5, delay: 1.2 }
        );
        gsap.fromTo(
          `.animate_component${keyCarrousel}`,
          { x: "-50%", opacity: 0 },
          { x: 0, opacity: 1, duration: 1.5, delay: 1.5 }
        );
      }
    }
  }, [index]);
  return (
    <div className="w-full h-screen grid grid-cols-4 grid-rows-4 gap-1 border-[0.25rem]">
      <div className="row-span-4 col-span-2 flex items-center justify-center bg-blue-500 relative ">
        <Image
          className="object-cover"
          alt="img1"
          src={img5}
          placeholder="blur"
          fill
          quality={50}
        />
        <div className="bg-blue-800/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700"></div>
        <div className="flex flex-col z-20 relative items-center  gap-5">
          {/* <div
            className={`w-20  lg:w-52 opacity-0 animate_logo${keyCarrousel}`}
          >
            <Image alt="logo" src={logo} placeholder="empty" />
          </div> */}
          <p
            className={`uppercase font-bold text-sm  lg:text-3xl py-1  lg:py-5 animate_logo${keyCarrousel}`}
          >
            MÓDULO X
          </p>
          <div
            className={` opacity-0 flex items-center flex-col animate_component${keyCarrousel}  `}
          >
            <div className=" ">
              {/* <p className="uppercase font-bold text-sm  lg:text-3xl py-1  lg:py-5">
                unicef para cada infancia
              </p> */}
              <div className="font_LatoRegular text-xs  lg:text-lg leading-tight bg-white/90 text-sky-500 p-4">
                <p>
                Conceptos Básicos sobre el SARS-Cov-2 
                </p>
              </div>
            </div>
            <div className="flex gap-10 mt-2 lg:mt-5">
              <a
                onClick={toggleViewVacunas}
                className="z-20"
              >
                <Button text="¿Cómo actuan las vacunas?" />
              </a>
              <a
                onClick={toggleViewInmunidadColectiva}
                className="z-20"
              >
              <Button text="Inmunidad Colectiva" />
              </a>
            </div>
            <div className="flex gap-10 mt-2 lg:mt-5">
            {/* <a
                onClick={toggleViewAvanceVacunacion}
                className="z-20"
              >
              <Button text="Avance de la vacunación" />
              </a> */}
              <a
                onClick={toggleViewEfectosSecundarios}
                className="z-20"
              >
              <Button text="Efectos secundarios" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row-span-2 col-span-2  bg-red-500">
        <div className="flex items-center justify-center  relative h-full">
          <Image
            className="object-cover"
            alt="img5"
            src={img3}
            placeholder="blur"
            fill
            quality={50}
          />
          <div className="bg-blue-800/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700 flex group items-start">
            {" "}
            <a
              onClick={toggleViewEmbarazoLactancia}
              className="z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 p-2"
            >
              <Button text="Embarazo y lactancia materna" />
            </a>
          </div>
        </div>
      </div>
      <div className="row-span-2  flex items-center justify-center bg-pink-500 relative">
        <Image
          className="object-cover"
          alt="img2"
          src={img4}
          placeholder="blur"
          fill
          quality={50}
        />
        <div className="bg-blue-800/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700 flex  group items-start">
          <a
            onClick={toggleViewTiposVacunas}
            className="z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 p-2"
          >
            <Button text="Tipos de Vacunas y Esquema de la vacunación." />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center bg-green-500 relative">
        <Image
          className="object-cover"
          alt="img3"
          src={img1}
          placeholder="blur"
          fill
          quality={50}
        />
        <div className="bg-blue-800/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700 flex group items-start">
          <a
            className="z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 p-2"
            onClick={toggleViewInocuidadEfectividad}
          >
            <Button text="Inocuidad y Efectividad de las vacunas" />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center bg-violet-500 relative">
        <Image
          className="object-cover"
          alt="img4"
          src={img2}
          placeholder="blur"
          fill
          quality={50}
        />
        <div className="bg-blue-800/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700 flex group items-start">
          {" "}
          <a
            onClick={toggleViewConsecuencias}
            className="z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 p-2"
          >
            <Button text="Consecuencias de las variantes en vacunas" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default View5;
