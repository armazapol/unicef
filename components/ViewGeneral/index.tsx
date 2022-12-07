import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
// import img1 from "../../public/img/view1/img1.png";
import Image from "next/image";
// import logo from "../../public/img/view1/logo.png";
import Button from "../commons/button/Button";
import TriviaOpcion from "../commons/TriviaOpcion";
import { useState } from "react";

type Props = {
  keyCarrousel: number;
  index: number;
  stateSide: string;
  title: string;
  urlLogo: string;
  urlBackground: string;
  text: string;
};

const trivia = [
  {
    pregunta: "Azul en inglés es igual a:",
    respuestas: [
      {
        correcta: true,
        respuesta: "Blue",
      },
      {
        correcta: false,
        respuesta: "Green",
      },
      {
        correcta: false,
        respuesta: "Black",
      },
      {
        correcta: false,
        respuesta: "Yellow",
      },
    ],
  },
];

const Puntaje = 25

const ViewGeneral = ({
  keyCarrousel,
  index,
  stateSide,
  title,
  urlLogo,
  urlBackground,
  text,
}: Props) => {

  const [count, setCount] = useState(100);
  const [finishTrivia, setFinishTrivia] = useState(false);

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

  const actualizarFinTrivia = ()=> {
    setFinishTrivia(true)
  }

  const actualizarPuntaje = () => {
    setCount(count - Puntaje)
  }

  return (
    <div
      className={`w-full h-screen flex items-center justify-center z-10 bg-fixed bg-no-repeat animate_background `}
      style={{
        backgroundImage: `url(${urlBackground})`,
      }}
    >
      <div className="flex flex-col z-20 relative items-center w-[30rem] bg-white p-5">
        <h2 className="text-black text-xl font-semibold mb-5">
          {trivia[0].pregunta}{" "}
        </h2>
        <ul className="flex flex-col gap-2 w-full">
          {trivia[0].respuestas.map((data, key) => {
            return <TriviaOpcion key={key} data={data} actualizarFinTrivia={actualizarFinTrivia} actualizarPuntaje={actualizarPuntaje} finishTrivia={finishTrivia} />;
          })}
        </ul>
        {
          finishTrivia && <p className="text-green-800">Tu puntaje es: {count} </p>
        }
      </div>
    </div>
  );
};

export default ViewGeneral;
