import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import img1 from "../../public/img/view1/variantes/img1.png";

type Props = {
  toggleViewEfectosSecundarios: () => void;
};

const ModalEfectosSecundarios = ({ toggleViewEfectosSecundarios }: Props) => {
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
      // onClick={toggleViewEfectosSecundarios}
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
                <h3 className=" text-xl text-center font-semibold">Efectos secundarios</h3>
                <div className="text-left flex flex-col gap-2">
                  <p>
                  Las vacunas están concebidas para conferir inmunidad sin correr el riesgo de presentar la 	enfermedad contra la que protegen. Tras vacunarse, algunas personas presentan síntomas de 	leves a moderados que se deben a que su sistema inmunitario está haciendo que su organismo 	reaccione de una determinada manera, por ejemplo, aumentando la circulación de la sangre 	para que se distribuyan más células inmunitarias y aumentando la temperatura corporal para 	matar más fácilmente a los virus.
                  </p>
                  <p>Estos efectos de leves a moderados, como febrícula o dolores musculares, son normales y no deben causar alarma, pues indican que el sistema inmunitario está respondiendo a la vacuna o, más concretamente, al antígeno (es decir, la molécula que desencadena la respuesta inmunitaria) y de que se está preparando para luchar contra el virus. Por lo general, los efectos secundarios desaparecen espontáneamente a los pocos días. </p>
                  <p>Los efectos secundarios habituales de una intensidad de leve moderada son un buen signo que nos indica que la vacuna está funcionando. No obstante, la ausencia de efectos secundarios no significa que la vacuna no sea eficaz, porque cada persona reacciona de forma distinta a las vacunas.</p>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-[40rem] bg-white flex flex-col gap-2 p-5 relative component rounded-md">
                <h3 className=" text-xl text-center font-semibold">Efectos secundarios habituales de las vacunas contra la COVID-19</h3>
                <div className="text-left flex flex-col gap-2">
                  <p>
                  Como cualquier vacuna, las que protegen contra la COVID-19 pueden causar efectos 		secundarios, la mayoría de los cuales son leves o moderados y desaparecen espontáneamente a 	los pocos días. Los resultados de los ensayos clínicos muestran que también pueden aparecer 	efectos secundarios más graves o duraderos. En cualquier caso, siempre se mantiene una 	vigilancia para detectar cualquier efecto adverso. 
                  </p>
                  <p>Algunos de los efectos secundarios típicos son dolor en el lugar de inyección, fiebre, cansancio, 	cefaleas, mialgias, escalofríos y diarrea. La probabilidad de que ocurran varía en función de cada 	vacuna.  </p>
                  <p>Las vacunas contra la COVID-19 protegen solamente contra el virus SARS-CoV-2, por lo que es 	importante mantener también un buen estado de salud. .</p>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-[40rem] bg-white flex flex-col gap-2 p-5 relative component rounded-md">
                <h3 className=" text-xl text-center font-semibold">
                Efectos adversos menos frecuentes
                </h3>
                <div className="text-left flex flex-col gap-2">
                  <p>
                  Cuando se vacuna a una persona, es posible que se le pida esperar de 15 a 30 minutos en el 	lugar de vacunación para que pueda ser atendida por trabajadores de la salud en caso de que 	presente alguna reacción inmediata. Las personas vacunadas deben avisar a los profesionales 	sanitarios de cualquier efecto secundario inesperado o de otros problemas de salud tras la 	vacunación, por ejemplo, los efectos secundarios que duren más de tres días. Uno de los efectos 	secundarios menos frecuentes que se han notificado con las vacunas contra la COVID-19 son las 	reacciones alérgicas graves (como casos de anafilaxia); sin embargo, esta reacción es muy 	infrecuente. 
                  </p>
                  <p>Las autoridades nacionales y los organismos internacionales, entre ellos la OMS, hacen un 	seguimiento atento del uso de estas vacunas a fin de detectar posibles efectos adversos		inesperados.</p>
                  <p>
                    Fuente:{" "}
                    <a
                      className="underline hover:text-blue-500 text-black"
                      href="https://www.who.int/es/news-room/feature-stories/detail/side-effects-of-covid-19-vaccines"
                      target="blank"
                    >
                      Efectos secundarios de las vacunas contra la COVID-19 (who.int)
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
          <a
            onClick={toggleViewEfectosSecundarios}
            className="cursor-pointer absolute top-0 -right-5 text-white text-xl font-semibold"
          >
              <img className="w-4 lg:w-6" src="/img/closeModal.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalEfectosSecundarios;
