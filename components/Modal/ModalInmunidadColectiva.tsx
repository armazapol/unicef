import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import img1 from "../../public/img/view2/newModal3.png";
import img2 from "../../public/img/view2/newModal4.png";

type Props = {
  toggleViewInmunidadColectiva: () => void;
};

const ModalInmunidadColectiva = ({ toggleViewInmunidadColectiva }: Props) => {
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
      // onClick={toggleViewInmunidadColectiva}
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
        onClick={toggleViewInmunidadColectiva}
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
              <div className="w-10/12 lg:w-[50rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex gap-2 p-5 relative component rounded-md overflow-auto">
                <div className="flex-1 overflow-y-auto">
                <h3 className="text-base lg:text-xl text-center font-semibold">
                Inmunidad colectiva
                </h3>
                <div className="text-sm lg:text-base text-left flex flex-col gap-2">
                  <p>
                  Cuando una persona está vacunada contra una enfermedad, es muy probable que esté protegida contra esa enfermedad. Ahora bien, no todas las personas se pueden vacunar. Algunas, con enfermedades preexistentes que debilitan sus sistemas inmunitarios (por ejemplo, cáncer o VIH) o las que tienen alergias graves a algunos componentes de las vacunas, tal vez no puedan recibir determinadas vacunas. Esas personas pueden estar protegidas si viven entre otras personas que sí estén vacunadas. Cuando muchas personas de una comunidad están vacunadas, la circulación del patógeno es difícil porque la mayoría de las personas están inmunizadas.  Por lo tanto, cuantas más personas estén vacunadas, menos probable será que una persona que no puede protegerse con vacunas corra el riesgo de verse expuesta a patógenos. Esto se denomina inmunidad colectiva.
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
                    onClick={() => window.open("/img/view2/newModal3.png")}
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
                <div className="text-left flex flex-col gap-2 flex-1 overflow-y-auto text-sm lg:text-base">
                  <p>
                  Esto es especialmente importante no solo para las personas que no pueden vacunarse, sino también para las que pueden ser más susceptibles a las enfermedades contra las que vacunamos. Ninguna vacuna proporciona por sí sola una protección del 100%, y la inmunidad colectiva no ofrece protección total a quienes no pueden vacunarse con seguridad. No obstante, la inmunidad colectiva ofrece a esas personas un grado sustancial de protección, gracias a que las personas de su entorno están vacunadas.
                  </p>
                  <p>La vacunación no solo lo protege a usted, sino también a las personas de la comunidad que no se pueden vacunar. Si usted puede vacunarse, hágalo.</p>
                  <p className="text-sm">
                  <span className="font-semibold"> Fuente:{" "}</span> 
                    <a
                      className="underline hover:text-blue-500 text-black"
                      href="https://www.who.int/es/news-room/feature-stories/detail/how-do-vaccines-work"
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
                    src={img2}
                    placeholder="blur"
                    fill
                    quality={50}
                  />
                  <a
                    onClick={() => window.open("/img/view2/newModal4.png")}
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

export default ModalInmunidadColectiva;
