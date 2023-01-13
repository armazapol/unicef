import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import ButtonLink from "../commons/button/ButtonLink";

type Props = {
  toggleViewQuest1: () => void;
};

const ModalQuest1 = ({ toggleViewQuest1 }: Props) => {
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
      <div className="w-[40rem] bg-white flex flex-col gap-2 p-5 relative component rounded-md">
        <a
          onClick={toggleViewQuest1}
          className="cursor-pointer absolute -right-10 text-white text-xl font-semibold"
        >
            <img className="w-4 lg:w-6" src="/img/closeModal.png" alt="" />
        </a>
        <h2 className="font-semibold text-lg">¿Cuánto tiempo tardan en aparecer los síntomas?</h2>
        <p>
        El tiempo entre la exposición a la COVID-19 y el momento en que comienzan los síntomas es, de media, de 5 o 6 días, pero puede variar entre 1 y 14 días. Por ello se recomienda que las personas que hayan estado expuestas al virus se queden en casa, alejadas de otras personas, durante 14 días, con el fin de prevenir la propagación del virus, especialmente cuando no es fácil hacerse una prueba.
        </p>
      </div>
    </div>
  );
};

export default ModalQuest1;
