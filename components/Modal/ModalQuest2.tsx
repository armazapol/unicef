import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import ButtonLink from "../commons/button/ButtonLink";

type Props = {
  toggleViewQuest2: () => void;
};

const ModalQuest2 = ({ toggleViewQuest2 }: Props) => {
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
          onClick={toggleViewQuest2}
          className="cursor-pointer absolute -right-10 text-white text-xl font-semibold"
        >
            <img className="w-4 lg:w-6" src="/img/closeModal.png" alt="" />
        </a>
        <h2 className="font-semibold text-lg">¿Son eficaces los antibióticos para prevenir o tratar la COVID-19?</h2>
        <p>
        Los antibióticos no son eficaces contra los virus, solo funcionan contra las infecciones bacterianas. La COVID-19 está causada por un virus, de modo que los antibióticos no sirven. No se deben usar antibióticos como medio de prevención o tratamiento de la COVID-19.
        </p>
      </div>
    </div>
  );
};

export default ModalQuest2;
