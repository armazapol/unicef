import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import close from "../../public/img/closeModal.png";
import img1 from "../../public/img/view3/vph/img1.png";
import ButtonLink from "../commons/button/ButtonLink";

type Props = {
  toggleViewVPH: () => void;
};

const ModalVPH = ({ toggleViewVPH }: Props) => {
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
        onClick={toggleViewVPH}
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
            showIndicators={false}
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
                  Vacuna contra el Virus Papiloma Humano (VPH)
                </h3>
                <div className="text-left flex flex-col gap-2">
                  <p>
                    En nuestro país contamos dentro del Esquema Nacional de
                    Vacunación, con la vacuna contra el virus del papiloma
                    humano (VPH), la cual previene el desarrollo de cáncer
                    cervical causado por el virus del papiloma humano (VPH)
                    tipos 16 y 18, la neoplasia intraepitelial cervical (NIC)
                    grado I y II y las verrugas genitales causadas por el VPH 6
                    y 11.
                  </p>
                  <p>
                    En mujeres el virus del Papiloma Humano es la principal
                    causa del cáncer de cuello uterino, vulva y vagina. En
                    hombres, la infección crónica por VPH, en raras ocasiones,
                    puede producir cáncer de pene o cáncer de ano.
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-10/12 lg:w-[40rem] h-[14rem] sm:h-[15rem] lg:h-auto bg-white flex flex-col gap-2 p-5 relative component rounded-md overflow-auto text-sm lg:text-base">
                <div className="text-left flex flex-col gap-2">
                  <p className="font-semibold">
                    Se aplican dos dosis a niñas, según las siguientes
                    indicaciones:{" "}
                  </p>
                  <ul>
                    <li>
                      * En niñas del 5to grado de primaria regular de
                      Instituciones Educativas Públicas y Privadas y niñas que
                      por alguna razón no estén estudiando que tengan de 9 a 13
                      años de edad.
                    </li>
                    <li>
                      * La 1ra dosis se aplicará al primer contacto con el
                      servicio de salud y la 2da dosis: a los 6 meses de la 1ra
                      dosis. Una de las modificaciones en este Esquema Nacional
                      de Vacunación, es que a partir del 2023 se aplicará 1 sola
                      dosis.
                    </li>
                  </ul>
                  <p className="font-semibold">
                    Otro cambio dentro del Esquema Nacional de Vacunación es el
                    inicio de la inmunización contra VPH en varones de 9 a 13
                    años, esto desde el año 2023, según las siguientes
                    indicaciones:{" "}
                  </p>
                  <ul>
                    <li>
                      * Una dosis para niños del 5to grado de primaria regular
                      de Instituciones Educativas públicas y privadas y niños
                      que por alguna razón no estén estudiando que tengan de 9 a
                      13 años de edad
                    </li>
                    <li>
                      * 1ra dosis: al primer contacto con el servicio de salud
                    </li>
                  </ul>
                  <p>
                    Como posibles efectos luego de la aplicación tenemos:
                    enrojecimiento en la zona de aplicación, adormecimiento de
                    la zona de inyección, alza térmica y sensación de fatiga.
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <h3 className="text-base lg:text-xl text-center font-semibold text-white">
              Mitos sobre la vacuna contra el Virus del Papiloma Humano
                  (VPH)
              </h3>
              <div className="w-5/12 lg:w-[50rem] relative group">
                <Image
                  className="object-cover"
                  alt="img2"
                  src={img1}
                  placeholder="blur"
                  quality={50}
                />
                <a
                  onClick={() => window.open("/img/view3/vph/img1.png")}
                  className="cursor-pointer absolute left-5 bottom-5 text-white text-xl font-semibold hidden group-hover:block"
                >
                  <img
                    className="w_loop hidden lg:block "
                    src="/img/lupa.png"
                    alt=""
                  />
                </a>
              </div>
              <p className="underline hover:text-blue-500  text-xs text-white">
                <span className="font-semibold"> Fuente: </span>
                <a
                  href="https://www.gob.pe/21473"
                  target="blank"
                >
                  Mitos sobre la vacuna contra el Virus del Papiloma Humano (VPH) - Orientación - Ministerio de Salud - Gobierno del Perú (www.gob.pe)
                </a>
              </p>
            </div>

          </Carousel>
        </div>
     
    </div>
  );
};

export default ModalVPH;
