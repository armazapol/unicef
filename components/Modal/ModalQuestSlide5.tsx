import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import close from "../../public/img/closeModal.png";
import img6 from "../../public/img/view4/quest/quest6.jpg";
import img7 from "../../public/img/view4/quest/quest7.jpg";


type Props = {
  toggleViewQuestSlide5: () => void;
  nextViewModule: () => void;
};

const ModalQuestSlide5 = ({ toggleViewQuestSlide5 , nextViewModule}: Props) => {

  const nextModule = () => {
    nextViewModule()
    toggleViewQuestSlide5()
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
        onClick={toggleViewQuestSlide5}
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
          className="  w-full h-full relative carousel1 "
        >
          <div className=" flex items-center justify-center  relative h-full gap-5">
            <div className="w-10/12 lg:w-[60rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex gap-2 p-5 lg:p-10 relative component rounded-md overflow-auto">
              <div className="flex-1 overflow-y-auto">
                <h3 className="text-base lg:text-xl text-center font-semibold">
                  ¿Pueden los zapatos propagar el virus de la COVID-19?
                </h3>
                <div className="text-sm lg:text-base text-left flex flex-col gap-2">
                  <p>
                    La probabilidad de que el virus de la COVID-19 se propague
                    con los zapatos e infecte a personas es muy baja. Como
                    medida de precaución, especialmente en hogares donde haya
                    bebés y niños pequeños que gateen o jueguen en el suelo,
                    considere dejar los zapatos a la entrada de su casa. Esto
                    ayudará a prevenir el contacto con la suciedad o cualquier
                    desecho que pueda ser transportado en las suelas de los
                    zapatos.
                  </p>
                  <p>
                  El uso prolongado de las mascarillas, cuando se llevan puestas correctamente, NO PROVOCA intoxicación por CO2 ni hipoxia. Una vez puesta la mascarilla, compruebe que esté bien colocada y que le permita respirar con normalidad. No reutilice una mascarilla desechable y cámbiela cuando se humedezca.
                  </p>
                </div>
              </div>
              <div className="relative flex-1">
                <Image
                  className="object-cover rounded-md"
                  alt="img6"
                  src={img6}
                  placeholder="blur"
                  fill
                  quality={50}
                />
                <a
                  onClick={() => window.open("/img/view4/quest/quest6.jpg")}
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
            <div className="w-10/12 lg:w-[60rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex gap-2 p-5 lg:p-10 relative component rounded-md overflow-auto">
              <div className="flex-1 overflow-y-auto">
                <div className="text-sm lg:text-base text-left flex flex-col gap-2">
                  <p>
                  El nuevo coronavirus NO PUEDE transmitirse a través de picaduras de mosquitos. El nuevo coronavirus es un virus respiratorio que se propaga principalmente por contacto con una persona infectada a través de las gotitas respiratorias que se generan cuando esta persona tose o estornuda, por ejemplo, o a través de las gotas de saliva o secreciones de la nariz. Hasta la fecha no hay información ni pruebas que indiquen que pueda transmitirse por medio de mosquitos. Para protegerse, evite el contacto cercano con cualquier persona que tenga fiebre y tos, y practique una buena higiene de las manos y de las vías respiratorias.
                  </p>
                  <p>
                  El frío y la nieve NO PUEDEN matar el nuevo coronavirus
                    (2019-nCoV) La temperatura normal del cuerpo humano se
                    mantiene en torno a 36,5° y 37°, con independencia de la
                    temperatura exterior o de las condiciones meteorológicas.
                    Por lo tanto, no hay razón para creer que el frío pueda
                    matar el nuevo coronavirus o acabar con otras enfermedades.
                    La forma más eficaz de protegerse contra el 2019-nCoV es
                    limpiarse las manos frecuentemente con un desinfectante a
                    base de alcohol o con agua y jabón.
                  </p>
                </div>
              </div>
              <div className="relative flex-1">
                <Image
                  className="object-cover rounded-md"
                  alt="img7"
                  src={img7}
                  placeholder="blur"
                  fill
                  quality={50}
                />
                <a
                  onClick={() => window.open("/img/view4/quest/quest7.jpg")}
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

export default ModalQuestSlide5;
