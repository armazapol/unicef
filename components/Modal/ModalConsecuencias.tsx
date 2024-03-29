import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import img1 from "../../public/img/view2/newModal20.jpg";
import img2 from "../../public/img/view2/newModal12.png";
import arrow from "../../public/img/arrow.png";

type Props = {
  toggleViewConsecuencias: () => void;
  nextViewModule: () => void;
};

const ModalConsecuencias = ({ toggleViewConsecuencias, nextViewModule }: Props) => {


  const nextModule = () => {
    nextViewModule()
    toggleViewConsecuencias()
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
      // onClick={toggleViewConsecuencias}
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
        onClick={toggleViewConsecuencias}
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
          className="  w-full h-full relative carousel1"
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
        >
          <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
            <div className="w-10/12 lg:w-[60rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex gap-2 p-5 lg:p-10 relative component rounded-md overflow-auto text-sm lg:text-base">
              <div className="flex-1 overflow-y-auto">
                <h3 className="text-base lg:text-xl text-center font-semibold">
                  Consecuencias de las nuevas variantes del virus del COVID-19
                  en las vacunas
                </h3>
                <div className=" text-left flex flex-col gap-2">
                  <p>
                    Se espera que las vacunas contra la{" "}
                    <span className="text-orange-600">COVID-19</span> que están
                    en fase de desarrollo o que ya se han autorizado
                    proporcionen al menos cierta protección contra las nuevas
                    variantes víricas, puesto que las personas a quienes se
                    administran muestran una respuesta inmunitaria contra
                    diversos anticuerpos y células. Por consiguiente, los
                    cambios o las mutaciones en el virus no conllevan una
                    pérdida completa de eficacia de las vacunas. Si se comprueba
                    que alguna de estas vacunas es menos eficaz contra una o
                    varias variantes, se podrá modificar su composición para que
                    también protejan contra las nuevas variantes.
                  </p>
                  <p>
                    Se continúan recogiendo y analizando datos sobre las nuevas
                    variantes del virus que causa la{" "}
                    <span className="text-orange-600">COVID-19</span>. La OMS
                    mantiene una comunicación estrecha con investigadores,
                    funcionarios de salud y científicos con el fin de conocer de
                    qué manera estas variantes pueden afectar a las propiedades
                    del virus y el grado en que ello podría afectar la eficacia
                    de las vacunas.{" "}
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
                  onClick={() => window.open("/img/view2/newModal20.jpg")}
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
            <div className="w-10/12 lg:w-[55rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex gap-2 p-5 lg:p-10 relative component rounded-md overflow-auto text-sm lg:text-base">
              <div className="text-left flex flex-col gap-2 flex-1 overflow-y-auto">
                <p>
                Mientras esperamos a disponer de más información, tenemos que continuar haciendo lo posible por frenar la propagación del virus a fin de evitar que aparezcan mutaciones que puedan reducir la eficacia de las vacunas disponibles. Además, los fabricantes y los programas que utilizan las vacunas deberán adaptarse a la evolución del virus; por ejemplo, puede ser necesario que, en su fase de desarrollo, las vacunas deban incluir más de una cepa, durante la fase de desarrollo, que se deban administrar dosis de refuerzo o que sea preciso realizar algún otro tipo de modificación en las vacunas. Asimismo, los ensayos se deben estructurar y mantener de manera que se puedan evaluar las variaciones en la eficacia, y han de realizarse a la escala adecuada y ser suficientemente variados para que los resultados se puedan interpretar claramente. los resultados. También es necesario estudiar el impacto de las vacunas a medida que se administran.
                </p>
                <p className="text-sm">
                  <span className="font-semibold"> Fuente: </span>
                  <a
                    className="underline hover:text-blue-500 text-black"
                    href="https://www.who.int/es/news-room/feature-stories/detail/the-effects-of-virus-variants-on-covid-19-vaccines"
                    target="blank"
                  >
                    Variantes víricas y sus efectos en las vacunas contra la
                    COVID-19 (who.int)
                  </a>
                </p>
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
                  onClick={() => window.open("/img/view2/newModal12.png")}
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

export default ModalConsecuencias;
