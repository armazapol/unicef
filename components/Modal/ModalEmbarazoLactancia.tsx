import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import img1 from "../../public/img/view1/variantes/img1.png";

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
      className="h-screen w-full z-60 bg-black/60 flex items-center justify-center fixed modal"
      // onClick={toggleViewEmbarazoLactancia}
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
                <h3 className=" text-xl text-center font-semibold">Embarazo</h3>
                <div className="text-left flex flex-col gap-2">
                  <p>
                    Las mujeres embarazadas pueden vacunarse. Si se contrae la
                    COVID-19 durante el embarazo el riesgo de padecer una forma
                    grave de la enfermedad es mayor. También se corre más riesgo
                    de dar a luz prematuramente. Aunque hay menos datos sobre la
                    vacunación de las embarazadas, se han ido acumulando
                    evidencias sobre la seguridad de la vacuna contra la
                    COVID-19 durante el embarazo y no se han detectado problemas
                    que la pongan en entredicho. Las ventajas de vacunarse
                    superan a los posibles riesgos, especialmente en países con
                    alta transmisión o si se realizan trabajos en los que existe
                    mayor riesgo de exposición a la enfermedad. No hay riesgo de
                    contraer la COVID-19 por la vacuna.
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-[40rem] bg-white flex flex-col gap-2 p-5 relative component rounded-md">
                <div className="text-left flex flex-col gap-2">
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
                      * Las vacunas de ARN-m COVID-19 no son vacunas de virus
                      vivos, por lo que no puede producir la enfermedad, ni usan
                      coadyuvantes para mejorar su eficacia, tendrían el mismo
                      perfil de seguridad y eficacia en las mujeres gestantes en
                      comparación con las no gestantes. Además se observa en los
                      recién nacidos IgG a COVID-19, por lo que ello estaría
                      brindando protección también al recién nacido.
                    </li>
                    <li>
                      * Si la gestante ha presentado infección por COVID-19 se
                      recomienda que la vacuna se realice 90 días luego de haber
                      recibido el diagnóstico.
                    </li>
                  </ul>
                </div>
                {/* <p className="text-left">
                  Fuente:{" "}
                  <a
                    className="underline hover:text-blue-500 text-black"
                    href="google.com"
                    target="blank"
                  >
                    Zheng C, Shao W, Chen X, Zhang B, Wang G, Zhang W.
                    Real-world effectiveness of COVID-19 vaccines: a literature
                    review and meta-analysis. Int J Infect Dis. 2022
                    Jan;114:252-260. doi: 10.1016/j.ijid.2021.11.009. Epub 2021
                    Nov 17. PMID: 34800687; PMCID: PMC8595975.
                  </a>{" "}
                </p> */}
              </div>
            </div>
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-[40rem] bg-white flex flex-col gap-2 p-5 relative component rounded-md">
                <h3 className=" text-xl text-center font-semibold">
                  Lactancia materna
                </h3>
                <div className="text-left flex flex-col gap-2">
                  <p>
                    Si está amamantando, conviene que se vacune contra la
                    COVID-19 en cuanto le corresponda. Ninguna de las vacunas
                    actuales contra la COVID-19 contiene virus vivos. Ello
                    significa que no hay riesgo de transmitir la enfermedad a
                    través de la leche materna debido a la vacuna. De hecho, los
                    anticuerpos que se generan tras la vacunación pueden pasar a
                    la leche materna y ayudar a proteger al bebé.
                  </p>
                  <p>
                    Fuente:{" "}
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
            </div>
          </Carousel>
          <a
            onClick={toggleViewEmbarazoLactancia}
            className="cursor-pointer absolute top-0 -right-5 text-white text-xl font-semibold"
          >
              <img className="w-4 lg:w-6" src="/img/closeModal.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalEmbarazoLactancia;
