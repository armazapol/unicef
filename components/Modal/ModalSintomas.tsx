import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import img1 from "../../public/img/view1/img7.png";

type Props = {
  toggleViewSintomas: () => void;
};

const ModalSintomas = ({ toggleViewSintomas }: Props) => {
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
      <div className="w-[60rem] flex flex-col gap-2 p-5 relative component rounded-md">
        <a
          onClick={toggleViewSintomas}
          className="cursor-pointer absolute -right-10 text-white text-xl font-semibold"
        >
            <img className="w-4 lg:w-6" src="/img/closeModal.png" alt="" />
        </a>
        <div className="full ">
                <Image
                  className="object-cover"
                  alt="img1"
                  src={img1}
                  placeholder="blur"
                  quality={50}
                />
              </div>
      </div>
    </div>
  );
};

export default ModalSintomas;
