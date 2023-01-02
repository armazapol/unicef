import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import img1 from "../../public/img/view2/tiposvacunas/img1.png";
import img2 from "../../public/img/view2/tiposvacunas/img2.png";

type Props = {
  toggleViewTiposVacunas: () => void;
};

const ModalTiposVacunas = ({ toggleViewTiposVacunas }: Props) => {
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
      // onClick={toggleViewTiposVacunas}
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
                  Tipos de vacunas
                </h3>

                <div className="text-left flex flex-col gap-2">
                  <p className="font-semibold">
                    Actualmente los principales tipos de vacunas disponibles
                    son:
                  </p>
                  <ul>
                    <li>
                      * Vacuna - virus inactivado: Contienen porciones inocuas
                      de las proteínas del virus que causa el COVID-19. Al
                      recibir la vacuna, nuestro organismo reconoce que esa
                      proteína no debería estar presente y crea linfocitos T y
                      anticuerpos que recordarán cómo defenderse del virus que
                      causa el COVID-19 en caso de infección. Ejemplo:
                      Sinopharm.
                    </li>
                    <li>
                      * Vacuna - ARM mensajero: contienen material del virus que
                      causa el COVID-19, el cual instruye a nuestras células a
                      crear una proteína inocua que es exclusiva del virus, de
                      esta manera el organismo reconoce que esa proteína no
                      debería estar presente y crea linfocitos T y B que
                      recordarán cómo defenderse del virus que causa el COVID-19
                      en caso de infección. Ejemplos: Pfizer – BioNTech.
                    </li>
                    <li>
                      * Vacuna con vector vírico: Contienen una versión
                      modificada de un virus diferente, que en su envoltura
                      contiene un vector viral (contiene material del virus que
                      causa el COVID-19). Una vez que el vector viral entra en
                      las células, el material genético instruye la producción
                      de una proteína que es exclusiva del virus que causa el
                      COVID-19, de esta manera nuestras células hacen copias de
                      la proteína. Se producen linfocitos T y B que recordarán
                      cómo defenderse del virus que causa COVID-19 en caso de
                      infección. Ejemplos: AstraZeneca
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-6/12 ">
                <Image
                  className="object-cover"
                  alt="img1"
                  src={img1}
                  placeholder="blur"
                  quality={50}
                />
              </div>
              <p className="underline hover:text-blue-500 text-white">
                Fuente:{" "}
                <a
                  href="http://www.medicina.uanl.mx/noticias/coronavirus/covid-19-tipos-de-vacunas/"
                  target="blank"
                >
                  Anexo de RM N°239-2022-MINSA.pdf (www.gob.pe) y COVID-19:
                  Tipos de vacunas | Facultad de Medicina UANL
                </a>
              </p>
            </div>
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-[40rem] bg-white flex flex-col gap-2 p-5 relative component rounded-md">
                <h3 className=" text-xl text-center font-semibold">
                  Esquema de vacunación contra COVID-19
                </h3>

                <div className="text-left flex flex-col gap-2">
                  <div className="flex flex-col">
                    <h4 className="font-semibold">
                      Vacuna con virus inactivo: Sinopharm
                    </h4>
                    <p>Primera dosis al primer contacto</p>
                    <p>
                      Segunda dosis a los 21 días después de la primera dosis
                    </p>
                    <p>
                      Tercera dosis a los 3 meses después de aplicada la segunda
                      dosis (su aplicación será heterólogo)
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-semibold">
                      Vacuna ARN mensajero: BioNTech – Pfizer
                    </h4>
                    <p>Primera dosis al primer contacto</p>
                    <p>
                      Segunda dosis a los 21 días después de la primera dosis
                    </p>
                    <p>
                      Tercera dosis a los 3 meses después de aplicada la segunda
                      dosis (su aplicación será heterólogo)
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-semibold">
                      Vacuna con vector vírico: AstraZeneca
                    </h4>
                    <p>Primera dosis al primer contacto</p>
                    <p>
                      Segunda dosis a las 4 semanas de aplicada la primera dosis
                    </p>
                    <p>
                      Tercera dosis a los 3 meses después de aplicada la segunda
                      dosis (su aplicación será heterólogo)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-[40rem] bg-white flex flex-col gap-2 p-5 relative component rounded-md">
                <h3 className=" text-xl text-center font-semibold">
                  Esquemas según edades:
                </h3>

                <div className="text-left flex flex-col gap-2">
                  <div className="flex flex-col">
                    <h4 className="font-semibold">
                      Adolescentes de 12 a 17 años
                    </h4>
                    <p>Primera dosis con Pfizer: día 0.</p>
                    <p>Segunda dosis será con Pfizer: día 21.</p>
                    <p>
                      Tercera dosis será con Pfizer o moderna: 5 meses después
                      de aplicada la segunda dosis. Si el adolescente tiene
                      comorbilidades, la aplicación de la tercera dosis será 3
                      meses después de la segunda.
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-semibold">Mayores de 18 años</h4>
                    <div className="flex flex-col gap-2">
                      <div>
                        <p>Si te vacunan con Sinopharm:</p>
                        <p>Primera dosis: día 0.</p>
                        <p>Segunda dosis será con Sinopharm: día 21.</p>
                        <p>
                          Tercera dosis será con AstraZeneca o Pfizer: 3 meses
                          después de aplicada la segunda dosis.
                        </p>
                      </div>
                      <div>
                        <p>Si te vacunan con Pfizer:</p>
                        <p>Primera dosis: día 0.</p>
                        <p>Segunda dosis será con Pfizer: día 21.</p>
                        <p>
                          Tercera dosis será con AstraZeneca o Pfizer (Sujeto a
                          disponibilidad de stock): 3 meses después de aplicada
                          la segunda dosis.
                        </p>
                      </div>
                      <div>
                        <p>Si te vacunan con AstraZeneca:</p>
                        <p>Primera dosis: día 0.</p>
                        <p>Segunda dosis será con AstraZeneca: día 28.</p>
                        <p>
                          Tercera dosis será con Pfizer: 3 meses después de
                          aplicada la segunda dosis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-6/12 ">
                <Image
                  className="object-cover"
                  alt="img1"
                  src={img2}
                  placeholder="blur"
                  quality={50}
                />
              </div>
            </div>
            <div className=" flex items-center justify-center  relative flex-col h-full gap-5">
              <div className="w-[40rem] bg-white flex flex-col gap-2 p-5 relative component rounded-md">
                <h3 className=" text-xl text-center font-semibold">
                  Importante
                </h3>

                <div className="text-left flex flex-col gap-2">
                  <p className="font-semibold">
                    Puedes recibir la aplicación de tu cuarta dosis de la vacuna
                    contra la COVID-19:
                  </p>
                  <ul>
                    <li>
                      * Si tienes 18 años a más y 5 meses desde tu tercera
                      dosis.
                    </li>
                    <li>
                      * Si tienes 60 años a más y 4 meses desde tu tercera
                      dosis.
                    </li>
                    <li>
                      * Si eres paciente inmunosuprimido y tienes 5 meses desde
                      tu tercera dosis.
                    </li>
                    <li>
                      * Si tienes 18 años a más, presentas alguna comorbilidad y
                      5 meses desde tu tercera dosis.
                    </li>
                    <li>
                      * Si eres integrante de un colegio profesional de salud y
                      tienes 5 meses desde tu tercera dosis.
                    </li>
                    <li>
                      * Si por algún motivo no pudiste vacunarte con tu segunda
                      o tercera dosis según la fecha anotada en tu carnet de
                      vacunación, puedes acudir al centro de vacunación más
                      cercano para que te apliquen tu dosis pendiente.
                    </li>
                  </ul>
                  <p>
                    Actualmente, en el Perú se aplican las vacunas de los
                    laboratorios Pfizer, Sinopharm, AstraZeneca y Moderna.
                  </p>
                  <p>
                    Fuente:{" "}
                    <a
                      className="underline hover:text-blue-500 text-black"
                      href="https://www.gob.pe/21301"
                      target="blank"
                    >
                      Anexo de RM N°239-2022-MINSA.pdf (www.gob.pe) -
                      Coronavirus: esquema de vacunación contra la COVID-19 -
                      Orientación - Ministerio de Salud - Gobierno del Perú
                      (www.gob.pe) Protocolo .pdf (www.gob.pe)
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
          <a
            onClick={toggleViewTiposVacunas}
            className="cursor-pointer absolute top-0 -right-5 text-white text-xl font-semibold"
          >
              <img className="w-4 lg:w-6" src="/img/closeModal.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalTiposVacunas;
