import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import img1 from "../../public/img/view2/avancevacunacion/img1.png";
import background from "../../public/img/bgModal.png";

type Props = {
  toggleViewAvanceVacunacion: () => void;
};

const ModalAvanceVacunacion = ({ toggleViewAvanceVacunacion }: Props) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".modal", { opacity: 0.1 }, { opacity: 1, duration: 1.5 });
    tl.fromTo(".component", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);
  return (
    <div
      className="h-screen w-full z-60 bg-black/60 flex items-center justify-center fixed modal"
      // onClick={toggleViewAvanceVacunacion}
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
          onClick={toggleViewAvanceVacunacion}
          className="cursor-pointer absolute -right-10 text-white text-xl font-semibold"
        >
          <img className="w-4 lg:w-6" src="/img/closeModal.png" alt="" />
        </a>
        <h2 className="font-semibold text-lg">Avance vacunación</h2>
        <p>
          El avance de la vacunación puede revisarse y consultarse en tiempo
          real en la página del Repositorio único Nacional de Información en
          Salud del Ministerio de Salud, donde se observa que tanto la primera
          dosis como la segunda llegan a una cobertura mayor al 90%,
          disminuyendo en la tercera dosis (73.71%) y aún más en la cobertura de
          la cuarta dosis (24.46%).
        </p>
        <div className="">
          <Image
            className="object-cover"
            alt="img1"
            src={img1}
            placeholder="blur"
            quality={50}
          />
        </div>
        <p>
          Fuente:{" "}
          <a
            className="underline hover:text-blue-500 text-black"
            href="https://www.minsa.gob.pe/reunis/data/vacunas-covid19.asp"
            target="blank"
          >
            Repositorio Único Nacional de Información en Salud - Ministerio de
            Salud (minsa.gob.pe)
          </a>
        </p>
      </div>
    </div>
  );
};

export default ModalAvanceVacunacion;
