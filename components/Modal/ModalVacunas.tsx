import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import img1 from "../../public/img/view2/vacunas/img1.png";

type Props = {
  toggleViewVacunas: () => void;
};

const ModalVacunas = ({ toggleViewVacunas }: Props) => {
  const handleChildElementClick = (e: any) => {
    e.stopPropagation();
    // Do other stuff here
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".modal", { opacity: 0.1 }, { opacity: 1, duration: 1.5 });
    tl.fromTo(".img", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);
  return (
    <div
      className="h-screen w-full z-60 bg-black/60 flex items-center justify-center fixed modal"
      // onClick={toggleViewVacunas}
    >
      <Image
        className="object-cover"
        alt="background"
        src={background}
        placeholder="blur"
        fill
        quality={50}
      />
      <div className="flex flex-col gap-5">
        {/* <h3 className="text-white text-xl text-center font-semibold">Aislamiento y Prevención del Riesgo:</h3> */}
        <div
          className="flex img gap-2 w-10/12 h-auto xl:w-[70rem] items-center justify-center relative"
          onClick={(e) => handleChildElementClick(e)}
        >
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay={false}
            stopOnHover={false}
            className="  w-full h-full relative carousel1"
          >
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-[40rem] bg-white flex flex-col gap-2 p-5 relative component rounded-md">
                <h3 className=" text-xl text-center font-semibold">
                  ¿Cómo actúan las vacunas?
                </h3>
                <div className="text-left flex flex-col gap-2">
                  <p>
                    Un patógeno es una bacteria, un virus, un parásito o un
                    hongo que puede causar enfermedad. Cada patógeno consta de
                    varias partes, por lo general exclusivas de ese patógeno
                    específico y de la enfermedad que causa. La parte de un
                    patógeno que provoca la formación de anticuerpos se llama
                    antígeno. Los anticuerpos producidos en respuesta al
                    antígeno del patógeno son una parte importante del sistema
                    inmunitario.
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-[40rem] bg-white flex flex-col gap-2 p-5 relative component rounded-md">
                <div className="text-left flex flex-col gap-2">
                  <p>
                    Las vacunas contienen partes atenuadas o inactivadas de un
                    organismo específico (antígeno) que provoca una respuesta
                    inmunitaria en el cuerpo. Las vacunas más recientes
                    contienen las ‘instrucciones’ para producir antígenos, en
                    lugar del antígeno en sí mismo. Independientemente de que la
                    vacuna contenga el antígeno o las instrucciones para que el
                    cuerpo lo produzca, esa versión atenuada no provocará la
                    enfermedad en la persona vacunada, pero inducirá al sistema
                    inmunitario a responder como lo hubiese hecho en su primera
                    reacción ante el patógeno real.
                  </p>
                  <p className="text-xs">
                  <span className="font-semibold"> Fuente:{" "}</span> 
                    <a
                      className="underline hover:text-blue-500 text-black"
                      href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/covid-19-vaccines"
                      target="blank"
                    >
                      ¿Cómo actúan las vacunas? (who.int)
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
          <a
            onClick={toggleViewVacunas}
            className="cursor-pointer absolute top-0 -right-5 text-white text-xl font-semibold"
          >
              <img className="w-4 lg:w-6" src="/img/closeModal.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalVacunas;
