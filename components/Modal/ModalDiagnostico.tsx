import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import background from "../../public/img/bgModal.png";

type Props = {
  toggleViewDiagnostico: () => void;
};

const ModalDiagnostico = ({ toggleViewDiagnostico }: Props) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".modal", { opacity: 0.1 }, { opacity: 1, duration: 1.5 });
    tl.fromTo(".component", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);
  return (
    <div
      className="h-screen w-full z-60 bg-black/60 flex items-center justify-center fixed modal"
      // onClick={toggleViewDiagnostico}
    >
      <Image
        className="object-cover"
        alt="background"
        src={background}
        placeholder="blur"
        fill
        quality={50}
      />
      <div className="w-[40rem] bg-white flex flex-col gap-2 p-5 relative component rounded-md">
        <a
          onClick={toggleViewDiagnostico}
          className="cursor-pointer absolute -right-10 text-white text-xl font-semibold"
        >
            <img className="w-4 lg:w-6" src="/img/closeModal.png" alt="" />
        </a>
        <h2 className="font-semibold text-lg">Diagnóstico</h2>
        <p>
          En la mayoría de los casos se utiliza una prueba molecular para
          detectar el SARS-CoV-2 y confirmar la infección. La prueba molecular
          más frecuentemente utilizada es la de la reacción en cadena de la
          polimerasa (RCP). Las muestras se recogen en la nariz o la garganta
          con un hisopo. Las pruebas moleculares detectan el virus en la muestra
          amplificando su material genético hasta niveles que permiten su
          detección. Por ello, las pruebas moleculares se utilizan para
          confirmar una infección activa, por lo general a los pocos días de la
          exposición y en torno al momento en que puede que empiecen los
          síntomas. 
          <a
            className="underline hover:text-blue-500"
            href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/coronavirus-disease-covid-19"
            target="blank"
          >
            Información básica sobre la COVID-19 (who.int)
          </a>
        </p>
      </div>
    </div>
  );
};

export default ModalDiagnostico;
