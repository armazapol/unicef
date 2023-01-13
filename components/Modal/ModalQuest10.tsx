import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import ButtonLink from "../commons/button/ButtonLink";

type Props = {
  toggleViewQuest10: () => void;
};

const ModalQuest10 = ({ toggleViewQuest10 }: Props) => {
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
          onClick={toggleViewQuest10}
          className="cursor-pointer absolute -right-10 text-white text-xl font-semibold"
        >
          <img className="w-4 lg:w-6" src="/img/closeModal.png" alt="" />
        </a>
        <h2 className="font-semibold text-lg">
          ¿Pueden las vacunas de la COVID-19 afectar tu ADN?
        </h2>
        <p>
          No, ninguna de las vacunas de la COVID-19 afecta a tu ADN ni
          interactúa con él en modo alguno. Las vacunas de ARN mensajero (o
          ARNm) enseñan a las células a fabricar una proteína que desencadena
          una respuesta inmunitaria en el organismo. Esta respuesta hace que se
          produzcan los anticuerpos que te mantienen protegido contra el virus.
          El ARNm es distinto al ADN, y permanece dentro de la célula solo
          durante unas 72 horas, tras lo cual se degrada. Pero nunca penetra en
          el núcleo de la célula, donde se aloja el ADN.
        </p>
      </div>
    </div>
  );
};

export default ModalQuest10;
