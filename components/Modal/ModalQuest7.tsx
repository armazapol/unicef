import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import ButtonLink from "../commons/button/ButtonLink";

type Props = {
  toggleViewQuest7: () => void;
};

const ModalQuest7 = ({ toggleViewQuest7 }: Props) => {
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
          onClick={toggleViewQuest7}
          className="cursor-pointer absolute -right-10 text-white text-xl font-semibold"
        >
          <img className="w-4 lg:w-6" src="/img/closeModal.png" alt="" />
        </a>
        <h2 className="font-semibold text-lg">
          Estoy embarazada. ¿Puedo vacunarme contra la COVID-19?
        </h2>
        <p>
          Sí, puedes vacunarte si estás embarazada. Durante el embarazo, las
          mujeres que contraen la COVID-19 corren más riesgo de enfermar de
          gravedad y de sufrir un parto prematuro. Muchas mujeres de todo el
          mundo se han vacunado contra la COVID-19 durante el embarazo o la
          lactancia, y no se ha identificado ningún problema relacionado con su
          seguridad o la de sus bebés. Vacunarse durante el embarazo ayuda a
          proteger al bebé. Si necesitas más información sobre la vacuna contra
          la COVID-19 durante el embarazo, habla con tu doctor.
        </p>
      </div>
    </div>
  );
};

export default ModalQuest7;
