import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
// import img1 from "../../public/img/view1/img1.png";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

import {
  useLazyGetQuestScoreQuery,
  useUpdateScoreMutation,
} from "../../pages/api/services/scores/scoreApiSlice";
import { selectCurrentUser } from "../../pages/api/features/auth/authSlice";
import { selectCurrentData } from "../../pages/api/features/extra/extraSlice";
import { setUpdateScore2 } from "../../pages/api/features/extra/extraSlice";
import Loading2 from "../Loading/Loading2";

import background from "../../public/img/bgModal.png";

type Props = {
  keyCarrousel: number;
  index: number;
  stateSide: string;
  arrNumberQuest: number[];
  numberTrivia: number;
  activateNewView: () => void;
  arrQuest: string[];
  moduleTrivia: string;
};

type DataTable = {
  quest: string;
  score: number;
};

const ViewResults = ({
  keyCarrousel,
  index,
  stateSide,
  arrNumberQuest,
  numberTrivia,
  activateNewView,
  moduleTrivia,
  arrQuest,
}: Props) => {
  const [dataTable, setDataTable] = useState<DataTable[] | []>([]);
  const [totalScore, setTotalScore] = useState<number>(0);
  const { id: userId } = useSelector(selectCurrentUser);
  const extraState = useSelector(selectCurrentData);
  const dispatch = useDispatch();
  const [
    updateScore,
    { isLoading: isLoadingUpdateScore, error: errorUpdateScore },
  ] = useUpdateScoreMutation();

  const [trigger, { isLoading: isTriggerLoading, isFetching, isSuccess }] = useLazyGetQuestScoreQuery({
    // refetchOnMountOrArgChange: true,
    // refetchOnFocus:true,
  });

  //ref

  // useEffect(() => {
  //   if (keyCarrousel === index) {
  //     if (stateSide === "left") {
  //       gsap.fromTo(
  //         ".animate_background",
  //         { backgroundPosition: `40%` },
  //         { backgroundPosition: 0, duration: 2 }
  //       );
  //     } else {
  //       gsap.fromTo(
  //         ".animate_background",
  //         { backgroundPosition: `-40%` },
  //         { backgroundPosition: 0, duration: 2 }
  //       );
  //     }
  //   }
  //   if (keyCarrousel + 1 === index) {
  //     gsap.to(".animate_background", {
  //       backgroundPosition: "10%",
  //       duration: 2,
  //     });
  //   }
  //   if (keyCarrousel - 1 === index) {
  //     gsap.to(".animate_background", {
  //       backgroundPosition: "10%",
  //       duration: 2,
  //     });
  //   }
  // }, [index]);

  // const getScoreQuest = async (trivia: number) => {
  //   const { data } = await trigger({ userId, numberTrivia: trivia });
  //   setDataTable([
  //     ...dataTable,
  //     { quest: arrQuest[trivia - 1], score: data.value },
  //   ]);
  // };

  const setScoreQuest = async (trivia: number, index: number) => {
    const { data } = await trigger({ userId, numberTrivia: trivia });
    // console.log(data, trivia)
    setDataTable((prev) => [
      ...prev,
      { quest: arrQuest[index], score: data?.value },
    ]);
  };

  const getScoreQuest = async () => {
    setDataTable([]);

    for (const [index, value] of arrNumberQuest.entries()) {
      //  await getScoreQuest(numberQuest)
      await setScoreQuest(value, index);
    }
  };

  const resetScore = async () => {
    arrNumberQuest.map((data) => {
      updateScore({
        userId: userId,
        numberTrivia: data,
        data: {
          moduleNumber: moduleTrivia,
          value: 0,
        },
      }).unwrap();
    });
    getScoreQuest()
    // const newDataTable = dataTable.map((data)=>{
    //   data.score = 0
    //   return data
    // })
    // setDataTable(newDataTable)
    dispatch(setUpdateScore2(null));
    var tl = gsap.timeline();
    tl.to(".toast_format", { x: -350, duration: 1, opacity:1 });
    tl.to(".toast_format", { x: 0, duration: 1,opacity:0, delay: 3 });
  };

  useEffect(() => {
    getScoreQuest();
  }, [extraState]);

  useEffect(() => {
    if (dataTable.length === 5) {
      const valor = dataTable.reduce((a, b) => a + b.score, 0);
      setTotalScore(valor);
    }
  }, [dataTable]);

  useEffect(() => {
    if (totalScore >= 80) {
      activateNewView();
    }
  }, [totalScore]);

  return (
    <div
      className={`w-full fullvh lg:h-screen flex items-center justify-center z-10 bg-fixed bg-no-repeat animate_background relative`}
    >
        { dataTable.length <5 &&  <Loading2 text="Cargando.." /> }
      <Image
        className="object-cover"
        alt="background"
        src={background}
        placeholder="blur"
        fill
      />
      <div className="absolute z-50 -right-[20rem] top-5 bg_color_third rounded-xl p-4 shadow-xl toast_format opacity-0">
        <p className="text-base">Se ha formateado correctamente!</p>
      </div>
      <div className="z-20 w-10/12 lg:w-[60rem] h-[14rem] sm:h-[15rem] lg:h-auto flex flex-col gap-3 lg:gap-5 overflow-auto">
        <h1 className=" text-xl lg:text-4xl text-white font-bold ">
          Resultados
        </h1>
        <div className="bg_color_third  rounded-xl border-t-[0.5rem] border-gray-300 shadow_card_results py-4 px-10">
          <div className="flex text-base lg:text-xl font-semibold">
            <div className="flex-1"># de pregunta</div>
            <div className="w-6/12 lg:w-6/12">Pregunta</div>
            <div className="flex-1">Puntaje</div>
          </div>

          <div className="mt-3 lg:mt-5 flex flex-col gap-2 lg:gap-3 h-48 lg:h-auto overflow-auto">
            {dataTable.length === 5 &&
              dataTable.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="flex bg-white rounded-md third_color py-1 lg:py-2 font-bold min-h-[4rem] lg:min-h-[5rem] "
                  >
                    <div className="flex-1 flex items-center justify-center text-sky-400 text-2xl">
                      #{index + 1}{" "}
                    </div>
                    <div className="w-8/12 lg:w-6/12 flex items-center justify-center text-sm lg:text-lg leading-tight">
                      {data.quest}{" "}
                    </div>
                    <div className="flex-1 flex items-center justify-center text-orange-600 text-xl">
                      {data.score}{" "}
                    </div>
                  </div>
                );
              })}
            {dataTable.length === 5 && (
              <div>
                {totalScore >= 80 ? (
                  <h2>FELICIDADES, PASASTE EL MÓDULO</h2>
                ) : totalScore === 0 ? (
                  <h2>Ninguna pregunta respondida</h2>
                ) : (
                  <div
                    className="bg-blue-900 rounded-md py-2 px-12 text-white font-bold text-md  lg:text-xl cursor-pointer z-20 shadow-md "
                    onClick={() => resetScore()}
                  >
                    VOLVER A DAR EL MÓDULO
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewResults;
