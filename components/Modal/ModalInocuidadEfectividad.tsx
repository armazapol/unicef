import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import img1 from "../../public/img/view2/newModal18.jpg"; //cambiar
import img2 from "../../public/img/view2/newModal14.png"; 
import img3 from "../../public/img/view2/newModal13.png"; 
import img4 from "../../public/img/view2/newModal19.jpg"; 
import img5 from "../../public/img/view2/newModal15.png"; 

type Props = {
  toggleViewInocuidadEfectividad: () => void;
  nextViewModule: () => void;
};

const ModalInocuidadEfectividad = ({
  toggleViewInocuidadEfectividad,
  nextViewModule
}: Props) => {

  const nextModule = () => {
    nextViewModule()
    toggleViewInocuidadEfectividad()
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
      // onClick={toggleViewInocuidadEfectividad}
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
        onClick={toggleViewInocuidadEfectividad}
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
            className="  w-full h-full relative  carousel1"
          >
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-10/12 lg:w-[50rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex gap-2 p-5 lg:p-20 relative component rounded-md overflow-auto">
                <div className="flex-1 overflow-y-auto">
                <h3 className="text-base lg:text-xl text-center font-semibold">
                  Inocuidad de las vacunas
                </h3>
                <div className="text-left flex flex-col gap-2 text-sm lg:text-base">
                  <p>
                    La inocuidad de las vacunas es una cuestión que interesa a
                    todos y una de las máximas prioridades para la OMS. Nuestra
                    organización colabora estrechamente con las autoridades
                    nacionales para elaborar y aplicar normas que garanticen la
                    inocuidad y la eficacia de estas vacunas.
                  </p>
                  <p>
                    Miles de millones de personas se han vacunado de forma
                    segura contra la <span className="text-orange-600">COVID-19</span>. Todas ellas se han sometido a
                    ensayos rigurosos y continúan siendo evaluadas.{" "}
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
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-10/12 lg:w-[55rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex gap-2 p-5 lg:p-10 relative component rounded-md overflow-auto">
                <div className="text-sm lg:text-base text-left flex flex-col gap-2 flex-1 overflow-y-auto">
                  <p>
                    Como se hace con todas las vacunas, las que se desarrollan
                    contra la <span className="text-orange-600">COVID-19</span> pasan por un proceso riguroso de varias
                    fases que incluye, por ejemplo, la realización de amplios
                    ensayos clínicos con decenas de miles de personas. Estos
                    ensayos están específicamente diseñados para detectar
                    cualquier efecto secundario u otros problemas de falta de
                    inocuidad. Un comité de expertos externo convocado por la
                    OMS analiza los resultados de los ensayos clínicos y
                    recomienda las vacunas que deben utilizarse y el modo de
                    usarlas. Posteriormente, incumbe a las autoridades de cada
                    país autorizar o no el uso de cada vacuna en sus
                    jurisdicciones y elaborar políticas para administrarlas, a
                    partir de las recomendaciones de la OMS. Una vez introducida
                    una vacuna contra la <span className="text-orange-600">COVID-19</span>, la OMS presta apoyo a la
                    labor de los fabricantes, los funcionarios sanitarios de
                    cada país y otros asociados para hacer un seguimiento
                    continuo de cualquier posible problema relativo a su
                    seguridad.
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
                    onClick={() => window.open("/img/view2/newModal14.png")}
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
              <div className="w-10/12 lg:w-[50rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex  gap-2 p-5 lg:p-20 relative component rounded-md overflow-auto">
                <div className="flex-1 overflow-y-auto">
                <h3 className="text-base lg:text-xl text-center font-semibold">
                  Efectividad de las vacunas
                </h3>
                <div className="text-sm lg:text-base text-left flex flex-col gap-2">
                  <p className="">
                    En un metaanálisis publicado en noviembre del 2021, se
                    revisaron 51 estudios para estudiar la efectividad de las
                    vacunas contra
                  </p>
                  <ul>
                    <li>* Síndrome respiratorio agudo severo: 89.1%.</li>
                    <li>* Hospitalización relacionada a <span className="text-orange-600">COVID-19</span>: 97.2%.</li>
                    <li>
                      * Ingreso a UCI (unidad de cuidados intensivos): 97.4%.
                    </li>
                    <li>* Fallecimiento: 99.0%.</li>
                  </ul>
                </div>
                <p className="text-left text-sm">
                <span className="font-semibold"> Fuente:{" "}</span> 
                  <a
                    className="underline hover:text-blue-500 text-black"
                    href="https://pubmed.ncbi.nlm.nih.gov/34800687/"
                    target="blank"
                  >
                    Zheng C, Shao W, Chen X, Zhang B, Wang G, Zhang W.
                    Real-world effectiveness of COVID-19 vaccines: a literature
                    review and meta-analysis. Int J Infect Dis. 2022
                    Jan;114:252-260. doi: 10.1016/j.ijid.2021.11.009. Epub 2021
                    Nov 17. PMID: 34800687; PMCID: PMC8595975.
                  </a>{" "}
                </p>
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
                    onClick={() => window.open("/img/view2/newModal13.png")}
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
              <div className="w-10/12 lg:w-[50rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex gap-2 p-5 lg:p-20 relative component rounded-md overflow-auto">
                <div className="text-sm lg:text-base text-left flex flex-col gap-2 flex-1 overflow-y-auto">
                  <p>
                    En otro metaanálisis publicado en julio del 2022, se
                    encontró que tener un esquema completo de vacunas mostró una
                    protección efectiva contra la variante ómicron, comparada
                    con los no vacunados, con una disminución de efectividad a
                    partir de los 6 meses luego de la última dosis, sugiriendo
                    la importancia del uso de dosis de refuerzo (booster).
                  </p>
                  <p className="text-sm">
                  <span className="font-semibold"> Fuente:{" "}</span> 
                    <a
                      className="underline hover:text-blue-500 text-black"
                      href="https://pubmed.ncbi.nlm.nih.gov/35910897/"
                      target="blank"
                    >
                      Zou Y, Huang D, Jiang Q, Guo Y, Chen C. The Vaccine
                      Efficacy Against the SARS-CoV-2 Omicron: A Systemic Review
                      and Meta-Analysis. Front Public Health. 2022 Jul
                      13;10:940956. doi: 10.3389/fpubh.2022.940956. PMID:
                      35910897; PMCID: PMC9326247.
                    </a>{" "}
                  </p>
                </div>
                <div className="relative flex-1">
                  <Image
                    className="object-cover rounded-md"
                    alt="img1"
                    src={img4}
                    placeholder="blur"
                    fill
                    quality={50}
                  />
                  <a
                    onClick={() => window.open("/img/view2/newModal19.jpg")}
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
              <div className="w-10/12 lg:w-[50rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex  gap-2 p-5 lg:p-10 relative component rounded-md overflow-auto">
                <div className="text-sm lg:text-base text-left flex flex-col gap-2 flex-1 overflow-y-auto">
                  <p>
                  En otro estudio danés, se estimó la efectividad de la vacuna contra la infección y hospitalización.  Encontraron que contar con dos dosis de vacuna proveía una alta protección contra infección y hospitalización por <span className="text-orange-600">COVID-19</span>. Una tercera dosis incrementaba sustancialmente el nivel y la duración de la protección, especialmente en población mayor a 60 años.
                  </p>
                  <p className="text-sm">
                  <span className="font-semibold"> Fuente:{" "}</span> 
                    <a
                      className="underline hover:text-blue-500 text-black"
                      href="https://pubmed.ncbi.nlm.nih.gov/36048766/"
                      target="blank"
                    >
                     Gram MA, Emborg HD, Schelde AB, Friis NU, Nielsen KF, Moustsen-Helms IR, Legarth R, Lam JUH, Chaine M, Malik AZ, Rasmussen M, Fonager J, Sieber RN, Stegger M, Ethelberg S, Valentiner-Branth P, Hansen CH. Vaccine effectiveness against SARS-CoV-2 infection or COVID-19 hospitalization with the Alpha, Delta, or Omicron SARS-CoV-2 variant: A nationwide Danish cohort study. PLoS Med. 2022 Sep 1;19(9):e1003992. doi: 10.1371/journal.pmed.1003992. PMID: 36048766; PMCID: PMC9436060.
                    </a>{" "}
                  </p>
                </div>
                <div className="relative flex-1">
                  <Image
                    className="object-cover rounded-md"
                    alt="img1"
                    src={img5}
                    placeholder="blur"
                    fill
                    quality={50}
                  />
                  <a
                    onClick={() => window.open("/img/view2/newModal15.png")}
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

export default ModalInocuidadEfectividad;
