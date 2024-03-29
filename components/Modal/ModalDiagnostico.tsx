import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import ButtonLink from "../commons/button/ButtonLink";
import img1 from "../../public/img/view1/newModal1.png";

type Props = {
  toggleViewDiagnostico: () => void;
  nextViewModule: () => void;
};

const ModalDiagnostico = ({ toggleViewDiagnostico, nextViewModule }: Props) => {

  const nextModule = () => {
    nextViewModule()
    toggleViewDiagnostico()
  }


  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".modal", { opacity: 0.1 }, { opacity: 1, duration: 1.5 });
    tl.fromTo(".component", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);
  return (
    <div
      className="fullvh lg:h-screen w-full z-60 bg-black/60 flex items-center justify-center fixed modal"
      // onClick={toggleViewDiagnostico}
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
        onClick={toggleViewDiagnostico}
        className="cursor-pointer absolute right-4 top-4 lg:right-10 lg:top-10 text-white text-xl font-semibold z-50"
      >
        <img className="w-4 lg:w-6" src="/img/closeModal.png" alt="" />
      </a>
      <div className="w-10/12 md:w-[55rem] bg-white flex  gap-2 p-5 lg:p-10 relative component rounded-md h-5/6 lg:h-auto overflow-x-hidden overflow-y-auto">
        <div className="flex-1 overflow-y-auto">
          <h2 className="font-semibold text-base lg:text-lg">Diagnóstico</h2>
          <p className="text-sm lg:text-base">
            En la mayoría de los casos se utiliza una prueba molecular para detectar el <span className="text-orange-600">SARS-CoV-2</span> y confirmar la infección. La prueba molecular más utilizada es la de la Reacción en Cadena de la Polimerasa (RCP). Las muestras se recogen en la nariz o la garganta con un hisopo. Las pruebas moleculares detectan el virus en la muestra amplificando su material genético hasta niveles que permiten su detección. Por ello, las pruebas moleculares se utilizan para confirmar una infección activa, por lo general, a los pocos días de la exposición y en torno al momento en que empiecen los síntomas. 
          </p>
          <div>
            <h3 className="font-semibold">Fuentes:</h3>
            <a
              className="hover:underline hover:text-blue-500 text-sm block"
              href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/coronavirus-disease-covid-19"
              target="blank"
            >
              1. Información básica sobre la COVID-19 (who.int)
            </a>
          </div>
        </div>
        <div className="relative flex-1">
          <Image
            className="object-cover rounded-md"
            alt="img1"
            src={img1}
            placeholder="blur"
            fill
            quality={50}
          />
          <a
            onClick={() => window.open("/img/view1/newModal1.png")}
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
  );
};

export default ModalDiagnostico;
