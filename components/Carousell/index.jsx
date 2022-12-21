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
      <div className="absolute -bottom-14 -right-14 lg:-bottom-20 lg:-right-20 bg-blue-900/90 rounded-full w-32 h-32 lg:w-40 text-white z-40 background">
        <div className="contentMenu hidden">
          <Menu />
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
          viewVideo={viewVideo}
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
          title={`curso lúdico a modo de videojuego.`}
          text={`Creamos el personaje Salva y mini-juegos ligados a la política de salvaguarda y canales de atención al cuidado de los niños, niñas y adolescentes.`}
          urlBackground="/img/trivia/fondo.png"
          urlLogo="/img/view1/logo.png"
        />
          <View5
          viewVideo={viewVideo}
          toggleViewImages={toggleViewImages}
          keyCarrousel={2}
          index={stateCarousel}
          stateSide={stateSide}
        />
         <ViewGeneral
          keyCarrousel={3}
          index={stateCarousel}
          stateSide={stateSide}
          title={`curso lúdico a modo de videojuego.`}
          text={`Creamos el personaje Salva y mini-juegos ligados a la política de salvaguarda y canales de atención al cuidado de los niños, niñas y adolescentes.`}
          urlBackground="/img/trivia/fondo.png"
          urlLogo="/img/view1/logo.png"
        />
         <View15
          viewVideo={viewVideo}
          toggleViewImages={toggleViewImages}
          keyCarrousel={4}
          index={stateCarousel}
          stateSide={stateSide}
        />
         <ViewGeneral
          keyCarrousel={5}
          index={stateCarousel}
          stateSide={stateSide}
          title={`curso lúdico a modo de videojuego.`}
          text={`Creamos el personaje Salva y mini-juegos ligados a la política de salvaguarda y canales de atención al cuidado de los niños, niñas y adolescentes.`}
          urlBackground="/img/trivia/fondo.png"
          urlLogo="/img/view1/logo.png"
        />
         <View1
          viewVideo={viewVideo}
          toggleViewImages={toggleViewImages}
          keyCarrousel={6}
          index={stateCarousel}
          stateSide={stateSide}
        />
        {/* <View2 keyCarrousel={1} index={stateCarousel} stateSide={stateSide} />    */}
        <ViewGeneral
          keyCarrousel={7}
          index={stateCarousel}
          stateSide={stateSide}
          title={`curso lúdico a modo de videojuego.`}
          text={`Creamos el personaje Salva y mini-juegos ligados a la política de salvaguarda y canales de atención al cuidado de los niños, niñas y adolescentes.`}
          urlBackground="/img/trivia/fondo.png"
          urlLogo="/img/view1/logo.png"
        />
      
 
      </Carousel>
     <MenuBurguer stateHamburger={stateHamburger} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Carousell;
