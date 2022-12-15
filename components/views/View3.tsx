import React, {useEffect} from "react";
import Image from "next/image";
import { gsap } from "gsap";
import img1 from "../../public/img/view1/img1.png";
import img2 from "../../public/img/view1/img2.jpg";
import img3 from "../../public/img/view1/img3.jpg";
import img4 from "../../public/img/view1/img4.jpg";
import img5 from "../../public/img/view1/img5.jpg";
import logo from "../../public/img/portfolio/mdcc/logo.png";
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

const View3 = ({
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
    <div className="w-full h-screen grid grid-cols-3 grid-rows-3 z-20">
      <div className="row-span-2 col-span-2 flex items-center justify-center  relative">
        <Image className="object-cover" alt="img1" src={img5} placeholder="blur" fill  quality={50} />
        <div className="bg-black/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700"></div>
        <div className="flex flex-col z-20 relative items-center  ">
          {/* <div className={`w-20  lg:w-52 opacity-0 animate_logo${keyCarrousel}`}>
            <Image alt="logo" src={logo} placeholder="empty" />
          </div> */}
          <p
            className={`uppercase font-bold text-sm  lg:text-3xl py-1  lg:py-5 animate_logo${keyCarrousel}`}
          >
            unicef para cada infancia
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
                  UNICEF es conocido por la labor que realiza para la infancia
                  en
                </p>
                <p>
                  cualquier contexto y en cualquier lugar del mundo; porque
                  salva
                </p>
                <p>
                  vidas, protege los derechos de los niños y los adolescentes y
                  les
                </p>
                <p>ayuda a desarrollar su potencial.</p>
              </div>
            </div>
            <div className="flex gap-10 mt-2 lg:mt-5">
              <Button text="Play" />
              {/* <Button text="Compartir" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="col-start-3 row-span-3 grid grid-rows-2">
        <div className="flex items-center justify-center  relative">
          <Image className="object-cover" alt="img2" src={img1} placeholder="blur" fill  quality={50} />
          <div className="bg-black/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700"></div>
          <a onClick={toggleViewImages} className="z-20">
            <Button text="Galería" />
          </a>
        </div>
        <div className="flex items-center justify-center  relative">
        <Image className="object-cover" alt="img5" src={img4} placeholder="blur" fill  quality={50} />
          <div className="bg-black/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700"></div>
        </div>
      </div>
      <div className="flex items-center justify-center  relative">
        <Image className="object-cover" alt="img3" src={img2} placeholder="blur" fill  quality={50} />
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
        <Image className="object-cover" alt="img2" src={img3} placeholder="blur" fill  quality={50} />
        <div className="bg-black/30 absolute z-10 w-full h-full hover:bg-transparent transition-all duration-700 flex items-center justify-center  group">
          <a
            className="z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 "
            href="https://www.unicef.org/peru/"
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
