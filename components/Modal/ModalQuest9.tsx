import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import close from "../../public/img/closeModal.png";
import img1 from "../../public/img/view1/alarma/img1.png";
import img2 from "../../public/img/view1/alarma/img2.png";
import img3 from "../../public/img/view1/alarma/img3.png";
import ButtonLink from "../commons/button/ButtonLink";

type Props = {
  toggleViewQuest9: () => void;
};

const ModalQuest9 = ({ toggleViewQuest9 }: Props) => {
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
      className="h-screen w-full z-60 bg-black/60 flex items-center justify-center fixed modal"
      // onClick={toggleViewAlarmaPrevencion}
    >
      <Image
        className="object-cover"
        alt="background"
        src={background}
        placeholder="blur"
        fill
        quality={50}
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
            className="  w-full h-full relative carousel1"
          >
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-[40rem] bg-white flex flex-col gap-2 p-5 relative component rounded-md">
                <h3 className=" text-xl text-center font-semibold">
                  ¿Pueden los zapatos propagar el virus de la COVID-19?
                </h3>
                <div className="text-left flex flex-col gap-2">
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
                    El uso prolongado de las mascarillas, cuando se llevan
                    puestas correctamente, NO PROVOCA intoxicación por CO2 ni
                    hipoxia Utilizar mascarillas durante mucho tiempo puede ser
                    incómodo, pero no provoca intoxicación por CO2 ni hipoxia.
                    Una vez puesta la mascarilla, compruebe que está bien
                    colocada y que le permite respirar con normalidad. No
                    reutilice una mascarilla desechable y cámbiela cuando se
                    humedezca.
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-[40rem] bg-white flex flex-col gap-2 p-5 relative component rounded-md">
                <div className="text-left flex flex-col gap-2">
                  <p>
                    El nuevo coronavirus NO PUEDE transmitirse a través de
                    picaduras de mosquitos El nuevo coronavirus es un virus
                    respiratorio que se propaga principalmente por contacto con
                    una persona infectada a través de las gotículas
                    respiratorias que se generan cuando esta persona tose o
                    estornuda, por ejemplo, o a través de gotículas de saliva o
                    secreciones de la nariz. Hasta la fecha no hay información
                    ni pruebas que indiquen que pueda transmitirse por medio de
                    mosquitos. Para protegerse, evite el contacto cercano con
                    cualquier persona que tenga fiebre y tos, y practique una
                    buena higiene de las manos y de las vías respiratorias.
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
            </div>
          </Carousel>
          <a
            onClick={toggleViewQuest9}
            className="cursor-pointer absolute top-0 -right-5 text-white text-xl font-semibold"
          >
            <img className="w-4 lg:w-6" src="/img/closeModal.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalQuest9;
