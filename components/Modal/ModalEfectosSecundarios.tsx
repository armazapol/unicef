import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import img1 from "../../public/img/view2/newModal5.png";
import img2 from "../../public/img/view2/newModal16.png"; //cambiar
import img3 from "../../public/img/view2/newModal10.png";

type Props = {
  toggleViewEfectosSecundarios: () => void;
  nextViewModule: () => void;
};

const ModalEfectosSecundarios = ({ toggleViewEfectosSecundarios, nextViewModule }: Props) => {

  const nextModule = () => {
    nextViewModule()
    toggleViewEfectosSecundarios()
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
      // onClick={toggleViewEfectosSecundarios}
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
        onClick={toggleViewEfectosSecundarios}
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
            <div className="w-10/12 lg:w-[60rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex  gap-2 p-5 lg:p-10 relative component rounded-md overflow-auto">
              <div className="flex-1 overflow-y-auto">
                <h3 className="text-base lg:text-xl text-center font-semibold">
                  Efectos secundarios
                </h3>
                <div className="text-sm lg:text-base text-left flex flex-col gap-2">
                  <p>
                    Las vacunas están concebidas para conferir inmunidad sin
                    correr el riesgo de presentar la enfermedad contra la que
                    protegen. Tras vacunarse, algunas personas presentan
                    síntomas de leves a moderados que se deben a que su sistema
                    inmunitario está haciendo que su organismo reaccione de una
                    determinada manera, por ejemplo, aumentando la circulación
                    de la sangre para que se distribuyan más células
                    inmunitarias y aumentando la temperatura corporal para matar
                    más fácilmente a los virus.
                  </p>
                  <p>
                    Estos efectos de leves a moderados, como febrícula o dolores
                    musculares, son normales y no deben causar alarma, pues
                    indican que el sistema inmunitario está respondiendo a la
                    vacuna o, más concretamente, al antígeno (es decir, la
                    molécula que desencadena la respuesta inmunitaria) y de que
                    se está preparando para luchar contra el virus. Por lo
                    general, los efectos secundarios desaparecen espontáneamente
                    a los pocos días.{" "}
                  </p>
                  <p>
                    Los efectos secundarios habituales de una intensidad de leve
                    moderada son un buen signo que nos indica que la vacuna está
                    funcionando. No obstante, la ausencia de efectos secundarios
                    no significa que la vacuna no sea eficaz, porque cada
                    persona reacciona de forma distinta a las vacunas.
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
                    onClick={() => window.open("/img/view2/newModal5.png")}
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
            <div className="w-10/12 lg:w-[55rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex  gap-2 p-5 lg:p-10 relative component rounded-md overflow-auto">
              <div className="flex-1 overflow-y-auto">
              <h3 className="text-base lg:text-xl text-center font-semibold">
                Efectos secundarios habituales de las vacunas contra la COVID-19
              </h3>
              <div className="text-sm lg:text-base text-left flex flex-col gap-2">
                <p>
                  Como cualquier vacuna, las que protegen contra la{" "}
                  <span className="text-orange-600">COVID-19</span> pueden
                  causar efectos secundarios, la mayoría de los cuales son leves
                  o moderados y desaparecen espontáneamente a los pocos días.
                  Los resultados de los ensayos clínicos muestran que también
                  pueden aparecer efectos secundarios más graves o duraderos. En
                  cualquier caso, siempre se mantiene una vigilancia para
                  detectar cualquier efecto adverso.
                </p>
                <p>
                  Algunos de los efectos secundarios típicos son dolor en el
                  lugar de inyección, fiebre, cansancio, cefaleas, mialgias,
                  escalofríos y diarrea. La probabilidad de que ocurran varía en
                  función de cada vacuna.{" "}
                </p>
                <p>
                  Las vacunas contra la{" "}
                  <span className="text-orange-600">COVID-19</span> protegen
                  solamente contra el virus{" "}
                  <span className="text-orange-600">SARS-CoV-2</span>, por lo
                  que es importante mantener también un buen estado de salud. .
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
                    onClick={() => window.open("/img/view2/newModal6.png")}
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
            <div className="w-10/12 lg:w-[55rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex gap-2 p-5 lg:p-10 relative component rounded-md overflow-auto">
              <div className="flex-1 overflow-y-auto">
              <h3 className="text-base lg:text-xl text-center font-semibold">
                Efectos adversos menos frecuentes
              </h3>
              <div className=" text-sm lg:text-base text-left flex flex-col gap-2">
                <p>
                  Cuando se vacuna a una persona, es posible que se le pida
                  esperar de 15 a 30 minutos en el lugar de vacunación para que
                  pueda ser atendida por trabajadores de la salud en caso de que
                  presente alguna reacción inmediata. Las personas vacunadas
                  deben avisar a los profesionales sanitarios de cualquier
                  efecto secundario inesperado o de otros problemas de salud
                  tras la vacunación, por ejemplo, los efectos secundarios que
                  duren más de tres días. Uno de los efectos secundarios menos
                  frecuentes que se han notificado con las vacunas contra la{" "}
                  <span className="text-orange-600">COVID-19</span> son las
                  reacciones alérgicas graves (como casos de anafilaxia); sin
                  embargo, esta reacción es muy infrecuente.
                </p>
                <p>
                  Las autoridades nacionales y los organismos internacionales,
                  entre ellos la OMS, hacen un seguimiento atento del uso de
                  estas vacunas a fin de detectar posibles efectos adversos
                  inesperados.
                </p>
                <p className="text-sm">
                  <span className="font-semibold"> Fuente: </span>
                  <a
                    className="underline hover:text-blue-500 text-black"
                    href="https://www.who.int/es/news-room/feature-stories/detail/side-effects-of-covid-19-vaccines"
                    target="blank"
                  >
                    Efectos secundarios de las vacunas contra la COVID-19
                    (who.int)
                  </a>
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
        </Carousel>
      </div>
    </div>
  );
};

export default ModalEfectosSecundarios;
