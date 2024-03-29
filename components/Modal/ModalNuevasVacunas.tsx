import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import close from "../../public/img/closeModal.png";
import img1 from "../../public/img/view3/nuevasVacunas/img1.png";
import img2 from "../../public/img/view3/nuevasVacunas/img2.png";
import img3 from "../../public/img/view3/nuevasVacunas/img4.jpg";
import ButtonLink from "../commons/button/ButtonLink";

type Props = {
  toggleViewNuevasVacunas: () => void;
  nextViewModule: () => void;
};

const ModalNuevasVacunas = ({
  toggleViewNuevasVacunas,
  nextViewModule,
}: Props) => {
  const nextModule = () => {
    nextViewModule();
    toggleViewNuevasVacunas();
  };

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
        <img
          className="w-4 lg:w-8"
          src="/img/arrowNext.png"
          alt="Siguiente módulo"
        />
      </a>
      <a
        onClick={toggleViewNuevasVacunas}
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
            <div className="w-10/12 lg:w-[55rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex gap-2 p-5 lg:p-20 relative component rounded-md overflow-auto">
              <div className="flex-1 overflow-y-auto">
                <h3 className="text-base lg:text-xl text-center font-semibold">
                  Nuevas vacunas incluidas
                </h3>
                <div className="text-left flex flex-col gap-2">
                  <p>
                    Este año, mediante Resolución Ministerial N°884-2022/MINSA
                    se aprobó la NTS N° 196 -MINSA/DGIESP-2022 “Norma Técnica de
                    Salud que establece el Esquema Nacional de Vacunación”,
                    donde se incrementan a 18 el número de vacunas disponibles,
                    en la que se ha incorporado la de Hepatitis A. Se ha
                    actualizado también el esquema de la vacuna contra el Virus
                    del Papiloma Humano (VPH).
                  </p>
                </div>
              </div>
              <div className="relative flex-1">
                <Image
                  className="object-cover rounded-md"
                  alt="img1"
                  src={img3}
                  placeholder="blur"
                  fill
                  quality={50}
                />
                <a
                  onClick={() => window.open("/img/view3/img4.jpg")}
                  className="absolute left-5 bottom-5 z-20 cursor-pointer"
                >
                  <img
                    className="w_loop hidden lg:block"
                    src="/img/lupa.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
            <h3 className="text-base lg:text-xl text-center font-semibold text-white">
              El esquema actualizado para el menor de 5 años es el siguiente:
            </h3>
            <div className="w-44 lg:w-[30rem] relative group">
              <Image
                className="object-cover"
                alt="img2"
                src={img1}
                placeholder="blur"
                quality={50}
              />
              <a
                onClick={() => window.open("/img/view3/nuevasVacunas/img1.png")}
                className="cursor-pointer absolute left-5 bottom-5 text-white text-xl font-semibold hidden group-hover:block"
              >
                <img
                  className="w_loop hidden lg:block "
                  src="/img/lupa.png"
                  alt=""
                />
              </a>
            </div>
            {/* <div className="w-44 lg:w-[30rem] relative group">
                <Image
                  className="object-cover"
                  alt="img3"
                  src={img3}
                  placeholder="blur"
                  quality={50}
                />
                <a
                  onClick={() => window.open("/img/view3/nuevasVacunas/img3.png")}
                  className="cursor-pointer absolute left-5 bottom-5 text-white text-xl font-semibold hidden group-hover:block"
                >
                  <img
                    className="w_loop hidden lg:block "
                    src="/img/lupa.png"
                    alt=""
                  />
                </a>
              </div> */}
          </div>
          <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
            <h3 className="text-base lg:text-xl text-center font-semibold text-white">
              El esquema actualizado para el mayor de 5 años es el siguiente:
            </h3>
            <div className="w-40 lg:w-[25rem] relative group">
              <Image
                className="object-cover"
                alt="img2"
                src={img2}
                placeholder="blur"
                quality={50}
              />
              <a
                onClick={() => window.open("/img/view3/nuevasVacunas/img2.png")}
                className="cursor-pointer absolute left-5 bottom-5 text-white text-xl font-semibold hidden group-hover:block"
              >
                <img
                  className="w_loop hidden lg:block "
                  src="/img/lupa.png"
                  alt=""
                />
              </a>
            </div>
            <p className="underline hover:text-blue-500 text-white text-sm">
              <span className="font-semibold"> Fuente: </span>
              <a
                href="https://busquedas.elperuano.pe/normaslegales/aprueban-la-nts-n-196-minsadgiesp-2022-norma-tecnica-de-resolucion-ministerial-no-884-2022minsa-2122942-1/"
                target="blank"
              >
                NTS N 196-MINSA/DGIESP-2022 NORMA TÉCNICA DE SALUD QUE ESTABLECE
                EL ESQUEMA NACIONAL DE VACUNACIÓN
              </a>
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ModalNuevasVacunas;
