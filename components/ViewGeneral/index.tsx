import React, { useEffect, useState, useRef, useCallback } from "react";
import { gsap } from "gsap";
import ReactCanvasConfetti from "react-canvas-confetti";
// import img1 from "../../public/img/view1/img1.png";
import Image from "next/image";
// import logo from "../../public/img/view1/logo.png";
import Button from "../commons/button/Button";
import TriviaOpcion from "../commons/TriviaOpcion";
import quest from "../../public/img/trivia/quest.png";
import background from "../../public/img/trivia/fondo.png";

type Props = {
  keyCarrousel: number;
  index: number;
  stateSide: string;
  counter: number;
  // title: string;
  // urlLogo: string;
  // urlBackground: string;
  // text: string;
  trivia: dataTrivia;
  numberTrivia: number;
};

type dataTrivia = {
  pregunta: string;
  respuestas: [dataRespuesta];
};

type dataRespuesta = {
  correcta: boolean;
  respuesta: string;
};

//data trivia
// const trivia = [
//   {
//     pregunta: "Azul en inglés es igual a:",
//     respuestas: [
//       {
//         correcta: true,
//         respuesta: "Blue",
//       },
//       {
//         correcta: false,
//         respuesta:
//           "Green ",
//       },
//       {
//         correcta: false,
//         respuesta: "Black",
//       },
//       {
//         correcta: false,
//         respuesta: "Yellow",
//       },
//     ],
//   },
// ];
// const trivia = {
//   pregunta: "Azul en inglés es igual a:",
//   respuestas: [
//     {
//       correcta: true,
//       respuesta: "Blue",
//     },
//     {
//       correcta: false,
//       respuesta: "Green ",
//     },
//     {
//       correcta: false,
//       respuesta: "Black",
//     },
//     {
//       correcta: false,
//       respuesta: "Yellow",
//     },
//   ],
// };
//puntaje
const Puntaje = 25;

const ViewGeneral = ({
  keyCarrousel,
  index,
  stateSide,
  trivia,
  counter,
  numberTrivia,
}: // title,
// urlLogo,
// urlBackground,
// text,
Props) => {
  const [count, setCount] = useState(100);
  const [finishTrivia, setFinishTrivia] = useState(false);

  //ref
  const refAnimationInstance: any = useRef(null);

  const actualizarFinTrivia = () => {
    setFinishTrivia(true);
    fire();
  };

  const actualizarPuntaje = () => {
    setCount(count - Puntaje);
  };

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio: any, opts: any) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  useEffect(() => {
    // console.log(keyCarrousel, index)
    if (keyCarrousel === index) {
      if (stateSide === "left") {
        gsap.fromTo(
          ".animate_background",
          { backgroundPosition: `40%` },
          { backgroundPosition: 0, duration: 2 }
        );
      } else {
        gsap.fromTo(
          ".animate_background",
          { backgroundPosition: `-40%` },
          { backgroundPosition: 0, duration: 2 }
        );
      }
    }
    if (keyCarrousel + 1 === index) {
      gsap.to(".animate_background", {
        backgroundPosition: "10%",
        duration: 2,
      });
    }
    if (keyCarrousel - 1 === index) {
      gsap.to(".animate_background", {
        backgroundPosition: "10%",
        duration: 2,
      });
    }
  }, [index]);

  return (
    <div
      className={`w-full h-screen flex items-center justify-center z-10 bg-fixed bg-no-repeat animate_background relative`}
    >
      <Image
        className="object-cover"
        alt="background"
        src={background}
        placeholder="blur"
        fill
      />
      <div className="absolute left-3 lg:left-5 top-3 lg:top-5 px-3 lg:px-10 py-2 lg:py-6 bg-white">
        <p className="text-sky-500 font-bold text-base lg:text-xl flex">
          <span className="hidden lg:block">Pregunta</span> {counter}/5
        </p>
      </div>
      <div className="flex flex-col z-20 relative items-center w-8/12 lg:w-[40rem]  ">
        <div className="relative w-full flex items-center justify-center ">
          <Image className="" alt="quest" src={quest} placeholder="blur" />
          <p className="absolute text-base lg:text-3xl px-10">
            {" "}
            {trivia.pregunta}{" "}
          </p>
        </div>
        <div className="h-10 lg:h-20 text-lg lg:text-5xl text-center text-shadow uppercase tracking-widest">
          {!finishTrivia ? (
            count < 100 && <p className="bold text-red-700">¡Incorrecto!</p>
          ) : (
            <p className="bold text-green-700">¡Correcto!</p>
          )}
        </div>
        <ul className="grid grid-cols-2 lg:grid-cols-1 gap-2 w-full ">
          {trivia.respuestas.map((data, key) => {
            return (
              <TriviaOpcion
                key={key}
                data={data}
                actualizarFinTrivia={actualizarFinTrivia}
                actualizarPuntaje={actualizarPuntaje}
                finishTrivia={finishTrivia}
              />
            );
          })}
        </ul>
        {/* {finishTrivia && (
          <p className="text-green-800">Tu puntaje es: {count} </p>
        )} */}
      </div>
      <ReactCanvasConfetti
        refConfetti={getInstance}
        className="fixed z-20 pointer-events-none w-full h-full"
      />
    </div>
  );
};

export default ViewGeneral;
