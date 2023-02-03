import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { gsap } from "gsap";
import slides from "./../../utils/SlidesCarrousel/slides.json";

import View1 from "../views/View1";
import Modal from "../Modal";
import ViewImages from "../Modal/ViewImages";
import Menu from "../Menu";
import MenuBurguer from "../MenuBurguer";

import View5 from "../views/View5";
import View15 from "../views/View15";
import ViewGeneral from "../ViewGeneral";
import ModalAntecedentes from "../Modal/ModalAntecedentes";
import ModalDiagnostico from "../Modal/ModalDiagnostico";
import ModalAlarmaPrevencion from "../Modal/ModalAlarmaPrevencion";
import ModalVarianteCovid from "../Modal/ModalVarianteCovid";
import ModalVacunas from "../Modal/ModalVacunas";
import ModalInmunidadColectiva from "../Modal/ModalInmunidadColectiva";
import ModalTiposVacunas from "../Modal/ModalTiposVacunas";
import ModalInocuidadEfectividad from "../Modal/ModalInocuidadEfectividad";
import ModalEmbarazoLactancia from "../Modal/ModalEmbarazoLactancia";
import ModalEfectosSecundarios from "../Modal/ModalEfectosSecundarios";
import ModalAvanceVacunacion from "../Modal/ModalAvanceVacunacion";
import ModalConsecuencias from "../Modal/ModalConsecuencias";
import ModalSintomas from "../Modal/ModalSintomas";
import ModalNuevasVacunas from "../Modal/ModalNuevasVacunas";
import ModalVPH from "../Modal/ModalVPH";
import ModalVacunacionHepatitisA from "../Modal/ModalVacunacionHepatitisA";
import View4 from "../views/View4";

//trivia
// import trivia1 from "../../utils/DataTrivia/module1/trivia1.json";
// import trivia2 from "../../utils/DataTrivia/module1/trivia2.json";
// import trivia3 from "../../utils/DataTrivia/module1/trivia3.json";
// import trivia4 from "../../utils/DataTrivia/module1/trivia4.json";
// import trivia5 from "../../utils/DataTrivia/module1/trivia5.json";
// import trivia6 from "../../utils/DataTrivia/module2/trivia1.json";
// import trivia7 from "../../utils/DataTrivia/module2/trivia2.json";
// import trivia8 from "../../utils/DataTrivia/module2/trivia3.json";
// import trivia9 from "../../utils/DataTrivia/module2/trivia4.json";
// import trivia10 from "../../utils/DataTrivia/module2/trivia5.json";
// import trivia11 from "../../utils/DataTrivia/module3/trivia1.json";
// import trivia12 from "../../utils/DataTrivia/module3/trivia2.json";
// import trivia13 from "../../utils/DataTrivia/module3/trivia3.json";
// import trivia14 from "../../utils/DataTrivia/module3/trivia4.json";
// import trivia15 from "../../utils/DataTrivia/module3/trivia5.json";
// import trivia16 from "../../utils/DataTrivia/module4/trivia1.json";
// import trivia17 from "../../utils/DataTrivia/module4/trivia2.json";
// import trivia18 from "../../utils/DataTrivia/module4/trivia3.json";
// import trivia19 from "../../utils/DataTrivia/module4/trivia4.json";
// import trivia20 from "../../utils/DataTrivia/module4/trivia5.json";
import ModalQuestSlide1 from "../Modal/ModalQuestSlide1";
import ModalQuestSlide2 from "../Modal/ModalQuestSlide2";
import ModalQuestSlide3 from "../Modal/ModalQuestSlide3";
import ModalQuestSlide4 from "../Modal/ModalQuestSlide4";
import ModalQuestSlide5 from "../Modal/ModalQuestSlide5";
import ModalQuestSlide6 from "../Modal/ModalQuestSlide6";
import ViewResults from "../ViewResults";
import ViewInit from "../ViewInit";
import ModalInit from "../Modal/Modalnit";
import ModalSignosAlarma from "../Modal/ModalSignosAlarma";

const Carousell = (props) => {
  // const [stateModalVideo, setStateModalVideo] = useState<boolean>(false);
  // const [stateModalImages, setStateModalImages] = useState<boolean>(false);
  // const [stateMenu, setStateMenu] = useState<boolean>(false);
  // const [stateHamburger, setStateHamburger] = useState<boolean>(false);
  // const [stateModalVideo, setStateModalVideo] = useState(false);
  // const [stateModalImages, setStateModalImages] = useState(false);
  const [stateModalAntecedentes, setStateModalAntecedentes] = useState(false);
  const [stateModalSignosAlarma, setStateModalSignosAlarma] = useState(false);
  const [stateModalDiagnostico, setStateModalDiagnostico] = useState(false);
  const [stateModalAlarmaPrevencion, setStateModalAlarmaPrevencion] =
    useState(false);
  const [stateModalVarianteCovid, setStateModalVarianteCovid] = useState(false);
  const [stateModalVacunas, setStateModalVacunas] = useState(false);
  const [stateModalInmunidadColectiva, setStateModalInmunidadColectiva] =
    useState(false);
  const [stateModalTiposVacunas, setStateModalTiposVacunas] = useState(false);
  const [stateModalInocuidadEfectividad, setStateModalInocuidadEfectividad] =
    useState(false);
  const [stateModalEmbarazoLactancia, setStateModalEmbarazoLactancia] =
    useState(false);
  const [stateModalEfectosSecundarios, setStateModalEfectosSecundarios] =
    useState(false);
  const [stateModalAvanceVacunacion, setStateModalAvanceVacunacion] =
    useState(false);
  const [stateModalConsecuencias, setStateModalConsecuencias] = useState(false);
  const [stateModalSintomas, setStateModalSintomas] = useState(false);
  const [stateModalNuevasVacunas, setStateModalNuevasVacunas] = useState(false);
  const [stateModalVPH, setStateModalVPH] = useState(false);
  const [stateModalVacunacionHepatitisA, setStateModalVacunacionHepatitisA] =
    useState(false);
  const [stateModalQuestSlide1, setStateModalQuestSlide1] = useState(false);
  const [stateModalQuestSlide2, setStateModalQuestSlide2] = useState(false);
  const [stateModalQuestSlide3, setStateModalQuestSlide3] = useState(false);
  const [stateModalQuestSlide4, setStateModalQuestSlide4] = useState(false);
  const [stateModalQuestSlide5, setStateModalQuestSlide5] = useState(false);
  const [stateModalQuestSlide6, setStateModalQuestSlide6] = useState(false);
  const [stateModalInit, setStateModalInit] = useState(false);
  const [stateHamburger, setStateHamburger] = useState(false);
  const [stateCarousel, setStateCarousel] = useState(0);
  const [stateSide, setStateSide] = useState("left");

  const [stateViewModule2, setStateViewModule2] = useState(false);
  const [stateViewModule3, setStateViewModule3] = useState(false);
  const [stateViewModule4, setStateViewModule4] = useState(false);

  const menuTimeline = useRef();

  const toggleViewAntecedentes = () => {
    setStateModalAntecedentes(!stateModalAntecedentes);
  };
  const toggleViewDiagnostico = () => {
    setStateModalDiagnostico(!stateModalDiagnostico);
  };
  const toggleViewSignosAlarma = () => {
    setStateModalSignosAlarma(!stateModalSignosAlarma);
  };
  const toggleViewAlarmaPrevencion = () => {
    setStateModalAlarmaPrevencion(!stateModalAlarmaPrevencion);
  };
  const toggleViewVarianteCovid = () => {
    setStateModalVarianteCovid(!stateModalVarianteCovid);
  };
  const toggleViewVacunas = () => {
    setStateModalVacunas(!stateModalVacunas);
  };
  const toggleViewInmunidadColectiva = () => {
    setStateModalInmunidadColectiva(!stateModalInmunidadColectiva);
  };
  const toggleViewTiposVacunas = () => {
    setStateModalTiposVacunas(!stateModalTiposVacunas);
  };
  const toggleViewInocuidadEfectividad = () => {
    setStateModalInocuidadEfectividad(!stateModalInocuidadEfectividad);
  };
  const toggleViewEmbarazoLactancia = () => {
    setStateModalEmbarazoLactancia(!stateModalEmbarazoLactancia);
  };
  const toggleViewEfectosSecundarios = () => {
    setStateModalEfectosSecundarios(!stateModalEfectosSecundarios);
  };
  const toggleViewAvanceVacunacion = () => {
    setStateModalAvanceVacunacion(!stateModalAvanceVacunacion);
  };
  const toggleViewConsecuencias = () => {
    setStateModalConsecuencias(!stateModalConsecuencias);
  };
  const toggleViewSintomas = () => {
    setStateModalSintomas(!stateModalSintomas);
  };
  const toggleViewNuevasVacunas = () => {
    setStateModalNuevasVacunas(!stateModalNuevasVacunas);
  };
  const toggleViewVPH = () => {
    setStateModalVPH(!stateModalVPH);
  };
  const toggleViewVacunacionHepatitisA = () => {
    setStateModalVacunacionHepatitisA(!stateModalVacunacionHepatitisA);
  };
  const toggleViewQuestSlide1 = () => {
    setStateModalQuestSlide1(!stateModalQuestSlide1);
  };
  const toggleViewQuestSlide2 = () => {
    setStateModalQuestSlide2(!stateModalQuestSlide2);
  };
  const toggleViewQuestSlide3 = () => {
    setStateModalQuestSlide3(!stateModalQuestSlide3);
  };
  const toggleViewQuestSlide4 = () => {
    setStateModalQuestSlide4(!stateModalQuestSlide4);
  };
  const toggleViewQuestSlide5 = () => {
    setStateModalQuestSlide5(!stateModalQuestSlide5);
  };
  const toggleViewQuestSlide6 = () => {
    setStateModalQuestSlide6(!stateModalQuestSlide6);
  };
  const toggleViewInit = () => {
    setStateModalInit(!stateModalInit);
  };
  const activateView2 = () => {
    setStateViewModule2(true);
  };
  const activateView3 = () => {
    setStateViewModule3(true);
  };
  const activateView4 = () => {
    setStateViewModule4(true);
  };

  useEffect(() => {
    menuTimeline.current = gsap.timeline({ paused: true });
    menuTimeline.current.to(".background", {
      width: "200vw",
      height: "200vw",
      bottom: "-95%",
      right: "-75%",
      duration: 1,
    });
    menuTimeline.current.fromTo(
      ".contentMenu",
      { opacity: 0, display: "none" },

      {
        opacity: 1,
        display: "block",
        duration: 0.5,
      }
    );
  }, []);

  const updateState = (index) => {
    // console.log(stateCarousel)
    index > stateCarousel ? setStateSide("left") : setStateSide("right");
    setStateCarousel(index);
  };

  const toggleMenu = () => {
    setStateHamburger(!stateHamburger);
  };

  useEffect(() => {
    stateHamburger
      ? menuTimeline.current.play()
      : menuTimeline.current.reverse();
  }, [stateHamburger]);

  return (
    <div {...props} className="relative overflow-hidden">
      {/* {stateModalVideo && <Modal viewVideo={viewVideo} />}
      {stateModalImages && <ViewImages toggleViewImages={toggleViewImages} />} */}
      {stateModalAntecedentes && (
        <ModalAntecedentes toggleViewAntecedentes={toggleViewAntecedentes} />
      )}
          {stateModalSignosAlarma && (
        <ModalSignosAlarma toggleViewSignosAlarma={toggleViewSignosAlarma} />
      )}
      {stateModalDiagnostico && (
        <ModalDiagnostico toggleViewDiagnostico={toggleViewDiagnostico} />
      )}
      {stateModalAlarmaPrevencion && (
        <ModalAlarmaPrevencion
          toggleViewAlarmaPrevencion={toggleViewAlarmaPrevencion}
        />
      )}
      {stateModalVarianteCovid && (
        <ModalVarianteCovid toggleViewVarianteCovid={toggleViewVarianteCovid} />
      )}
      {stateModalVacunas && (
        <ModalVacunas toggleViewVacunas={toggleViewVacunas} />
      )}
      {stateModalInmunidadColectiva && (
        <ModalInmunidadColectiva
          toggleViewInmunidadColectiva={toggleViewInmunidadColectiva}
        />
      )}
      {stateModalTiposVacunas && (
        <ModalTiposVacunas toggleViewTiposVacunas={toggleViewTiposVacunas} />
      )}
      {stateModalInocuidadEfectividad && (
        <ModalInocuidadEfectividad
          toggleViewInocuidadEfectividad={toggleViewInocuidadEfectividad}
        />
      )}
      {stateModalEmbarazoLactancia && (
        <ModalEmbarazoLactancia
          toggleViewEmbarazoLactancia={toggleViewEmbarazoLactancia}
        />
      )}
      {stateModalEfectosSecundarios && (
        <ModalEfectosSecundarios
          toggleViewEfectosSecundarios={toggleViewEfectosSecundarios}
        />
      )}
      {stateModalAvanceVacunacion && (
        <ModalAvanceVacunacion
          toggleViewAvanceVacunacion={toggleViewAvanceVacunacion}
        />
      )}
      {stateModalConsecuencias && (
        <ModalConsecuencias toggleViewConsecuencias={toggleViewConsecuencias} />
      )}
      {stateModalSintomas && (
        <ModalSintomas toggleViewSintomas={toggleViewSintomas} />
      )}
      {stateModalNuevasVacunas && (
        <ModalNuevasVacunas toggleViewNuevasVacunas={toggleViewNuevasVacunas} />
      )}
      {stateModalVPH && <ModalVPH toggleViewVPH={toggleViewVPH} />}
      {stateModalVacunacionHepatitisA && (
        <ModalVacunacionHepatitisA
          toggleViewVacunacionHepatitisA={toggleViewVacunacionHepatitisA}
        />
      )}
      {stateModalQuestSlide1 && (
        <ModalQuestSlide1 toggleViewQuestSlide1={toggleViewQuestSlide1} />
      )}
      {stateModalQuestSlide2 && (
        <ModalQuestSlide2 toggleViewQuestSlide2={toggleViewQuestSlide2} />
      )}
      {stateModalQuestSlide3 && (
        <ModalQuestSlide3 toggleViewQuestSlide3={toggleViewQuestSlide3} />
      )}
      {stateModalQuestSlide4 && (
        <ModalQuestSlide4 toggleViewQuestSlide4={toggleViewQuestSlide4} />
      )}
      {stateModalQuestSlide5 && (
        <ModalQuestSlide5 toggleViewQuestSlide5={toggleViewQuestSlide5} />
      )}
      {stateModalQuestSlide6 && (
        <ModalQuestSlide6 toggleViewQuestSlide6={toggleViewQuestSlide6} />
      )}
      {stateModalInit && <ModalInit toggleViewInit={toggleViewInit} />}
      <div className="absolute -bottom-14 -right-14 lg:-bottom-20 lg:-right-20 bg-blue-900/90 rounded-full w-32 h-32 lg:w-40 text-white z-40 background">
        <div className="contentMenu hidden">
          <Menu
            toggleViewAntecedentes={toggleViewAntecedentes}
            toggleViewDiagnostico={toggleViewDiagnostico}
            toggleViewAlarmaPrevencion={toggleViewAlarmaPrevencion}
            toggleViewVarianteCovid={toggleViewVarianteCovid}
            toggleViewVacunas={toggleViewVacunas}
            toggleViewInmunidadColectiva={toggleViewInmunidadColectiva}
            toggleViewTiposVacunas={toggleViewTiposVacunas}
            toggleViewInocuidadEfectividad={toggleViewInocuidadEfectividad}
            toggleViewEmbarazoLactancia={toggleViewEmbarazoLactancia}
            toggleViewEfectosSecundarios={toggleViewEfectosSecundarios}
            toggleViewAvanceVacunacion={toggleViewAvanceVacunacion}
            toggleViewConsecuencias={toggleViewConsecuencias}
            toggleViewSintomas={toggleViewSintomas}
          />
        </div>
      </div>

      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        // infiniteLoop={true}
        autoPlay={false}
        transitionTime={2000}
        onChange={(index) => updateState(index)}
        // stopOnHover={false}
        className="rounded-3xl text-white carousel1"
      >
        {/* {slides.map((data) => {
          if (data.type === "ViewInit")
            return (
              <ViewInit
                keyCarrousel={0}
                toggleViewInit={toggleViewInit}
                index={stateCarousel}
                stateSide={stateSide}
              />
            );
        }).filter(x => x !== null)} */}
        {slides
          .map((data, index) => {
            if (data.type === "ViewInit")
              return (
                <ViewInit
                key={index}
                  keyCarrousel={index}
                  toggleViewInit={toggleViewInit}
                  index={stateCarousel}
                  stateSide={stateSide}
                />
              );
            if (data.type === "ViewModule1") {
              return (
                <View1
                key={index}
                  toggleViewSintomas={toggleViewSintomas}
                  toggleViewSignosAlarma={toggleViewSignosAlarma}
                  toggleViewAntecedentes={toggleViewAntecedentes}
                  toggleViewDiagnostico={toggleViewDiagnostico}
                  toggleViewAlarmaPrevencion={toggleViewAlarmaPrevencion}
                  toggleViewVarianteCovid={toggleViewVarianteCovid}
                  keyCarrousel={index}
                  index={stateCarousel}
                  stateSide={stateSide}
                />
              );
            }
            if (data.type === "ViewGeneral" && data.moduleTrivia === "1") {
              return (
                <ViewGeneral
                key={index}
                  keyCarrousel={index}
                  index={stateCarousel}
                  stateSide={stateSide}
                  trivia={data.trivia}
                  numberTrivia={data.numberTrivia}
                  moduleTrivia={data.moduleTrivia}
                  counter={data.counter}
                />
              );
            }
            if (data.type === "ViewResult" && data.moduleTrivia === "1") {
              return (
                <ViewResults
                  key={index}
                  keyCarrousel={index}
                  arrNumberQuest={data.arrNumberQuest}
                  arrQuest={data.arrQuest}
                  index={stateCarousel}
                  stateSide={stateSide}
                  activateNewView={activateView2}
                  moduleTrivia={data.moduleTrivia}
                />
              );
            }
            if (data.type === "ViewModule2" && stateViewModule2) {
              return (
                <View5
                key={index}
                  toggleViewVacunas={toggleViewVacunas}
                  toggleViewInmunidadColectiva={toggleViewInmunidadColectiva}
                  toggleViewTiposVacunas={toggleViewTiposVacunas}
                  toggleViewInocuidadEfectividad={
                    toggleViewInocuidadEfectividad
                  }
                  toggleViewEmbarazoLactancia={toggleViewEmbarazoLactancia}
                  toggleViewEfectosSecundarios={toggleViewEfectosSecundarios}
                  toggleViewAvanceVacunacion={toggleViewAvanceVacunacion}
                  toggleViewConsecuencias={toggleViewConsecuencias}
                  keyCarrousel={index}
                  index={stateCarousel}
                  stateSide={stateSide}
                />
              );
            }
            if (
              data.type === "ViewGeneral" &&
              data.moduleTrivia === "2" &&
              stateViewModule2
            ) {
              return (
                <ViewGeneral
                key={index}
                  keyCarrousel={index}
                  index={stateCarousel}
                  stateSide={stateSide}
                  trivia={data.trivia}
                  numberTrivia={data.numberTrivia}
                  moduleTrivia={data.moduleTrivia}
                  counter={data.counter}
                />
              );
            }
            if (
              data.type === "ViewResult" &&
              data.moduleTrivia === "2" &&
              stateViewModule2
            ) {
              return (
                <ViewResults
                key={index}
                  keyCarrousel={index}
                  arrNumberQuest={data.arrNumberQuest}
                  arrQuest={data.arrQuest}
                  index={stateCarousel}
                  stateSide={stateSide}
                  activateNewView={activateView3}
                  moduleTrivia={data.moduleTrivia}
                />
              );
            }
            if (data.type === "ViewModule3" && stateViewModule3) {
              return (
                <View15
                key={index}
                  toggleViewNuevasVacunas={toggleViewNuevasVacunas}
                  toggleViewVPH={toggleViewVPH}
                  toggleViewVacunacionHepatitisA={
                    toggleViewVacunacionHepatitisA
                  }
                  keyCarrousel={index}
                  index={stateCarousel}
                  stateSide={stateSide}
                />
              );
            }
            if (
              data.type === "ViewGeneral" &&
              data.moduleTrivia === "3" &&
              stateViewModule3
            ) {
              return (
                <ViewGeneral
                key={index}
                  keyCarrousel={index}
                  index={stateCarousel}
                  stateSide={stateSide}
                  trivia={data.trivia}
                  numberTrivia={data.numberTrivia}
                  moduleTrivia={data.moduleTrivia}
                  counter={data.counter}
                />
              );
            }
            if (
              data.type === "ViewResult" &&
              data.moduleTrivia === "3" &&
              stateViewModule3
            ) {
              return (
                <ViewResults
                key={index}
                  keyCarrousel={index}
                  arrNumberQuest={data.arrNumberQuest}
                  arrQuest={data.arrQuest}
                  index={stateCarousel}
                  stateSide={stateSide}
                  activateNewView={activateView4}
                  moduleTrivia={data.moduleTrivia}
                />
              );
            }
            if (data.type === "ViewModule4" && stateViewModule4) {
              return (
                <View4
                key={index}
                  toggleViewQuestSlide1={toggleViewQuestSlide1}
                  toggleViewQuestSlide2={toggleViewQuestSlide2}
                  toggleViewQuestSlide3={toggleViewQuestSlide3}
                  toggleViewQuestSlide4={toggleViewQuestSlide4}
                  toggleViewQuestSlide5={toggleViewQuestSlide5}
                  toggleViewQuestSlide6={toggleViewQuestSlide6}
                  keyCarrousel={index}
                  index={stateCarousel}
                  stateSide={stateSide}
                />
              );
            }
            if (
              data.type === "ViewGeneral" &&
              data.moduleTrivia === "4" &&
              stateViewModule4
            ) {
              return (
                <ViewGeneral
                key={index}
                  keyCarrousel={index}
                  index={stateCarousel}
                  stateSide={stateSide}
                  trivia={data.trivia}
                  numberTrivia={data.numberTrivia}
                  moduleTrivia={data.moduleTrivia}
                  counter={data.counter}
                />
              );
            }
            if (
              data.type === "ViewResult" &&
              data.moduleTrivia === "4" &&
              stateViewModule4
            ) {
              return (
                <ViewResults
                key={index}
                  keyCarrousel={index}
                  arrNumberQuest={data.arrNumberQuest}
                  arrQuest={data.arrQuest}
                  index={stateCarousel}
                  stateSide={stateSide}
                  activateNewView={activateView4}
                  moduleTrivia={data.moduleTrivia}
                />
              );
            } else return null;
          })
          .filter((x) => x !== null)}
        {/* <ViewInit
          keyCarrousel={0}
          toggleViewInit={toggleViewInit}
          index={stateCarousel}
          stateSide={stateSide}
        /> */}
        {/* <View1
          toggleViewSintomas={toggleViewSintomas}
          toggleViewImages={toggleViewImages}
          toggleViewAntecedentes={toggleViewAntecedentes}
          toggleViewDiagnostico={toggleViewDiagnostico}
          toggleViewAlarmaPrevencion={toggleViewAlarmaPrevencion}
          toggleViewVarianteCovid={toggleViewVarianteCovid}
          keyCarrousel={1}
          index={stateCarousel}
          stateSide={stateSide}
        /> */}
        {/* <ViewGeneral
          keyCarrousel={2}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia1}
          numberTrivia={1}
          moduleTrivia="1"
          counter={1}
        />
        <ViewGeneral
          keyCarrousel={3}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia2}
          numberTrivia={2}
          moduleTrivia="1"
          counter={2}
        />
        <ViewGeneral
          keyCarrousel={4}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia3}
          numberTrivia={3}
          moduleTrivia="1"
          counter={3}
        />
        <ViewGeneral
          keyCarrousel={5}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia4}
          numberTrivia={4}
          moduleTrivia="1"
          counter={4}
        />
        <ViewGeneral
          keyCarrousel={6}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia5}
          numberTrivia={5}
          moduleTrivia="1"
          counter={5}
        /> */}
        {/* <ViewResults
          keyCarrousel={7}
          arrNumberQuest={[1, 2, 3, 4, 5]}
          arrQuest={[
            "La enfermedad por coronavirus (COVID-19) es una enfermedad infecciosa causada por",
            "Es una variante del virus, dentro de la categoría de preocupación",
            "De los siguientes, cual no es un signo de alarma",
            "Un paciente menor de 60 años, sin comorbilidades y vacunación completa, realizará aislamiento de salir positivo el resultado de COVID-19 por",
            "Son recomendaciones a seguir si debo realizar aislamiento en casa de tener COVID-19",
          ]}
          index={stateCarousel}
          stateSide={stateSide}
        />
        <View5
          viewVideo={viewVideo}
          toggleViewImages={toggleViewImages}
          toggleViewVacunas={toggleViewVacunas}
          toggleViewInmunidadColectiva={toggleViewInmunidadColectiva}
          toggleViewTiposVacunas={toggleViewTiposVacunas}
          toggleViewInocuidadEfectividad={toggleViewInocuidadEfectividad}
          toggleViewEmbarazoLactancia={toggleViewEmbarazoLactancia}
          toggleViewEfectosSecundarios={toggleViewEfectosSecundarios}
          toggleViewAvanceVacunacion={toggleViewAvanceVacunacion}
          toggleViewConsecuencias={toggleViewConsecuencias}
          keyCarrousel={8}
          index={stateCarousel}
          stateSide={stateSide}
        /> */}

        {/* <ViewGeneral
          keyCarrousel={9}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia6}
          numberTrivia={6}
          moduleTrivia="2"
          counter={1}
        />
        <ViewGeneral
          keyCarrousel={10}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia7}
          numberTrivia={7}
          moduleTrivia="2"
          counter={2}
        />
        <ViewGeneral
          keyCarrousel={11}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia8}
          numberTrivia={8}
          moduleTrivia="2"
          counter={3}
        />
        <ViewGeneral
          keyCarrousel={12}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia9}
          numberTrivia={9}
          moduleTrivia="2"
          counter={4}
        />
        <ViewGeneral
          keyCarrousel={13}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia10}
          numberTrivia={10}
          moduleTrivia="2"
          counter={5}
        />
        <ViewResults
          keyCarrousel={14}
          arrNumberQuest={[6, 7, 8, 9, 10]}
          arrQuest={[
            "Los principales tipos de vacunas disponibles contra la COVID-19 son, excepto",
            "Son efectos de leves secundarios a recibir la vacuna contra COVID-19",
            "Una gestante, con más de 12 semanas de gestación, ¿puede recibir la vacuna contra COVID-19?",
            "Se puede recibir la cuarta dosis contra la COVID-19 si",
            "Una lactante, ¿puede recibir la vacuna contra COVID-19?",
          ]}
          index={stateCarousel}
          stateSide={stateSide}
        />
        <View15
          toggleViewNuevasVacunas={toggleViewNuevasVacunas}
          toggleViewVPH={toggleViewVPH}
          toggleViewVacunacionHepatitisA={toggleViewVacunacionHepatitisA}
          keyCarrousel={15}
          index={stateCarousel}
          stateSide={stateSide}
        />
        <ViewGeneral
          keyCarrousel={16}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia11}
          numberTrivia={11}
          moduleTrivia="3"
          counter={1}
        />
        <ViewGeneral
          keyCarrousel={17}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia12}
          numberTrivia={12}
          moduleTrivia="3"
          counter={2}
        />
        <ViewGeneral
          keyCarrousel={18}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia13}
          numberTrivia={13}
          moduleTrivia="3"
          counter={3}
        />
        <ViewGeneral
          keyCarrousel={19}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia14}
          numberTrivia={14}
          moduleTrivia="3"
          counter={4}
        />
        <ViewGeneral
          keyCarrousel={20}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia15}
          numberTrivia={15}
          moduleTrivia="3"
          counter={5}
        />
        <ViewResults
          keyCarrousel={21}
          arrNumberQuest={[11, 12, 13, 14, 15]}
          arrQuest={[
            "El Esquema nacional de vacunación actualizado cuenta con",
            "Las nuevas vacunas incluídas en el Esquema nacional de vacunación son",
            "La vacuna contra el Virus de Papiloma Humano (VPH) previenen",
            "No es un síntoma de la Hepatitis A",
            "La complicación más temida de la hepatitis A es",
          ]}
          index={stateCarousel}
          stateSide={stateSide}
        />
        <View4
          toggleViewQuestSlide1={toggleViewQuestSlide1}
          toggleViewQuestSlide2={toggleViewQuestSlide2}
          toggleViewQuestSlide3={toggleViewQuestSlide3}
          toggleViewQuestSlide4={toggleViewQuestSlide4}
          toggleViewQuestSlide5={toggleViewQuestSlide5}
          toggleViewQuestSlide6={toggleViewQuestSlide6}
          keyCarrousel={22}
          index={stateCarousel}
          stateSide={stateSide}
        />
        <ViewGeneral
          keyCarrousel={23}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia16}
          numberTrivia={16}
          moduleTrivia="4"
          counter={1}
        />
        <ViewGeneral
          keyCarrousel={24}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia17}
          numberTrivia={17}
          moduleTrivia="4"
          counter={2}
        />
        <ViewGeneral
          keyCarrousel={25}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia18}
          numberTrivia={18}
          moduleTrivia="4"
          counter={3}
        />
        <ViewGeneral
          keyCarrousel={26}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia19}
          numberTrivia={19}
          moduleTrivia="4"
          counter={4}
        />
        <ViewGeneral
          keyCarrousel={27}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia20}
          numberTrivia={20}
          moduleTrivia="4"
          counter={5}
        />
        <ViewResults
          keyCarrousel={28}
          arrNumberQuest={[16, 17, 18, 19, 20]}
          arrQuest={[
            "¿Debería vacunarme si ya he pasado la COVID-19?",
            "¿Pueden las vacunas contra la COVID-19 afectar la fertilidad?",
            "El uso prolongado de las mascarillas, cuando se llevan puestas correctamente, NO PROVOCA intoxicación por CO2 ni hipoxia",
            "El nuevo coronavirus NO PUEDE transmitirse a través de picaduras de mosquitos",
            "¿Puedo dejar de tomar precauciones después de haberme vacunado?",
          ]}
          index={stateCarousel}
          stateSide={stateSide}
        /> */}
      </Carousel>
      <MenuBurguer stateHamburger={stateHamburger} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Carousell;
