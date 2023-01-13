import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import close from "../../public/img/closeModal.png";
import img1 from "../../public/img/view3/nuevasVacunas/img1.png";
import img2 from "../../public/img/view3/nuevasVacunas/img2.png";
import img3 from "../../public/img/view3/nuevasVacunas/img3.png";
import ButtonLink from "../commons/button/ButtonLink";

type Props = {
  toggleViewNuevasVacunas: () => void;
};

const ModalNuevasVacunas = ({ toggleViewNuevasVacunas }: Props) => {
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
      className="h-screen w-full z-60 bg-black/60 flex items-center justify-center fixed modal"
      // onClick={toggleViewAlarmaPrevencion}
    >
      <Image
        className="object-cover"
        alt="background"
        src={background}
        placeholder="blur"
        fill
        quality={50}
      />
      <div className="flex flex-col gap-5">
        {/* <h3 className="text-white text-xl text-center font-semibold">Aislamiento y Prevención del Riesgo:</h3> */}
        <div
          className="flex img gap-2 w-10/12 h-auto xl:w-[70rem] items-center justify-center relative"
          onClick={(e) => handleChildElementClick(e)}
        >
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay={false}
            stopOnHover={false}
            className="  w-full h-full relative carousel1"
          >
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-[40rem] bg-white flex flex-col gap-2 p-5 relative component rounded-md">
                <h3 className=" text-xl text-center font-semibold">
                Nuevas vacunas incluidas
                </h3>
                <div className="text-left flex flex-col gap-2">
                  <p>
                  Este año, mediante Resolución Ministerial N°884-2022/MINSA se aprobó la NTS N° 196 -MINSA/DGIESP-2022 “Norma Técnica de Salud que establece el Esquema Nacional de Vacunación”, donde se incrementan el número de vacunas disponibles en el Esquema nacional, a 18 vacunas, con la incorporación de la vacuna contra la Hepatitis A, además de actualizar el esquema de la vacuna contra el Virus del papiloma humano (VPH). 
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <h3 className=" text-xl text-center font-semibold text-white">
              El esquema actualizado para el menor de 5 años es el siguiente:
              </h3>
              <div className="w-[30rem] relative group">
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
              <div className="w-[30rem] relative group">
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
              </div>
            </div>
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <h3 className=" text-xl text-center font-semibold text-white">
              El esquema actualizado para el mayor de 5 años es el siguiente: 
              </h3>
              <div className="w-[25rem] relative group">
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
              <p className="underline hover:text-blue-500 text-white text-xs">
                <span className="font-semibold"> Fuente: </span>
                <a
                  href="https://busquedas.elperuano.pe/normaslegales/aprueban-la-nts-n-196-minsadgiesp-2022-norma-tecnica-de-resolucion-ministerial-no-884-2022minsa-2122942-1/"
                  target="blank"
                >
                  NTS N 196-MINSA/DGIESP-2022 NORMA TÉCNICA DE SALUD QUE ESTABLECE EL ESQUEMA 	NACIONAL DE VACUNACIÓN
                </a>
              </p>
            </div>
        
           
          </Carousel>
          <a
            onClick={toggleViewNuevasVacunas}
            className="cursor-pointer absolute top-0 -right-5 text-white text-xl font-semibold"
          >
            <img className="w-4 lg:w-6" src="/img/closeModal.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalNuevasVacunas;
