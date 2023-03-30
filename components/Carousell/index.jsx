import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { gsap } from "gsap";
import slides from "./../../utils/SlidesCarrousel/slides.json";

import View1 from "../views/View1";
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
import ViewCompleted from "../views/ViewCompleted";

const Carousell = (props) => {
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
  const [stateViewModuleEnd, setStateViewEnd] = useState(false);

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
  const activateViewEnd = () => {
    setStateViewEnd(true);
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


  const handleNext =() => {
    setStateCarousel((prevIndex) => prevIndex + 1);
  }

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
      {stateModalInit && <ModalInit toggleViewInit={toggleViewInit} handleNext={handleNext} />}
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
            toggleViewSignosAlarma={toggleViewSignosAlarma}
            toggleViewNuevasVacunas={toggleViewNuevasVacunas}
            toggleViewVPH={toggleViewVPH}
            toggleViewVacunacionHepatitisA={toggleViewVacunacionHepatitisA}
            toggleViewQuestSlide1={toggleViewQuestSlide1}
            toggleViewQuestSlide2={toggleViewQuestSlide2}
            toggleViewQuestSlide3={toggleViewQuestSlide3}
            toggleViewQuestSlide4={toggleViewQuestSlide4}
            toggleViewQuestSlide5={toggleViewQuestSlide5}
          />
        </div>
      </div>

      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        autoPlay={false}    
        transitionTime={2000}
        swipeable={false}
        onChange={(index) => updateState(index)}
        className="rounded-3xl text-white carousel1"
        selectedItem={stateCarousel}
      >
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
                  activateNewView={activateViewEnd}
                  moduleTrivia={data.moduleTrivia}
                />
              );
            }    if (  data.type === "ViewEnd" && stateViewModuleEnd) {
              return (
                <ViewCompleted
                  key={index}
                  keyCarrousel={index}
                  index={stateCarousel}
                  stateSide={stateSide}
                />
              );
            } else return null;
          })
          .filter((x) => x !== null)}
      </Carousel>
      <MenuBurguer stateHamburger={stateHamburger} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Carousell;
