import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import img8 from "../../public/img/view4/quest/quest8.jpg";
import img9 from "../../public/img/view4/quest/quest9.jpg";
import img11 from "../../public/img/view4/quest/quest11.jpg";

type Props = {
  toggleViewQuestSlide3: () => void;
};

const ModalQuestSlide3 = ({ toggleViewQuestSlide3 }: Props) => {
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
        onClick={toggleViewQuestSlide3}
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
                ¿Pueden las vacunas contra la COVID-19 afectar la fertilidad?
                </h3>
                <div className="text-sm lg:text-base text-left flex flex-col gap-2">
                  <p>
                  No; probablemente hayas leído información falsa en las redes sociales,
          pero no existen pruebas de que ninguna vacuna –tampoco la de la
          COVID-19– pueda afectar a la fertilidad de las mujeres o los hombres.
          Debes vacunarte si estás intentando quedarte embarazada.
                  </p>
                </div>
              </div>
              <div className="relative flex-1">
                <Image
                  className="object-cover rounded-md"
                  alt="img1"
                  src={img8}
                  placeholder="blur"
                  fill
                  quality={50}
                />
                <a
                  onClick={() => window.open("/img/view4/quest/quest8.jpg")}
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
            <div className="w-10/12 lg:w-[50rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex gap-2 p-5 relative component rounded-md overflow-auto">
              <div className="flex-1 overflow-y-auto">
                <h3 className="text-base lg:text-xl text-center font-semibold">
                ¿Pueden las vacunas de la COVID-19 afectar tu ADN?
                </h3>
                <div className="text-sm lg:text-base text-left flex flex-col gap-2">
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
              <div className="relative flex-1">
                <Image
                  className="object-cover rounded-md"
                  alt="img1"
                  src={img9}
                  placeholder="blur"
                  fill
                  quality={50}
                />
                <a
                  onClick={() => window.open("/img/view4/quest/quest9.jpg")}
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
            <div className="w-10/12 lg:w-[50rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex gap-2 p-5 relative component rounded-md overflow-auto">
              <div className="flex-1 overflow-y-auto">
                <h3 className="text-base lg:text-xl text-center font-semibold">
                Estoy embarazada. ¿Puedo vacunarme contra la COVID-19?
                </h3>
                <div className="text-sm lg:text-base text-left flex flex-col gap-2">
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
              <div className="relative flex-1">
                <Image
                  className="object-cover rounded-md"
                  alt="img1"
                  src={img11}
                  placeholder="blur"
                  fill
                  quality={50}
                />
                <a
                  onClick={() => window.open("/img/view4/quest/quest11.jpg")}
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

export default ModalQuestSlide3;
