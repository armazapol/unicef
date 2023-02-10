import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import close from "../../public/img/closeModal.png";
import img1 from "../../public/img/view1/alarma/img1.png";
import img2 from "../../public/img/view1/alarma/img2.png";
import img3 from "../../public/img/view1/alarma/img3.png";
import img4 from "../../public/img/view1/newModal3.jpg";
import img5 from "../../public/img/view1/newModal4.jpg";
import img6 from "../../public/img/view1/newModal5.jpg";
import ButtonLink from "../commons/button/ButtonLink";

type Props = {
  toggleViewSignosAlarma: () => void;
};

const ModalSignosAlarma = ({ toggleViewSignosAlarma }: Props) => {
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
        onClick={toggleViewSignosAlarma}
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
            <div className="w-10/12 lg:w-[40rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex gap-2 p-5 relative component rounded-md overflow-auto">
              <div className="flex-1 overflow-y-auto">
                <h3 className="text-base lg:text-xl text-center font-semibold">
                  Signos de Alarma
                </h3>
                <div className="text-sm lg:text-base text-left flex flex-col gap-2">
                  <p>
                    Existe un grupo de signos de alarma, los cuales nos
                    permitirán identificar la necesidad de atención médica
                    inmediata:
                  </p>
                  <ul>
                    <li>
                      * Sensación de falta de aire o dificultad para respirar
                      (dificultad al mediano esfuerzo o al hablar por más de 30
                      segundos)
                    </li>
                    <li>
                      * Saturación de oxígeno menor al 95% a nivel del mar
                    </li>
                    <li>* Desorientación o confusión</li>
                    <li>* Fiebre persistente por mas de 3 días</li>
                    <li>* Dolor intenso y constante en el pecho</li>
                    <li>* Coloración azul de los labios (cianosis)</li>
                  </ul>
                  <a
                    className="underline hover:text-blue-500 text-xs"
                    href="https://cdn.www.gob.pe/uploads/document/file/2007441/Documento%20T%C3%A9cnico%3A%20Manejo%20Ambulatorio%20de%20Personas%20Afectadas%20por%20la%20COVID-19%20en%20el%20Per%C3%BA.pdf?v=1625853483"
                    target="blank"
                  >
                    (Fuente: Documento Técnico: Manejo Ambulatorio de Personas
                    Afectadas por la COVID-19 en el Perú.pdf (www.gob.pe))
                  </a>
                </div>
              </div>
              {/* <div className="relative flex-1">
                <Image
                  className="object-cover rounded-md"
                  alt="img1"
                  src={img4}
                  placeholder="blur"
                  fill
                  quality={50}
                />
                <a
                  onClick={() => window.open("/img/view1/newModal3.jpg")}
                  className="absolute left-5 bottom-5 z-20 cursor-pointer"
                >
                  <img
                    className="w_loop hidden lg:block"
                    src="/img/lupa.png"
                    alt=""
                  />
                </a>
              </div> */}
            </div>
          </div>
          <div className=" flex items-center justify-center  relative h-full gap-5">
            <div className="w-10/12 lg:w-[40rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex gap-2 p-5 relative component rounded-md overflow-auto">
              <div className="flex-1 overflow-y-auto">
                <h3 className="text-base lg:text-xl text-center font-semibold">
                  Factores de Riesgo
                </h3>
                <div className="text-sm lg:text-base text-left flex flex-col gap-2">
                  <p>
                    Los Factores de riesgo individual asociados a presentar complicaciones relacionadas al COVID-19 son:
                  </p>
                  <ul>
                    <li>
                      * Edad mayora 60 años
                    </li>
                    <li>
                      * Comborbilidades como: hipertensión arterial, enfermedades cardiovasculares, diabetes, obesidad, asma, enfermedad pulmonar crónica (EPOC), insuficiencia renal crónica, enfermedad o tratamiento inmunosupresor
                    </li>
                  </ul>
                  <a
                    className="underline hover:text-blue-500 text-xs"
                    href="https://cdn.www.gob.pe/uploads/document/file/582549/RM_193-2020-MINSA.PDF"
                    target="blank"
                  >
                    (Fuente: ANEXO - RM 193-2020-MINSA.PDF(www.gob.pe))
                  </a>
                </div>
              </div>
              {/* <div className="relative flex-1">
                <Image
                  className="object-cover rounded-md"
                  alt="img1"
                  src={img4}
                  placeholder="blur"
                  fill
                  quality={50}
                />
                <a
                  onClick={() => window.open("/img/view1/newModal3.jpg")}
                  className="absolute left-5 bottom-5 z-20 cursor-pointer"
                >
                  <img
                    className="w_loop hidden lg:block"
                    src="/img/lupa.png"
                    alt=""
                  />
                </a>
              </div> */}
            </div>
          </div>
        </Carousel>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ModalSignosAlarma;
