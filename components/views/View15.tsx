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
  keyCarrousel: number;
  index: number;
  stateSide: string;
};

const View15 = ({
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
    <div className="w-full h-screen grid grid-cols-12 grid-rows-3 gap-1 border-[0.25rem]">
      <div className="row-span-2 col-span-7 flex items-center justify-center bg-blue-500 relative">
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
            M??DULO X
          </p>
          <div
            className={` opacity-0 flex items-center flex-col animate_component${keyCarrousel}  `}
          >
            <div className=" ">
              <div className="font_LatoRegular text-xs  lg:text-lg leading-tight bg-white/90 text-sky-500 p-4">
                <p>
                Conceptos B??sicos sobre el SARS-Cov-2 
                </p>
              </div>
            </div>
            <div className="flex gap-10 mt-2 lg:mt-5">
              <Button text="Play" />
              {/* <Button text="Compartir" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="row-span-2 col-span-5 flex items-center justify-center bg-red-500 relative">
        <Image
          className="object-cover"
          alt="img5"
          src={img3}
          placeholder="blur"
          fill
          quality={50}
        />
        <div className="bg-blue-800/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700 group items-start flex">
          {" "}
          <a
            onClick={toggleViewImages}
            className="z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 p-2"
          >
            <Button text="Galer??a" />
          </a>
        </div>
      </div>
      <div className="col-span-4  flex items-center justify-center bg-pink-500 relative">
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
            onClick={viewVideo}
            className="z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 p-2"
          >
            <Button text="Ver Video" />
          </a>
        </div>
      </div>
      <div className="col-span-4 flex items-center justify-center bg-green-500 relative">
        <Image
          className="object-cover"
          alt="img3"
          src={img2}
          placeholder="blur"
          fill
          quality={50}
        />
        <div className="bg-blue-800/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700 flex group items-start">
          <a
            className="z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 p-2"
            href="https://www.unicef.org/peru/"
            target="_blank"
            rel="noreferrer"
          >
            <Button text="Web" />
          </a>
        </div>
      </div>
      <div className="col-span-4 flex items-center justify-center bg-violet-500 relative">
        <Image
          className="object-cover"
          alt="img4"
          src={img1}
          placeholder="blur"
          fill
        />
        <div className="bg-blue-800/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700 flex items-center justify-center  group items-start" />
      </div>
    </div>
  );
};

export default View15;
