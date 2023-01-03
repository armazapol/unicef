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
  toggleViewAlarmaPrevencion: () => void;
};

const ModalAlarmaPrevencion = ({ toggleViewAlarmaPrevencion }: Props) => {
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
                  Aislamiento
                </h3>
                <div className="text-left flex flex-col gap-2">
                  <p>
                    Es importante diferenciar en primer lugar el aislamiento de
                    la cuarentena, la cuarentena es la restricción del
                    desplazamiento fuera de su vivienda a la persona o personas
                    expuestas a un caso sospechoso, probable o confirmado de
                    <span className="text-orange-600"> COVID-19</span>. El aislamiento es el procedimiento por el cual una
                    persona considerada sospechosa, probable o confirmada de
                    <span className="text-orange-600"> COVID-19</span>, y que no requiera hospitalización se le indica
                    aislamiento domiciliario. Durante el aislamiento se le
                    restringe el desplazamiento fuera de su vivienda o centro de
                    aislamiento.
                    <a
                      className=""
                      href="https://cdn.www.gob.pe/uploads/document/file/2733824/Anexo.pdf?v=1642137085"
                      target="blank"
                    >
                       <ButtonLink text="www.gob.pe" />
                    </a>
                  </p>
                  <p>
                    Para el caso de pacientes con síntomas respiratorios, y en
                    ausencia de signos de alarma, los días de aislamiento
                    dependerán de la presencia o no de factores de riesgo:{" "}
                  </p>
                  <ul>
                    <li>
                      * Mayor de 60 años, presencia de comorbilidades o
                      vacunación incompleta, se realiza aislamiento por 10 días.{" "}
                    </li>
                    <li>
                      * Menor de 60 años, sin comorbilidades y vacunación
                      completa, se realiza aislamiento por 7 días.{" "}
                    </li>
                    <li>
                      * Asintomático con prueba positiva, se realiza aislamiento
                      por 7 días.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <h3 className=" text-xl text-center font-semibold text-white">
                Flujo deAislamiento
              </h3>
              <div className="w-10/12 ">
                <Image
                  className="object-cover"
                  alt="img2"
                  src={img1}
                  placeholder="blur"
                  quality={50}
                />
              </div>
            </div>
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-[40rem] bg-white flex flex-col gap-2 p-5 relative component rounded-md">
                <div className="text-left flex flex-col gap-2">
                  <p>
                    En el caso de personas que habitan con personas positivas a
                    <span className="text-orange-600"> COVID-19</span>, se establecerán los días de aislamiento según lo
                    siguiente:
                  </p>
                  <ul>
                    <li>* Vacunación incompleta: 07 días</li>
                    <li>
                      * Mayores de 60 años o con comorbilidades: 07 días (se
                      puede realizar una prueba molecular PCR al tercer día, de
                      ser negativa se puede concluir aislamiento
                    </li>
                    <li>
                      * Persona sin factores de riesgo y con vacunación
                      completa: no requiere aislamiento
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <h3 className=" text-xl text-center font-semibold text-white">
                Flujo de Aislamiento de personas que habitan con personas
                positivas a COVID-19
              </h3>
              <div className="w-10/12 ">
                <Image
                  className="object-cover"
                  alt="img2"
                  src={img2}
                  placeholder="blur"
                  quality={50}
                />
              </div>
              <p className="underline hover:text-blue-500 text-white text-xs">
              <span className="font-semibold"> Fuente:{" "}</span> 
                <a
                  href="https://cdn.www.gob.pe/uploads/document/file/2773889/Anexo.pdf?v=1642770555"
                  target="blank"
                >
                  https://cdn.www.gob.pe/uploads/document/file/2773889/Anexo.pdf?v=1642770555{" "}
                </a>
              </p>
            </div>
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5 ">
              <h3 className=" text-xl text-center font-semibold text-white">
                Flujo de Aislamiento
              </h3>
              <div className="w-[40rem] bg-white flex flex-col gap-2 p-5 relative component rounded-md">
                <div className="text-left flex flex-col gap-2">
                  <p>
                    Para prevenir la infección y frenar la transmisión de la 
                   <span className="text-orange-600"> COVID-19</span> , haga lo siguiente:
                  </p>
                  <ul>
                    <li>
                      * Vacúnese cuando haya una vacuna disponible para usted.
                    </li>
                    <li>
                      * Manténgase al menos a 1 metro de distancia de los demás.
                    </li>
                    <li>
                      * Utilice una mascarilla bien ajustada, según las
                      recomendaciones actualizadas del Ministerio de salud.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-[25rem] ">
                <Image
                  className="object-cover"
                  alt="img2"
                  src={img3}
                  placeholder="blur"
                  quality={50}
                />
              </div>
            </div>
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-[40rem] bg-white flex flex-col gap-2 p-5 relative component rounded-md">
                <div className="text-left flex flex-col gap-2">
                  <ul>
                    <li>
                      * Elija los espacios abiertos y bien ventilados en lugar
                      de los cerrados. Abra una ventana si está en el interior.
                    </li>
                    <li>
                      * Lávese las manos regularmente con agua y jabón o
                      límpielas con un desinfectante de manos a base de alcohol.
                      (acá se puede ampliar una imagen sobre la importancia del
                      lavado de manos: Importancia del lavado de manos -
                      Orientación - Ministerio de Salud - Gobierno del Perú{" "}
                      <a
                        className=""
                        target="blank"
                        href="https://www.gob.pe/"
                      >
                      
                        <ButtonLink text="www.gob.pe" />
                      </a>{" "}
                      )
                    </li>
                    <li>* Cúbrase la boca y la nariz al toser o estornudar.</li>
                    <li>
                      * Si se siente mal, quédese en casa y aíslese hasta que se
                      recupere.
                    </li>
                  </ul>
                  <p>
                    Fuente:{" "}
                    <a
                      className="underline hover:text-blue-500"
                      target="blank"
                      href="https://www.gob.pe/"
                    >
                      {" "}
                      Coronavirus (who.int) y Campaña de prevención contra la
                      COVID-19 - Campañas - Ministerio de Salud - Gobierno del
                      Perú (www.gob.pe){" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
          <a
            onClick={toggleViewAlarmaPrevencion}
            className="cursor-pointer absolute top-0 -right-5 text-white text-xl font-semibold"
          >
            <img className="w-4 lg:w-6" src="/img/closeModal.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalAlarmaPrevencion;
