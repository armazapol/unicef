import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import img1 from "../../public/img/view1/variantes/img1.png";

type Props = {
  toggleViewVarianteCovid: () => void;
};

const ModalVarianteCovid = ({ toggleViewVarianteCovid }: Props) => {
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
      // onClick={toggleViewVarianteCovid}
    >
      <Image
        className="object-cover"
        alt="background"
        src={background}
        placeholder="blur"
        fill
        // quality={50}
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
              <div className="w-[40rem] bg-white flex flex-col gap-2 p-5 relative component rounded-md">
                <h3 className=" text-xl text-center font-semibold">
                  Variantes de Covid
                </h3>
                <div className="text-left flex flex-col gap-2">
                  <p>
                  Todos los virus ―incluido el <span className="text-orange-600">SARS-CoV-2</span>, que causa la <span className="text-orange-600">COVID-19</span>― evolucionan con el tiempo. Los virus hacen copias de sí mismos en un proceso denominado replicación en el cual pueden generarse copias con pequeños cambios, lo cual es algo habitual en los virus. Estos cambios se denominan «mutaciones». Un virus que ha sufrido una o varias mutaciones se considera una «variante» del virus original.
                  </p>
                  <p>
                  Dada la continua evolución del <span className="text-orange-600">SARS-CoV-2</span> y nuestro entendimiento del impacto de las variantes sobre la salud pública, las variantes pueden reclasificarse con base en sus atributos y prevalencia en los Estados Unidos.
                  </p>
                  <ul>
                    <li>
                      * Variantes bajo monitoreo:  Alpha (linajes B.1.1.7 y Q), Beta (linajes B.1.35 y descendientes), Gamma (linajes P.1 y descendientes), Delta (linajes B.1.617.2 y AY), Epsilon (B.1.43 y B.1.43), Eta (B.1.52), Iota (B.1.53), Kappa (B.1.617.1), Mu (B.1.621, B.1.621.1) y Zeta (P.2)
                    </li>
                    <li>
                      * Variante de interés: ninguna de las variantes del <span className="text-orange-600">SARS-CoV-2</span> tiene esta designación
                    </li>
                    <li>
                      * Variante de preocupación: existe evidencia de una mayor transmisibilidad, casos más graves de enfermedad (por ejemplo, mayor cantidad de hospitalizaciones o muertes), reducción significativa en la neutralización por los anticuerpos generados durante una infección anterior o la vacunación, menor efectividad de los tratamientos o las vacunas, o fallas de detección de diagnóstico: Ómicron (linajes B.1.1.529, BA.1, BA.1.1, BA.2, BA.3, BA.4 y BA.5)
                    </li>
                    <li>* Variante de gran consecuencia: ninguna de las variantes tiene esta designación </li>
                  </ul>
                  <p className="text-xs"><span className="font-semibold"> Fuente:{" "}</span>  <a className="underline hover:text-blue-500 text-black" href="https://cdn.www.gob.pe/uploads/document/file/2773889/Anexo.pdf?v=1642770555">Clasificaciones y definiciones de las variantes del SARS-CoV-2 (cdc.gov)</a> </p>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-6/12 ">
                <Image
                  className="object-cover"
                  alt="img2"
                  src={img1}
                  placeholder="blur"
                  quality={50}
                />
              </div>
            </div>

          </Carousel>
          <a
            onClick={toggleViewVarianteCovid}
            className="cursor-pointer absolute top-0 -right-5 text-white text-xl font-semibold"
          >
              <img className="w-4 lg:w-6" src="/img/closeModal.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalVarianteCovid;
