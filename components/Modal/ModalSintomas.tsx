import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import img1 from "../../public/img/view1/img7.png";

type Props = {
  toggleViewSintomas: () => void;
  nextViewModule: () => void;
};

const ModalSintomas = ({ toggleViewSintomas, nextViewModule }: Props) => {

  const nextModule = () => {
    nextViewModule()
    toggleViewSintomas()
  }
  
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".modal", { opacity: 0.1 }, { opacity: 1, duration: 1.5 });
    tl.fromTo(".component", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  return (
    <div
      className="fullvh lg:h-screen w-full z-60 bg-black/60 flex items-center justify-center fixed modal"
      // onClick={toggleViewAntecedentes}
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
        onClick={toggleViewSintomas}
        className="cursor-pointer absolute right-4 top-4 lg:right-10 lg:top-10 text-white text-xl font-semibold z-50"
      >
        <img className="w-4 lg:w-6" src="/img/closeModal.png" alt="" />
      </a>
      <div className="w-7/12 lg:w-[60rem] flex flex-col gap-2 p-5 lg:p-10 relative component rounded-md ">
        <div className=" relative group ">
          <Image
            className="object-cover"
            alt="img1"
            src={img1}
            placeholder="blur"
            quality={50}
          />
          <a
            onClick={() => window.open("/img/view1/img7.png")}
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

export default ModalSintomas;
