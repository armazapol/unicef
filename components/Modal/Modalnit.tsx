import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import close from "../../public/img/closeModal.png";
import logo from "../../public/img/logo.png";
import img1 from "../../public/img/init/img1.png";
import img2 from "../../public/img/init/img2.png";
import img3 from "../../public/img/init/img3.png";
import img4 from "../../public/img/view1/newModal3.jpg";
import img5 from "../../public/img/view1/newModal4.jpg";
import img6 from "../../public/img/view1/newModal5.jpg";
import ButtonLink from "../commons/button/ButtonLink";

type Props = {
  toggleViewInit: () => void;
  handleNext: () => void;
};

const ModalInit = ({ toggleViewInit, handleNext }: Props) => {
  const handleChildElementClick = (e: any) => {
    e.stopPropagation();
    // Do other stuff here
  };

  const handleFinalizar = () => {
    toggleViewInit()
    handleNext()
  }

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
        onClick={toggleViewInit}
        className="cursor-pointer absolute right-4 top-4 lg:right-10 lg:top-10 text-white text-xl font-semibold z-50"
      >
        <img className="w-4 lg:w-6" src="/img/closeModal.png" alt="" />
      </a>
      {/* <div className="flex flex-col gap-5"> */}
      {/* <h3 className="text-white text-xl text-center font-semibold">Aislamiento y Prevención del Riesgo:</h3> */}
      <div
        className="flex img gap-2 w-full h-auto xl:w-[80rem] items-center justify-center relative"
        onClick={(e) => handleChildElementClick(e)}
      >
        <Carousel
          showThumbs={false}
          showStatus={false}
          // showIndicators={false}
          infiniteLoop={false}
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
            <div className="w-10/12 lg:w-[70rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex gap-2 p-10 relative component rounded-md overflow-auto ">
              <div className="absolute right-5 top-0 w-10 lg:w-32">
                <Image className="" alt="quest" src={logo} placeholder="blur" />
              </div>
              <div className="overflow-y-auto w-12/12 lg:w-9/12">
                <div className="text-sm lg:text-xl text-left flex flex-col gap-3">
                  <h3 className="text-base lg:text-2xl  font-bold text-orange-600 text-left">
                    ¡Bienvenidos y bienvenidas!
                  </h3>
                  <p>
                  Este curso tiene el objetivo de reconocer la importancia de la vacunación y los cambios en el esquema regular tras la pandemia del Covid-19.
                    {/* <span className="text-orange-600">
                      esquema nacional de vacunación.
                    </span> */}
                  </p>
                  <div>
                    <p>
                      Está compuesto por{" "}
                      <span className="text-orange-600">
                        4 módulos interrelacionados:
                      </span>
                    </p>
                    <ul className="ml-5">
                      <li>
                        <span className="text-blue-700">- Módulo 1:</span>{" "}
                        Conceptos básicos sobre el{" "}
                        <span className="text-orange-600">SARS-Cov-2 </span>
                      </li>
                      <li>
                        <span className="text-blue-700">- Módulo 2:</span>{" "}
                        Vacunación contra la{" "}
                        <span className="text-orange-600">COVID-19 </span>
                      </li>
                      <li>
                        <span className="text-blue-700">- Módulo 3:</span>{" "}
                        Actualización del{" "}
                        <span className="text-orange-600">
                          esquema nacional de vacunación
                        </span>
                      </li>
                      <li>
                        <span className="text-blue-700">- Módulo 4:</span>{" "}
                        Preguntas más frecuentes
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center  relative  h-full  ">
            <div className="h-[13rem] sm:h-[14rem] lg:h-auto flex flex-col gap-2 lg:gap-5 items-center">
              <h3 className=" text-base lg:text-4xl text-center font-semibold text-white">
                {/* <span className="text-blue-700">Pantallas</span> Interactivas */}
                ¿Qué encontrarás en este curso?
              </h3>
              <div className="w-10/12 lg:w-[70rem] bg-white flex gap-2 p-10 relative rounded-md justify-evenly overflow-y-auto h-[15rem] sm:h-[18rem] lg:h-auto">
                <div className=" w-5/12 lg:w-3/12">
                  <div className="text-sm lg:text-base flex flex-col gap-3">
                    <div className="relative">
                      <Image
                        className=""
                        alt="quest"
                        src={img2}
                        placeholder="blur"
                      />
                    </div>
                    <h3 className="text-sm lg:text-xl  font-bold text-orange-600 text-center">
                      Pantallas de módulo
                    </h3>
                    <p>
                      Son las pantallas en las que se mostrará todo el contenido
                      del Módulo, a través de botones. En PC, sólo tienes que
                      pasar el ratón por las distintas imágenes para que
                      aparezcan los botones correspondientes. En móviles, estos
                      aparecerán automáticamente.
                    </p>
                  </div>
                </div>
                <div className=" w-5/12 lg:w-3/12">
                  <div className="text-sm lg:text-base flex flex-col gap-3">
                    <div className="relative">
                      <Image
                        className=""
                        alt="quest"
                        src={img1}
                        placeholder="blur"
                      />
                    </div>
                    <h3 className="text-sm lg:text-xl  font-bold text-orange-600 text-center">
                      Pantallas de contenido
                    </h3>
                    <p>
                      Son las pantallas que aparecerán encima al hacer clic a un
                      botón en las pantallas de Módulo. Estas contendrán todo el
                      detalle en texto, imagen y enlaces de interés. Usa las
                      flechas laterales, según cada caso, para pasar a la
                      siguiente pantalla, o usa la lupa para agrandar las
                      imágenes y cuadros.
                    </p>
                  </div>
                </div>
                <div className="absolute right-5 top-0 w-10 lg:w-32">
                  <Image
                    className=""
                    alt="quest"
                    src={logo}
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center  relative h-full  ">
            <div className="h-[13rem] sm:h-[14rem] lg:h-auto flex flex-col gap-2 lg:gap-5 items-center">
              <h3 className=" text-base lg:text-4xl text-center font-semibold text-white">
                {/* <span className="text-blue-700">Pantallas</span> Evaluativas */}
                ¿Qué encontrarás en este curso?
              </h3>
              <div className="w-10/12 lg:w-[70rem] bg-white flex gap-2 p-10 relative rounded-md justify-evenly overflow-y-auto h-[15rem] sm:h-[18rem] lg:h-auto">
                <div className="w-5/12 lg:w-3/12">
                  <div className="text-sm lg:text-base flex flex-col gap-3">
                    <div className="relative">
                      <Image
                        className=""
                        alt="quest"
                        src={img3}
                        placeholder="blur"
                      />
                    </div>
                    <h3 className="text-sm lg:text-xl  font-bold text-orange-600 text-center">
                      Pantallas de Trivia
                    </h3>
                    <p>
                    Luego de revisar todo el contenido pasamos a las pantallas de Trivia, donde deberás responder 5 preguntas. Cuando logres alcanzar 80 puntos como mínimo podrás acceder al siguiente módulo.
                    </p>
                  </div>
                </div>
                <div className="w-5/12 lg:w-3/12">
                  <div className="text-sm lg:text-base flex flex-col gap-3">
                    <div className="relative">
                      <Image
                        className=""
                        alt="quest"
                        src={img3}
                        placeholder="blur"
                      />
                    </div>
                    <h3 className="text-sm lg:text-xl  font-bold text-orange-600 text-center">
                      Pantallas de Resultados
                    </h3>
                    <p>
                    Tras responder las preguntas, se te dará tus Resultados. Si pasaste el mínimo obligatorio de 80 puntos, podrás pasar al siguiente módulo, pero si no, tendrás que “Volver a dar el módulo”.
                    </p>
                  </div>
                </div>
                <div className="absolute right-5 top-0 w-10 lg:w-32">
                  <Image
                    className=""
                    alt="quest"
                    src={logo}
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center  relative h-full gap-5">
            <div className="w-10/12 lg:w-[70rem] h-[14rem] sm:h-[15rem] lg:h-[30rem] bg-white flex gap-2 p-10 relative component rounded-md overflow-auto items-center ">
              <div className="absolute right-5 top-0 w-10 lg:w-32">
                <Image className="" alt="quest" src={logo} placeholder="blur" />
              </div>
              <div className="px-0 lg:px-40 ">
                <div className="text-sm lg:text-xl text-left flex flex-col gap-3 ">
                  {/* <h3 className="text-base lg:text-2xl  font-bold text-blue-700 text-left">
                    Eso es todo.
                  </h3> */}
                  <p>
                    Por un periodismo bien informado, disfruta la experiencia,
                    responde las preguntas y difunde información de calidad.
                  </p>
                  <p className="text-orange-600 font-bold text-xl lg:text-4xl text-center">
                    ¡Empecemos!
                  </p>
                  <div className="flex items-center justify-center mt-0 lg:mt-20">
                    <div
                      className="bg-blue-900 rounded-md py-2 px-12 text-white font-bold text-md  lg:text-3xl cursor-pointer z-20 shadow-md shadow-black"
                      onClick={handleFinalizar}
                    >
                      Vayamos al curso
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ModalInit;
