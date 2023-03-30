import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import img1 from "../../public/img/view2/newModal9.png";
import img2 from "../../public/img/view2/newModal11.png";
import img3 from "../../public/img/view2/newModal7.png";

type Props = {
  toggleViewEmbarazoLactancia: () => void;
};

const ModalEmbarazoLactancia = ({ toggleViewEmbarazoLactancia }: Props) => {
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
      // onClick={toggleViewEmbarazoLactancia}
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
        onClick={toggleViewEmbarazoLactancia}
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
            swipeable={false}
            stopOnHover={false}
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
              <div className="w-10/12 lg:w-[50rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex gap-2 p-5 relative component rounded-md overflow-auto">
                <div className="flex-1 overflow-y-auto">
                <h3 className="text-base lg:text-xl text-center font-semibold">Embarazo</h3>
                <div className="text-sm lg:text-base text-left flex flex-col gap-2">
                  <p>
                    Las mujeres embarazadas pueden vacunarse. Si se contrae la
                    <span className="text-orange-600"> COVID-19</span> durante
                    el embarazo el riesgo de padecer una forma grave de la
                    enfermedad es mayor. También se corre más riesgo de dar a
                    luz prematuramente. Aunque hay menos datos sobre la
                    vacunación de las embarazadas, se han ido acumulando
                    evidencias sobre la seguridad de la vacuna contra la
                    <span className="text-orange-600"> COVID-19</span> durante
                    el embarazo y no se han detectado problemas que la pongan en
                    entredicho. Las ventajas de vacunarse superan a los posibles
                    riesgos, especialmente en países con alta transmisión o si
                    se realizan trabajos en los que existe mayor riesgo de
                    exposición a la enfermedad. No hay riesgo de contraer la{" "}
                    <span className="text-orange-600"> COVID-19</span> por la
                    vacuna.
                  </p>
                </div>
                </div>
             
                <div className="relative flex-1">
                <Image
                  className="object-cover rounded-md"
                  alt="img1"
                  src={img1}
                  placeholder="blur"
                  fill
                  quality={50}
                />
                <a
                  onClick={() => window.open("/img/view2/newModal9.png")}
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
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-10/12 lg:w-[50rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex  gap-2 p-5 relative component rounded-md overflow-auto">
                <div className="flex-1 overflow-y-auto">
                <div className="text-sm lg:text-base text-left flex flex-col gap-2">
                  <p className="font-semibold">Consideraciones generales:</p>
                  <ul>
                    <li>
                      * Población objetivo: gestación de más de 12 semanas.
                    </li>
                    <li>
                      * El uso de virus inactivo, para las gestantes, tendrían
                      el mismo contexto teórico de las vacunas similares para
                      otras infecciones y que se usan en las gestantes.
                    </li>
                    <li>
                      * Las vacunas de ARN-m{" "}
                      <span className="text-orange-600">COVID-19</span> no son
                      vacunas de virus vivos, por lo que no puede producir la
                      enfermedad, ni usan coadyuvantes para mejorar su eficacia,
                      tendrían el mismo perfil de seguridad y eficacia en las
                      mujeres gestantes en comparación con las no gestantes.
                      Además se observa en los recién nacidos IgG a{" "}
                      <span className="text-orange-600">COVID-19</span>, por lo
                      que ello estaría brindando protección también al recién
                      nacido.
                    </li>
                    <li>
                      * Si la gestante ha presentado infección por{" "}
                      <span className="text-orange-600">COVID-19</span> se
                      recomienda que la vacuna se realice 90 días luego de haber
                      recibido el diagnóstico.
                    </li>
                  </ul>
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
                    onClick={() => window.open("/img/view2/newModal11.png")}
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
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-10/12 lg:w-[50rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex gap-2 p-5 relative component rounded-md overflow-auto">
                <div className="flex-1 overflow-y-auto">
                <h3 className="text-base lg:text-xl text-center font-semibold">
                  Lactancia materna
                </h3>
                <div className="text-sm lg:text-base text-left flex flex-col gap-2">
                  <p>
                    Si está amamantando, conviene que se vacune contra la
                    <span className="text-orange-600"> COVID-19</span> en cuanto
                    le corresponda. Ninguna de las vacunas actuales contra la
                    <span className="text-orange-600"> COVID-19</span> contiene virus vivos. Ello significa que no hay
                    riesgo de transmitir la enfermedad a través de la leche
                    materna debido a la vacuna. De hecho, los anticuerpos que se
                    generan tras la vacunación pueden pasar a la leche materna y
                    ayudar a proteger al bebé.
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold"> Fuente: </span>
                    <a
                      className="underline hover:text-blue-500 text-black"
                      href="https://www.who.int/es/news-room/feature-stories/detail/safety-of-covid-19-vaccines"
                      target="blank"
                    >
                      Inocuidad de las vacunas contra la COVID-19 (who.int){" "}
                    </a>
                    , Vacunación en gestantes:{" "}
                    <a
                      className="underline hover:text-blue-500 text-black"
                      href="https://cdn.www.gob.pe/uploads/document/file/1942907/PROTOCOLO%20GESTANTES.pdf.pdf?v=1630687675"
                      target="blank"
                    >
                      PROTOCOLO GESTANTES.pdf.pdf (www.gob.pe)
                    </a>{" "}
                  </p>
                </div>
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
                  onClick={() => window.open("/img/view2/newModal7.png")}
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

export default ModalEmbarazoLactancia;
