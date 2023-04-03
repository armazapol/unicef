import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import close from "../../public/img/closeModal.png";
import img1 from "../../public/img/view3/esquemaVacunacionRegular/img1.png";
import img2 from "../../public/img/view3/esquemaVacunacionRegular/img2.png";
import ButtonLink from "../commons/button/ButtonLink";

type Props = {
  toggleViewEsquemaVacunacionRegular: () => void;
  nextViewModule: () => void;
};

const ModalEsquemaVacunacionRegular = ({ toggleViewEsquemaVacunacionRegular, nextViewModule }: Props) => {

  const nextModule = () => {
    nextViewModule()
    toggleViewEsquemaVacunacionRegular()
  }

  const handleChildElementClick = (e: any) => {
    e.stopPropagation();
    // Do other stuff here
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".modal", { opacity: 0.1 }, { opacity: 1, duration: 1.5 });
    tl.fromTo(".img", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);
  return (
    <div
      className="fullvh lg:h-screen w-full z-60 bg-black/60 flex items-center justify-center fixed modal"
      // onClick={toggleViewAlarmaPrevencion}
    >
      <Image
        className="object-cover"
        alt="background"
        src={background}
        placeholder="blur"
        fill
        // quality={50}
      />
        <a
        onClick={nextModule}
        className="cursor-pointer absolute right-14 top-4 lg:right-20 lg:top-9 text-white text-xl font-semibold "
      >
        <img className="w-4 lg:w-8" src="/img/arrowNext.png" alt="Siguiente módulo" />
      </a>
    <a
        onClick={toggleViewEsquemaVacunacionRegular}
        className="cursor-pointer absolute right-4 top-4 lg:right-10 lg:top-10 text-white text-xl font-semibold z-50"
      >
        <img className="w-4 lg:w-6" src="/img/closeModal.png" alt="" />
      </a>
        {/* <h3 className="text-white text-xl text-center font-semibold">Aislamiento y Prevención del Riesgo:</h3> */}
        <div
          className="flex img gap-2 w-full h-auto xl:w-[70rem] items-center justify-center relative"
          onClick={(e) => handleChildElementClick(e)}
        >
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            infiniteLoop={true}
            autoPlay={false}
            stopOnHover={false}
            swipeable={false}
            renderArrowPrev={(onClickHandler, hasNext, label) =>
              hasNext && (
                <div
                  className="absolute z-10 cursor-pointer top-[calc(50%-1.25rem)] lg:top-[calc(50%-1.8rem)] left-1 lg:left-2 w-10 lg:w-14"
                  onClick={onClickHandler}
                >
                  <img src="/img/arrow.png" className="rotate-180" />
                </div>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <div
                className="absolute z-10 cursor-pointer top-[calc(50%-1.25rem)] lg:top-[calc(50%-1.8rem)] right-1 lg:right-2 w-10 lg:w-14"
                onClick={onClickHandler}
                >
                  <img src="/img/arrow.png" className="" />
                </div>
              )
            }
            className="  w-full h-full relative carousel1"
          >
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-7/12 lg:w-[50rem] relative group">
                <Image
                  className="object-cover"
                  alt="img2"
                  src={img1}
                  placeholder="blur"
                  quality={50}
                />
                <a
                  onClick={() => window.open("/img/view3/esquemaVacunacionRegular/img1.png")}
                  className="cursor-pointer absolute left-5 bottom-5 text-white text-xl font-semibold hidden group-hover:block"
                >
                  <img
                    className="w_loop hidden lg:block "
                    src="/img/lupa.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-40 lg:w-[50rem] relative group">
                <Image
                  className="object-cover"
                  alt="img2"
                  src={img2}
                  placeholder="blur"
                  quality={50}
                />
                <a
                  onClick={() => window.open("/img/view3/esquemaVacunacionRegular/img2.png")}
                  className="cursor-pointer absolute left-5 bottom-5 text-white text-xl font-semibold hidden group-hover:block"
                >
                  <img
                    className="w_loop hidden lg:block "
                    src="/img/lupa.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
        
       
          </Carousel>
       
        </div>
  
    </div>
  );
};

export default ModalEsquemaVacunacionRegular;
