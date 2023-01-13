import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { gsap } from "gsap";

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
import ModalQuest1 from "../Modal/ModalQuest1";
import ModalQuest2 from "../Modal/ModalQuest2";
import ModalQuest3 from "../Modal/ModalQuest3";
import ModalQuest4 from "../Modal/ModalQuest4";
import ModalQuest5 from "../Modal/ModalQuest5";
import ModalQuest6 from "../Modal/ModalQuest6";
import ModalQuest7 from "../Modal/ModalQuest7";
import ModalQuest8 from "../Modal/ModalQuest8";
import ModalQuest9 from "../Modal/ModalQuest9";
import ModalQuest10 from "../Modal/ModalQuest10";

//trivia
import trivia1 from "../../utils/DataTrivia/module1/trivia1.json"
import trivia2 from "../../utils/DataTrivia/module1/trivia2.json"
import trivia3 from "../../utils/DataTrivia/module1/trivia3.json"
import trivia4 from "../../utils/DataTrivia/module1/trivia4.json"
import trivia5 from "../../utils/DataTrivia/module1/trivia5.json"
import trivia6 from "../../utils/DataTrivia/module2/trivia1.json"
import trivia7 from "../../utils/DataTrivia/module2/trivia2.json"
import trivia8 from "../../utils/DataTrivia/module2/trivia3.json"
import trivia9 from "../../utils/DataTrivia/module2/trivia4.json"
import trivia10 from "../../utils/DataTrivia/module2/trivia5.json"
import trivia11 from "../../utils/DataTrivia/module3/trivia1.json"
import trivia12 from "../../utils/DataTrivia/module3/trivia2.json"
import trivia13 from "../../utils/DataTrivia/module3/trivia3.json"
import trivia14 from "../../utils/DataTrivia/module3/trivia4.json"
import trivia15 from "../../utils/DataTrivia/module3/trivia5.json"
import trivia16 from "../../utils/DataTrivia/module4/trivia1.json"
import trivia17 from "../../utils/DataTrivia/module4/trivia2.json"
import trivia18 from "../../utils/DataTrivia/module4/trivia3.json"
import trivia19 from "../../utils/DataTrivia/module4/trivia4.json"
import trivia20 from "../../utils/DataTrivia/module4/trivia5.json"

const Carousell = (props) => {
  // const [stateModalVideo, setStateModalVideo] = useState<boolean>(false);
  // const [stateModalImages, setStateModalImages] = useState<boolean>(false);
  // const [stateMenu, setStateMenu] = useState<boolean>(false);
  // const [stateHamburger, setStateHamburger] = useState<boolean>(false);
  const [stateModalVideo, setStateModalVideo] = useState(false);
  const [stateModalImages, setStateModalImages] = useState(false);
  const [stateModalAntecedentes, setStateModalAntecedentes] = useState(false);
  const [stateModalDiagnostico, setStateModalDiagnostico] = useState(false);
  const [stateModalAlarmaPrevencion, setStateModalAlarmaPrevencion] = useState(false);
  const [stateModalVarianteCovid, setStateModalVarianteCovid] = useState(false);
  const [stateModalVacunas, setStateModalVacunas] = useState(false);
  const [stateModalInmunidadColectiva, setStateModalInmunidadColectiva] = useState(false);
  const [stateModalTiposVacunas, setStateModalTiposVacunas] = useState(false);
  const [stateModalInocuidadEfectividad, setStateModalInocuidadEfectividad] = useState(false);
  const [stateModalEmbarazoLactancia, setStateModalEmbarazoLactancia] = useState(false);
  const [stateModalEfectosSecundarios, setStateModalEfectosSecundarios] = useState(false);
  const [stateModalAvanceVacunacion, setStateModalAvanceVacunacion] = useState(false);
  const [stateModalConsecuencias, setStateModalConsecuencias] = useState(false);
  const [stateModalSintomas, setStateModalSintomas] = useState(false);
  const [stateModalNuevasVacunas, setStateModalNuevasVacunas] = useState(false);
  const [stateModalVPH, setStateModalVPH] = useState(false);
  const [stateModalVacunacionHepatitisA, setStateModalVacunacionHepatitisA] = useState(false);
  const [stateModalQuest1, setStateModalQuest1] = useState(false);
  const [stateModalQuest2, setStateModalQuest2] = useState(false);
  const [stateModalQuest3, setStateModalQuest3] = useState(false);
  const [stateModalQuest4, setStateModalQuest4] = useState(false);
  const [stateModalQuest5, setStateModalQuest5] = useState(false);
  const [stateModalQuest6, setStateModalQuest6] = useState(false);
  const [stateModalQuest7, setStateModalQuest7] = useState(false);
  const [stateModalQuest8, setStateModalQuest8] = useState(false);
  const [stateModalQuest9, setStateModalQuest9] = useState(false);
  const [stateModalQuest10, setStateModalQuest10] = useState(false);
  // const [stateMenu, setStateMenu] = useState(false);
  const [stateHamburger, setStateHamburger] = useState(false);
  const [stateCarousel, setStateCarousel] = useState(0);
  const [stateSide, setStateSide] = useState("left");

  const menuTimeline = useRef();

  const viewVideo = () => {
    setStateModalVideo(!stateModalVideo);
  };

  const toggleViewImages = () => {
    setStateModalImages(!stateModalImages);
  };

  const toggleViewAntecedentes = () => {
    setStateModalAntecedentes(!stateModalAntecedentes);
  };
  const toggleViewDiagnostico = () => {
    setStateModalDiagnostico(!stateModalDiagnostico);
  };

  const toggleViewAlarmaPrevencion = () => {
    setStateModalAlarmaPrevencion(!stateModalAlarmaPrevencion);
  }
  const toggleViewVarianteCovid = () => {
    setStateModalVarianteCovid(!stateModalVarianteCovid);
  }
  const toggleViewVacunas = () => {
    setStateModalVacunas(!stateModalVacunas);
  }
  const toggleViewInmunidadColectiva = () => {
    setStateModalInmunidadColectiva(!stateModalInmunidadColectiva);
  }
  const toggleViewTiposVacunas = () => {
    setStateModalTiposVacunas(!stateModalTiposVacunas);
  }
  const toggleViewInocuidadEfectividad = () => {
    setStateModalInocuidadEfectividad(!stateModalInocuidadEfectividad);
  }
  const toggleViewEmbarazoLactancia = () => {
    setStateModalEmbarazoLactancia(!stateModalEmbarazoLactancia);
  }
  const toggleViewEfectosSecundarios = () => {
    setStateModalEfectosSecundarios(!stateModalEfectosSecundarios);
  }
  const toggleViewAvanceVacunacion = () => {
    setStateModalAvanceVacunacion(!stateModalAvanceVacunacion);
  }
  const toggleViewConsecuencias = () => {
    setStateModalConsecuencias(!stateModalConsecuencias);
  }
  const toggleViewSintomas = () => {
    setStateModalSintomas(!stateModalSintomas);
  }
  const toggleViewNuevasVacunas = () => {
    setStateModalNuevasVacunas(!stateModalNuevasVacunas);
  }
  const toggleViewVPH = () => {
    setStateModalVPH(!stateModalVPH);
  }
  const toggleViewVacunacionHepatitisA = () => {
    setStateModalVacunacionHepatitisA(!stateModalVacunacionHepatitisA);
  }
  const toggleViewQuest1 = () => {
    setStateModalQuest1(!stateModalQuest1);
  }
  const toggleViewQuest2 = () => {
    setStateModalQuest2(!stateModalQuest2);
  }
  const toggleViewQuest3 = () => {
    setStateModalQuest3(!stateModalQuest3);
  }
  const toggleViewQuest4 = () => {
    setStateModalQuest4(!stateModalQuest4);
  }
  const toggleViewQuest5 = () => {
    setStateModalQuest5(!stateModalQuest5);
  }
  const toggleViewQuest6 = () => {
    setStateModalQuest6(!stateModalQuest6);
  }
  const toggleViewQuest7 = () => {
    setStateModalQuest7(!stateModalQuest7);
  }
  const toggleViewQuest8 = () => {
    setStateModalQuest8(!stateModalQuest8);
  }
  const toggleViewQuest9 = () => {
    setStateModalQuest9(!stateModalQuest9);
  }
  const toggleViewQuest10 = () => {
    setStateModalQuest10(!stateModalQuest10);
  }

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
      {stateModalVideo && <Modal viewVideo={viewVideo} />}
      {stateModalImages && <ViewImages toggleViewImages={toggleViewImages} />}
      {stateModalAntecedentes && <ModalAntecedentes toggleViewAntecedentes={toggleViewAntecedentes} />}
      {stateModalDiagnostico && <ModalDiagnostico toggleViewDiagnostico={toggleViewDiagnostico} />}
      {stateModalAlarmaPrevencion && <ModalAlarmaPrevencion toggleViewAlarmaPrevencion={toggleViewAlarmaPrevencion} />}
      {stateModalVarianteCovid && <ModalVarianteCovid toggleViewVarianteCovid={toggleViewVarianteCovid} />}
      {stateModalVacunas && <ModalVacunas toggleViewVacunas={toggleViewVacunas} />}
      {stateModalInmunidadColectiva && <ModalInmunidadColectiva toggleViewInmunidadColectiva={toggleViewInmunidadColectiva} />}
      {stateModalTiposVacunas && <ModalTiposVacunas toggleViewTiposVacunas={toggleViewTiposVacunas} />}
      {stateModalInocuidadEfectividad && <ModalInocuidadEfectividad toggleViewInocuidadEfectividad={toggleViewInocuidadEfectividad} />}
      {stateModalEmbarazoLactancia && <ModalEmbarazoLactancia toggleViewEmbarazoLactancia={toggleViewEmbarazoLactancia} />}
      {stateModalEfectosSecundarios && <ModalEfectosSecundarios toggleViewEfectosSecundarios={toggleViewEfectosSecundarios} />}
      {stateModalAvanceVacunacion && <ModalAvanceVacunacion toggleViewAvanceVacunacion={toggleViewAvanceVacunacion} />}
      {stateModalConsecuencias && <ModalConsecuencias toggleViewConsecuencias={toggleViewConsecuencias} />}
      {stateModalSintomas && <ModalSintomas toggleViewSintomas={toggleViewSintomas} />}
      {stateModalNuevasVacunas && <ModalNuevasVacunas toggleViewNuevasVacunas={toggleViewNuevasVacunas} />}
      {stateModalVPH && <ModalVPH toggleViewVPH={toggleViewVPH} />}
      {stateModalVacunacionHepatitisA && <ModalVacunacionHepatitisA toggleViewVacunacionHepatitisA={toggleViewVacunacionHepatitisA} />}
      {stateModalQuest1 && <ModalQuest1 toggleViewQuest1={toggleViewQuest1} />}
      {stateModalQuest2 && <ModalQuest2 toggleViewQuest2={toggleViewQuest2} />}
      {stateModalQuest3 && <ModalQuest3 toggleViewQuest3={toggleViewQuest3} />}
      {stateModalQuest4 && <ModalQuest4 toggleViewQuest4={toggleViewQuest4} />}
      {stateModalQuest5 && <ModalQuest5 toggleViewQuest5={toggleViewQuest5} />}
      {stateModalQuest6 && <ModalQuest6 toggleViewQuest6={toggleViewQuest6} />}
      {stateModalQuest7 && <ModalQuest7 toggleViewQuest7={toggleViewQuest7} />}
      {stateModalQuest8 && <ModalQuest8 toggleViewQuest8={toggleViewQuest8} />}
      {stateModalQuest9 && <ModalQuest9 toggleViewQuest9={toggleViewQuest9} />}
      {stateModalQuest10 && <ModalQuest10 toggleViewQuest10={toggleViewQuest10} />}
      <div className="absolute -bottom-14 -right-14 lg:-bottom-20 lg:-right-20 bg-blue-900/90 rounded-full w-32 h-32 lg:w-40 text-white z-40 background">
        <div className="contentMenu hidden">
          <Menu toggleViewAntecedentes={toggleViewAntecedentes} toggleViewDiagnostico={toggleViewDiagnostico} toggleViewAlarmaPrevencion={toggleViewAlarmaPrevencion} toggleViewVarianteCovid={toggleViewVarianteCovid} toggleViewVacunas={toggleViewVacunas} toggleViewInmunidadColectiva={toggleViewInmunidadColectiva} toggleViewTiposVacunas={toggleViewTiposVacunas} toggleViewInocuidadEfectividad={toggleViewInocuidadEfectividad} toggleViewEmbarazoLactancia={toggleViewEmbarazoLactancia} toggleViewEfectosSecundarios={toggleViewEfectosSecundarios} toggleViewAvanceVacunacion={toggleViewAvanceVacunacion} toggleViewConsecuencias={toggleViewConsecuencias} toggleViewSintomas={toggleViewSintomas} />
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
        <View1
          toggleViewSintomas={toggleViewSintomas}
          toggleViewImages={toggleViewImages}
          toggleViewAntecedentes={toggleViewAntecedentes}
          toggleViewDiagnostico={toggleViewDiagnostico}
          toggleViewAlarmaPrevencion={toggleViewAlarmaPrevencion}
          toggleViewVarianteCovid={toggleViewVarianteCovid}
          keyCarrousel={0}
          index={stateCarousel}
          stateSide={stateSide}
        />
         <ViewGeneral
          keyCarrousel={1}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia1}
          counter={1}
          // title={`curso lúdico a modo de videojuego.`}
          // text={`Creamos el personaje Salva y mini-juegos ligados a la política de salvaguarda y canales de atención al cuidado de los niños, niñas y adolescentes.`}
          // urlBackground="/img/trivia/fondo.png"
          // urlLogo="/img/view1/logo.png"
        />
         <ViewGeneral
          keyCarrousel={2}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia2}
          counter={2}
        />
         <ViewGeneral
          keyCarrousel={3}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia3}
          counter={3}
        />
         <ViewGeneral
          keyCarrousel={4}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia4}
          counter={4}
        />
         <ViewGeneral
          keyCarrousel={5}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia5}
          counter={5}
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
          keyCarrousel={6}
          index={stateCarousel}
          stateSide={stateSide}
        />
         <ViewGeneral
          keyCarrousel={7}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia6}
          counter={1}
        />
         <ViewGeneral
          keyCarrousel={8}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia7}
          counter={2}
        />
         <ViewGeneral
          keyCarrousel={9}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia8}
          counter={3}
        />
         <ViewGeneral
          keyCarrousel={10}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia9}
          counter={4}
        />
         <ViewGeneral
          keyCarrousel={11}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia10}
          counter={5}
        />
         <View15
          toggleViewNuevasVacunas={toggleViewNuevasVacunas}
          toggleViewVPH={toggleViewVPH}
          toggleViewVacunacionHepatitisA={toggleViewVacunacionHepatitisA}
          keyCarrousel={12}
          index={stateCarousel}
          stateSide={stateSide}
        />
         <ViewGeneral
          keyCarrousel={13}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia11}
          counter={1}
        />
         <ViewGeneral
          keyCarrousel={14}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia12}
          counter={2}
        />
         <ViewGeneral
          keyCarrousel={15}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia13}
          counter={3}
        />
         <ViewGeneral
          keyCarrousel={16}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia14}
          counter={4}
        />
         <ViewGeneral
          keyCarrousel={17}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia15}
          counter={5}
        />
         <View4
         toggleViewQuest1={toggleViewQuest1}
         toggleViewQuest2={toggleViewQuest2}
         toggleViewQuest3={toggleViewQuest3}
         toggleViewQuest4={toggleViewQuest4}
         toggleViewQuest5={toggleViewQuest5}
         toggleViewQuest6={toggleViewQuest6}
         toggleViewQuest7={toggleViewQuest7}
         toggleViewQuest8={toggleViewQuest8}
         toggleViewQuest9={toggleViewQuest9}
         toggleViewQuest10={toggleViewQuest10}
          keyCarrousel={18}
          index={stateCarousel}
          stateSide={stateSide}
        />
        {/* <View2 keyCarrousel={1} index={stateCarousel} stateSide={stateSide} />    */}
        <ViewGeneral
          keyCarrousel={19}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia16}
          counter={1}
        />
       <ViewGeneral
          keyCarrousel={20}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia17}
          counter={2}
        />
         <ViewGeneral
          keyCarrousel={21}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia18}
          counter={3}
        />
         <ViewGeneral
          keyCarrousel={22}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia19}
          counter={4}
        />
         <ViewGeneral
          keyCarrousel={23}
          index={stateCarousel}
          stateSide={stateSide}
          trivia={trivia20}
          counter={5}
        />
 
      </Carousel>
     <MenuBurguer stateHamburger={stateHamburger} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Carousell;
