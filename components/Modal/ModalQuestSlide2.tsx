import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import img2 from "../../public/img/view4/quest/quest2.jpg";
import img4 from "../../public/img/view4/quest/quest4.jpg";
import img3 from "../../public/img/view4/quest/quest2.jpg";//cambiar

type Props = {
  toggleViewQuestSlide2: () => void;
};

const ModalQuestSlide2 = ({ toggleViewQuestSlide2 }: Props) => {
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
      // onClick={toggleViewAlarmaPrevencion}
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
        onClick={toggleViewQuestSlide2}
        className="cursor-pointer absolute right-4 top-4 lg:right-10 lg:top-10 text-white text-xl font-semibold z-50"
      >
        <img className="w-4 lg:w-6" src="/img/closeModal.png" alt="" />
      </a>
      {/* <div className="flex flex-col gap-5"> */}
      {/* <h3 className="text-white text-xl text-center font-semibold">Aislamiento y Prevención del Riesgo:</h3> */}
      <div
        className="flex img gap-2 w-full h-auto xl:w-[70rem] items-center justify-center relative"
        onClick={(e) => handleChildElementClick(e)}
      >
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
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
          className="  w-full h-full relative carousel1 "
        >
          <div className=" flex items-center justify-center  relative h-full gap-5">
            <div className="w-10/12 lg:w-[50rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex gap-2 p-5 relative component rounded-md overflow-auto">
              <div className="flex-1 overflow-y-auto">
                <h3 className="text-base lg:text-xl text-center font-semibold">
                  ¿Son eficaces los antibióticos para prevenir o tratar la
                  COVID-19?
                </h3>
                <div className="text-sm lg:text-base text-left flex flex-col gap-2">
                  <p>
                    Los antibióticos no son eficaces contra los virus, solo
                    funcionan contra las infecciones bacterianas. La COVID-19
                    está causada por un virus, de modo que los antibióticos no
                    sirven. No se deben usar antibióticos como medio de
                    prevención o tratamiento de la COVID-19.
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
                  onClick={() => window.open("/img/view4/quest/quest2.jpg")}
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
          <div className=" flex items-center justify-center  relative h-full gap-5">
            <div className="w-10/12 lg:w-[60rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex gap-2 p-5 relative component rounded-md overflow-auto">
              <div className="flex-1 overflow-y-auto">
                <h3 className="text-base lg:text-xl text-center font-semibold">
                  ¿Son seguras las vacunas contra la COVID-19?
                </h3>
                <div className="text-sm lg:text-base text-left flex flex-col gap-2">
                  <p>
                    Sí, las vacunas contra la COVID-19 se han utilizado de
                    manera segura para vacunar a miles de millones de personas.
                    Las vacunas contra la COVID-19 se produjeron con la mayor
                    rapidez posible, pero debieron pasar por pruebas rigurosas
                    en los ensayos clínicos para demostrar que cumplían con los
                    criterios internacionales de referencia sobre seguridad y
                    eficacia. Las vacunas solo pueden recibir la validación de
                    la OMS y de los organismos normativos del país si satisfacen
                    estas normas.
                  </p>
                </div>
              </div>
              <div className="relative flex-1">
                <Image
                  className="object-cover rounded-md"
                  alt="img4"
                  src={img4}
                  placeholder="blur"
                  fill
                  quality={50}
                />
                <a
                  onClick={() => window.open("/img/view4/quest/quest4.jpg")}
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
      {/* </div> */}
    </div>
  );
};

export default ModalQuestSlide2;
