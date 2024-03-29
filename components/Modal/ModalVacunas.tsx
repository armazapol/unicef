import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import img1 from "../../public/img/view2/vacunas/img1.png";
import img2 from "../../public/img/view2/newModal1.png";
import img3 from "../../public/img/view2/newModal2.png";

type Props = {
  toggleViewVacunas: () => void;
  nextViewModule: () => void;
};

const ModalVacunas = ({ toggleViewVacunas, nextViewModule }: Props) => {

  const nextModule = () => {
    nextViewModule()
    toggleViewVacunas()
  }

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
      className="fullvh lg:h-screen w-full z-60 bg-black/60 flex items-center justify-center fixed modal"
      // onClick={toggleViewVacunas}
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
        onClick={toggleViewVacunas}
        className="cursor-pointer absolute right-4 top-4 lg:right-10 lg:top-10 text-white text-xl font-semibold z-50"
      >
        <img className="w-4 lg:w-6" src="/img/closeModal.png" alt="" />
      </a>
 
        {/* <h3 className="text-white text-xl text-center font-semibold">Aislamiento y Prevención del Riesgo:</h3> */}
        <div
          className="flex img gap-2 w-full h-auto xl:w-[70rem] items-center justify-center relative"
          onClick={(e) => handleChildElementClick(e)}
        >
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            infiniteLoop={true}
            autoPlay={false}
            stopOnHover={false}
            swipeable={false}
            renderArrowPrev={(onClickHandler, hasNext, label) =>
              hasNext && (
                <div
                  className="absolute z-10 cursor-pointer top-[calc(50%-1.25rem)] lg:top-[calc(50%-1.8rem)] left-1 lg:left-2 w-10 lg:w-14"
                  onClick={onClickHandler}
                >
                  <img src="/img/arrow.png" className="rotate-180" />
                </div>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <div
                className="absolute z-10 cursor-pointer top-[calc(50%-1.25rem)] lg:top-[calc(50%-1.8rem)] right-1 lg:right-2 w-10 lg:w-14"
                onClick={onClickHandler}
                >
                  <img src="/img/arrow.png" className="" />
                </div>
              )
            }
            className="  w-full h-full relative carousel1"
          >
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
            <div className="w-10/12 lg:w-[50rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex gap-2 p-5 lg:p-20 relative component rounded-md overflow-auto">
                <div className="flex-1 overflow-y-auto">
                  <h3 className="text-base lg:text-xl text-center font-semibold">
                    ¿Cómo actúan las vacunas?
                  </h3>
                  <div className="text-sm lg:text-base text-left flex flex-col gap-2">
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
                <div className="relative flex-1">
                  <Image
                    className="object-cover rounded-md"
                    alt="img1"
                    src={img2}
                    placeholder="blur"
                    fill
                    quality={50}
                  />
                  <a
                    onClick={() => window.open("/img/view2/newModal1.png")}
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
            <div className=" flex items-center justify-center  relative  h-full gap-5">
            <div className="w-10/12 lg:w-[50rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex gap-2 p-5 lg:p-20 relative component rounded-md overflow-auto">
                <div className="flex-1 overflow-y-auto text-left">
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
                  <p className="text-sm">
                    <span className="font-semibold"> Fuente: </span>
                    <a
                      className="underline hover:text-blue-500 text-black"
                      href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/covid-19-vaccines"
                      target="blank"
                    >
                      ¿Cómo actúan las vacunas? (who.int)
                    </a>{" "}
                  </p>
                </div>
                <div className="relative flex-1">
                  <Image
                    className="object-cover rounded-md"
                    alt="img1"
                    src={img3}
                    placeholder="blur"
                    fill
                    quality={50}
                  />
                  <a
                    onClick={() => window.open("/img/view2/newModal2.png")}
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
          </Carousel>
        </div>
  
    </div>
  );
};

export default ModalVacunas;
