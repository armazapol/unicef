import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import ButtonLink from "../commons/button/ButtonLink";

type Props = {
  toggleViewQuest6: () => void;
};

const ModalQuest6 = ({ toggleViewQuest6}: Props) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".modal", { opacity: 0.1 }, { opacity: 1, duration: 1.5 });
    tl.fromTo(".component", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);
  return (
    <div
      className="h-screen w-full z-60 bg-black/60 flex items-center justify-center fixed modal"
      // onClick={toggleViewAntecedentes}
    >
      <Image
        className="object-cover"
        alt="background"
        src={background}
        placeholder="blur"
        fill
        quality={50}
      />
        <a
        onClick={toggleViewQuest6}
        className="cursor-pointer absolute right-4 top-4 lg:right-10 lg:top-10 text-white text-xl font-semibold "
      >
        <img className="w-4 lg:w-6" src="/img/closeModal.png" alt="" />
      </a>
      <div className="w-10/12 md:w-[40rem] bg-white flex flex-col gap-2 p-5 relative component rounded-md h-5/6 lg:h-auto overflow-x-hidden overflow-y-auto text-sm lg:text-base">
        <h2 className="font-semibold text-base lg:text-lg">¿Cuánto dura la protección de las vacunas contra la COVID-19?</h2>
        <p>
        Según la OMS, la eficacia de las vacunas contra la COVID-19 comienza a disminuir entre cuatro y seis meses después de completar la primera pauta de vacunación. Si hay vacunas disponibles, se recomienda recibir una dosis de refuerzo para mejorar la protección contra las enfermedades graves.
        </p>

      </div>
    </div>
  );
};

export default ModalQuest6;
