import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import ButtonLink from "../commons/button/ButtonLink";
import img1 from "../../public/img/view1/newModal2.jpg";

type Props = {
  toggleViewAntecedentes: () => void;
};

const ModalAntecedentes = ({ toggleViewAntecedentes }: Props) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".modal", { opacity: 0.1 }, { opacity: 1, duration: 1.5 });
    tl.fromTo(".component", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);
  return (
    <div
      className="fullvh lg:h-screen w-full z-60 bg-black/60 flex items-center justify-center fixed modal"
      // onClick={toggleViewAntecedentes}
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
        onClick={toggleViewAntecedentes}
        className="cursor-pointer absolute right-4 top-4 lg:right-10 lg:top-10 text-white text-xl font-semibold "
      >
        <img className="w-4 lg:w-6" src="/img/closeModal.png" alt="" />
      </a>
      <div className="w-10/12 md:w-[70rem] bg-white flex  gap-2 p-5 relative component rounded-md h-5/6 lg:h-auto overflow-x-hidden overflow-y-auto text-sm lg:text-base">
        <div className="flex-1 overflow-y-auto">
          <h2 className="font-semibold text-base lg:text-lg">Antedecentes</h2>
          <p>
            A finales del año 2019, un nuevo coronavirus fue identificado como
            la causa de un brote de casos de neumonía en Wuhan, en la provincia
            de Hubei, en China. Su rápida propagación llevo a que la OMS
            (Organización Mundial de la Salud) declarara la emergencia de salud
            pública a finales de enero del 2020 y se declarara pandemia en marzo
            del mismo año.
          </p>
          <p>
            En nuestro país, se decretó el Estado de Emergencia Sanitaria a
            nivel nacional, con medidas de prevención y control del{" "}
            <span className="text-orange-600">COVID-19</span>, el 11 de marzo
            del 2020, mediante Decreto supremo N°008-2020-SA.
            <a
              className="underline hover:text-blue-500"
              href="https://cdn.www.gob.pe/uploads/document/file/1206594/DS_N__008-2020-SA.pdf?v=1596682779"
              target="blank"
            >
              <ButtonLink text="(Normas_Legales_20200311_EXTRAORDINARIA.indd (www.gob.pe))" />
            </a>
          </p>
          <p>
            La enfermedad por coronavirus (
            <span className="text-orange-600">COVID-19</span>) es una enfermedad
            infecciosa causada por el virus{" "}
            <span className="text-orange-600">SARS-CoV-2</span> (severe acute
            respiratory syndrome coronavirus 2).{" "}<br></br>
            <a
              className=""
              href="https://www.who.int/es/health-topics/coronavirus#tab=tab_1"
              target="blank"
            >
              {" "}
              <ButtonLink text="Coronavirus (who.int)" />
            </a>
          </p>
          <p>
            A nivel mundial, a la fecha se han registrado 649,247,184 casos
            confirmados y 6,653,453 fallecidos{" "}
            <a
              className="underline hover:text-blue-500 text-sm"
              href="https://coronavirus.jhu.edu/map.html"
              target="blank"
            >
              {" "}
              (Fuente: COVID-19 Map - Johns Hopkins Coronavirus Resource Center
              (jhu.edu))
            </a>
          </p>
          <p>
            A diciembre del presente en nuestro país se tienen 4,304,745 casos
            confirmados de <span className="text-orange-600">COVID-19</span> y
            217,519 fallecidos, según la sala situacional del Ministerio de
            Salud{" "}
            <a
              className="underline hover:text-blue-500"
              href="https://covid19.minsa.gob.pe/sala_situacional.asp"
              target="blank"
            >
              <ButtonLink text="(Covid 19 en el Perú - Ministerio del Salud (minsa.gob.pe)" />
            </a>
          </p>
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
                  onClick={() => window.open("/img/view1/newModal2.jpg")}
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
  );
};

export default ModalAntecedentes;
