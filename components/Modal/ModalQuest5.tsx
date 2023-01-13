import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import ButtonLink from "../commons/button/ButtonLink";

type Props = {
  toggleViewQuest5: () => void;
};

const ModalQuest5 = ({ toggleViewQuest5 }: Props) => {
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
          onClick={toggleViewQuest5}
          className="cursor-pointer absolute -right-10 text-white text-xl font-semibold"
        >
            <img className="w-4 lg:w-6" src="/img/closeModal.png" alt="" />
        </a>
        <h2 className="font-semibold text-lg">¿Puedo dejar de tomar precauciones después de haberme vacunado?</h2>
        <p>
        Sigue tomando precauciones para protegerte y proteger a tu familia y a tus amigos si todavía hay casos de COVID-19 en tu zona, incluso después de haberte vacunado. Las vacunas contra la COVID-19 son muy eficaces contra la enfermedad grave y la muerte, pero ninguna vacuna es un 100% eficaz.  
        </p>
        <p>
        Las vacunas ofrecen menos protección contra la infección de la variante ómicron, que es ahora la variante dominante a nivel mundial, pero siguen siendo muy eficaces para prevenir la hospitalización, la enfermedad grave y la muerte. Además de la vacunación, sigue siendo importante seguir practicando medidas de seguridad para protegerte a ti mismo y a los demás. 
        </p>

      </div>
    </div>
  );
};

export default ModalQuest5;
