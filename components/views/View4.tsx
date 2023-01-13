import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import img1 from "../../public/img/view1/img1.png";
import img2 from "../../public/img/view1/img2.jpg";
import img3 from "../../public/img/view1/img3.jpg";
import img4 from "../../public/img/view1/img4.jpg";
import img5 from "../../public/img/view1/img5.jpg";
import img7 from "../../public/img/view1/img7.png";
import logo from "../../public/img/view1/logo.png";
import Button from "../commons/button/Button";
// import video from '../../public/img/view1/video.mp4';

type Props = {
  toggleViewQuest1: () => void;
  toggleViewQuest2: () => void;
  toggleViewQuest3: () => void;
  toggleViewQuest4: () => void;
  toggleViewQuest5: () => void;
  toggleViewQuest6: () => void;
  toggleViewQuest7: () => void;
  toggleViewQuest8: () => void;
  toggleViewQuest9: () => void;
  toggleViewQuest10: () => void;
  keyCarrousel: number;
  index: number;
  stateSide: string;
};

const View4 = ({
  toggleViewQuest1,
  toggleViewQuest2,
  toggleViewQuest3,
  toggleViewQuest4,
  toggleViewQuest5,
  toggleViewQuest6,
  toggleViewQuest7,
  toggleViewQuest8,
  toggleViewQuest9,
  toggleViewQuest10,
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
    <div className="w-full h-screen grid grid-cols-3 grid-rows-3 z-20 gap-1 border-[0.25rem] ">
      <div className="row-span-2 col-span-2 flex items-center justify-center  relative">
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
            MÓDULO 4
          </p>
          <div
            className={` opacity-0 flex items-center flex-col animate_component${keyCarrousel}  `}
          >
            <div className=" ">
              {/* <p className="uppercase font-bold text-sm  lg:text-3xl py-1  lg:py-5">
                unicef para cada infancia
              </p> */}
              <div className="font_LatoRegular text-xs  lg:text-lg leading-tight bg-white/90 text-sky-500 p-4">
                <p>Preguntas más frecuentes </p>
              </div>
            </div>
            <div className="flex gap-10 mt-2 lg:mt-5">
              <a onClick={toggleViewQuest1} className="z-20 ">
                <Button text="¿Cuánto tiempo tardan en aparecer los síntomas?" />
              </a>
              <a onClick={toggleViewQuest2} className="z-20 ">
                <Button text="¿Son eficaces los antibióticos para prevenir o tratar la COVID-19?" />
              </a>
            </div>
            <div className="flex gap-10 mt-2 lg:mt-5">
              <a onClick={toggleViewQuest3} className="z-20 ">
                <Button text="¿Debería vacunarme si ya he pasado la COVID-19?" />
              </a>
              <a onClick={toggleViewQuest4} className="z-20 ">
                <Button text="¿Son seguras las vacunas contra la COVID-19?" />
              </a>
            </div>
            <div className="flex gap-10 mt-2 lg:mt-5">
              <a onClick={toggleViewQuest5} className="z-20 ">
                <Button text="¿Puedo dejar de tomar precauciones después de haberme vacunado?" />
              </a>
              <a onClick={toggleViewQuest9} className="z-20 ">
                <Button text="¿Pueden los zapatos propagar el virus de la COVID-19?" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-start-3 row-span-3 grid grid-rows-2 gap-1">
        <div className="flex items-center justify-center  relative">
          <Image
            className="object-cover"
            alt="img2"
            src={img3}
            placeholder="blur"
            fill
            quality={50}
          />
          <div className="bg-blue-800/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700 flex  group items-start">
            <a
              onClick={toggleViewQuest6}
              className="z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 p-2"
            >
              <Button text="¿Cuánto dura la protección de las vacunas contra la COVID-19?" />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center  relative">
          <Image
            className="object-cover"
            alt="img5"
            src={img1}
            placeholder="blur"
            fill
            quality={50}
          />
          <div className="bg-blue-800/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700 flex group items-start">
            <a
              className="z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 p-2"
              onClick={toggleViewQuest7}
            >
              <Button text="Estoy embarazada. ¿Puedo vacunarme contra la COVID-19?" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  relative">
        <Image
          className="object-cover"
          alt="img2"
          src={img2}
          placeholder="blur"
          fill
          quality={50}
        />
        <div className="bg-blue-800/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700 flex  group items-start">
          <a
            onClick={toggleViewQuest8}
            className="z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 p-2"
          >
            <Button text="¿Pueden las vacunas contra la COVID-19 afectar la fertilidad?" />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center  relative">
        <Image
          className="object-cover"
          alt="img2"
          src={img4}
          placeholder="blur"
          fill
          quality={50}
        />
        <div className="bg-blue-800/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700 flex items-start group ">
          <a
            onClick={toggleViewQuest10}
            className="z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 p-2 flex-none"
          >
            <Button text="¿Pueden las vacunas de la COVID-19 afectar tu ADN?" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default View4;
