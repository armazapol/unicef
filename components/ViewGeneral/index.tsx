import React, { useEffect, useState, useRef, useCallback } from "react";
import { gsap } from "gsap";
import ReactCanvasConfetti from "react-canvas-confetti";
// import img1 from "../../public/img/view1/img1.png";
import Image from "next/image";
import { useSelector,useDispatch } from "react-redux";
import {
  useUpdateScoreMutation,
  useGetQuestScoreQuery,
} from "./../../pages/api/services/scores/scoreApiSlice";
import {
  selectCurrentUser,
  // selectCurrentToken,
} from "../../pages/api/features/auth/authSlice";
import { setUpdateScore } from "../../pages/api/features/extra/extraSlice";
// import logo from "../../public/img/view1/logo.png";
// import Button from "../commons/button/Button";
// import Loading from "../../components/Loading/Loading";
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
  moduleTrivia: string;
};

type dataTrivia = {
  pregunta: string;
  respuestas: [dataRespuesta];
};

type dataRespuesta = {
  correcta: boolean;
  respuesta: string;
};

//puntaje
const Puntaje = 25;

const ViewGeneral = ({
  keyCarrousel,
  index,
  stateSide,
  trivia,
  counter,
  numberTrivia,
  moduleTrivia,
}: // title,
// urlLogo,
// urlBackground,
// text,
Props) => {
  const [count, setCount] = useState(100);
  const [finishTrivia, setFinishTrivia] = useState(false);
  // const [stateViewComplete, setstateViewComplete] = useState(true)

  const dispatch = useDispatch();
  const { id: userId } = useSelector(selectCurrentUser);
  const [
    updateScore,
    { isLoading: isLoadingUpdateScore, error: errorUpdateScore },
  ] = useUpdateScoreMutation();
  const { data, error, isLoading } = useGetQuestScoreQuery({
    userId,
    numberTrivia,
  });

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

  const addScore = async (count: number) => {
    await updateScore({
      userId: userId,
      numberTrivia: numberTrivia,
      data: {
        moduleNumber: "",
        value: count,
      },
    }).unwrap();
  };

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
  useEffect(() => {
    if (finishTrivia) {
      addScore(count);
      dispatch(setUpdateScore(null));
    }
  }, [finishTrivia]);

  return (
    <div
      className={`w-full h-screen flex items-center justify-center z-10 bg-fixed bg-no-repeat animate_background relative`}
    >
      {/* {isLoading && <Loading text="Cargando.." />} */}
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
      {/* {!isLoading && data.value === 0 ? ( */}
      {!isLoading && data.value === 0 ? (
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
      ) : (
        <div className="bg-white text-center z-20 w-7/12 lg:w-[36rem] h-[10rem] lg:h-[20rem] flex items-center justify-center rounded-3xl">
          <p className="z-10 text-sky-800 text-2xl lg:text-4xl font-bold" >¡Pregunta Completada!</p>
        </div>
      )}

      <ReactCanvasConfetti
        refConfetti={getInstance}
        className="fixed z-20 pointer-events-none w-full h-full"
      />
    </div>
  );
};

export default ViewGeneral;
