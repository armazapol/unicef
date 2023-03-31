import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import close from "../../public/img/closeModal.png";
import img1 from "../../public/img/view3/nuevasVacunas/img1.png";
import img2 from "../../public/img/view3/nuevasVacunas/img2.png";
import ButtonLink from "../commons/button/ButtonLink";

type Props = {
  toggleViewVacunacionHepatitisA: () => void;
  nextViewModule: () => void;
};

const ModalVacunacionHepatitisA = ({
  toggleViewVacunacionHepatitisA,
  nextViewModule
}: Props) => {

  const nextModule = () => {
    nextViewModule()
    toggleViewVacunacionHepatitisA()
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
        onClick={nextModule}
        className="cursor-pointer absolute right-14 top-4 lg:right-20 lg:top-10 text-white text-xl font-semibold "
      >
        <img className="w-4 lg:w-6" src="/img/arrowNext.png" alt="Siguiente módulo" />
      </a>
         <a
        onClick={toggleViewVacunacionHepatitisA}
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
              <div className="w-10/12 lg:w-[40rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex flex-col gap-2 p-5 relative component rounded-md overflow-auto text-sm lg:text-base">
                <h3 className="text-base lg:text-xl text-center font-semibold">
                  Vacunación hepatitis A
                </h3>
                <div className="text-left flex flex-col gap-2">
                  <p>
                    En la actualización del Esquema Nacional de Vacunación se
                    incluye a la vacuna contra la Hepatitis A.
                  </p>
                  <p>
                    La hepatitis A es una enfermedad del hígado causada por el
                    virus de la hepatitis A. Los niños con este virus por lo
                    general no tienen síntomas, pero a menudo contagian la
                    enfermedad a otras personas, incluidos sus padres o las
                    personas que los cuidan que no se hayan vacunado. Estas
                    personas se pueden enfermar gravemente.
                  </p>
                  <p>
                    La prevalencia del anticuerpo contra la hepatitis A
                    (anti-HAV) se correlaciona de forma inversa con el estatus
                    socioeconómico y el estándar de higiene en una región. En
                    áreas altamente endémicas, su prevalencia es casi universal
                    a los 5 años de edad, mientras que en los países
                    industrializados su prevalencia global es inferior al 5%.
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-10/12 lg:w-[40rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex flex-col gap-2 p-5 relative component rounded-md overflow-auto text-sm lg:text-base">
                <div className="text-left flex flex-col gap-2">
                  <p className="">
                  Los niños menores de 6 años por lo general no tienen ningún síntoma. Los niños mayores y los adultos se sienten muy mal y débiles. Los síntomas aparecen, por lo general, entre 2 a 6 semanas después de que una persona contraiga el virus.	Estos síntomas pueden incluir los siguientes:
                  </p>
                  <ul>
                    <li>
                      * Fiebre
                    </li>
                    <li>
                      *	Pérdida del apetito
                    </li>
                    <li>* Cansancio</li>
                    <li>* Dolor de estómago</li>
                    <li>* Vómitos</li>
                    <li>* Orina oscura</li>
                    <li>* Piel y ojos amarillos</li>
                  </ul>
                  <p>
                  El virus de la hepatitis A se encuentra en las heces de las personas que lo tienen. Se propaga cuando alguien se lleva a la boca algo que contiene el virus de la hepatitis A. Aunque se vea limpio, este artículo aún puede contener virus que podrían propagarse a otras personas. La cantidad de heces puede ser tan pequeña que no pueda verse a simple vista. Se puede contraer la hepatitis A mediante la ingesta de alimentos o agua que tengan el virus.
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-10/12 lg:w-[40rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex flex-col gap-2 p-5 relative component rounded-md overflow-auto text-sm lg:text-base">
                <div className="text-left flex flex-col gap-2">
                  <p>
                  La complicación más temida es la hepatitis fulminante, caracterizada por una rápida progresión a insuficiencia hepática asociando encefalopatía. Si bien solo el 1% -2% de todos los casos de hepatitis virales agudas se complican con hepatitis fulminante, el 75% de los casos de hepatitis fulminante son causados por hepatitis virales.
                  </p>
                  <p>
                  El esquema contempla una sola dosis a los 15 meses de edad. Las probables reacciones luego de la administración son leves e incluyen dolor local y, con menor frecuencia, induración en el sitio de la inyección, pérdida de apetito, somnolencia, cefalea o febrícula.
                  </p>
                  <p className="underline hover:text-blue-500  text-sm">
                    <span className="font-semibold"> Fuente: </span>
                    <a href="https://www.cdc.gov/vaccines/parents/diseases/hepa-sp.html" target="blank">
                    Vacunas infantiles contra la hepatitis A | CDC, Hepatitis A (scielo.sa.cr), Norma Técnica de Salud - NTS N° 196-MINSA/DGIESP-2022zyxwvutsrqponmlkjihgfedcbaZYXWVUTS I. II. - Studocu	
                    </a>
                  </p>
                </div>
              </div>
            </div>

          </Carousel>
        </div>
 
    </div>
  );
};

export default ModalVacunacionHepatitisA;
