import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
// import img1 from "../../public/img/view1/img1.png";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useLazyGetQuestScoreQuery } from "../../pages/api/services/scores/scoreApiSlice";
import { selectCurrentUser } from "../../pages/api/features/auth/authSlice";
import { selectCurrentData } from "../../pages/api/features/extra/extraSlice";
import { setUpdateScore } from "../../pages/api/features/extra/extraSlice";
// import Loading from "../Loading/Loading";

import background from "../../public/img/bgModal.png";

type Props = {
  keyCarrousel: number;
  index: number;
  stateSide: string;
  arrNumberQuest: number[];
  numberTrivia: number;
  arrQuest: string[];
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
  arrQuest,
}: Props) => {
  const [dataTable, setDataTable] = useState<DataTable[] | []>([]);
  const { id: userId } = useSelector(selectCurrentUser);
  const extraState = useSelector(selectCurrentData);
  // const { data, error, isLoading } = useGetQuestScoreQuery({
  //   userId,
  //   numberTrivia,
  // });

  const [trigger, { isLoading: isTriggerLoading,  }] = useLazyGetQuestScoreQuery({
    // refetchOnMountOrArgChange: true,
    // refetchOnFocus:true,
  });

  //ref

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

  // const getScoreQuest = async (trivia: number) => {
  //   const { data } = await trigger({ userId, numberTrivia: trivia });
  //   setDataTable([
  //     ...dataTable,
  //     { quest: arrQuest[trivia - 1], score: data.value },
  //   ]);
  // };

  const getScoreQuest = async (trivia: number, index: number) => {
    const { data } = await trigger({ userId, numberTrivia: trivia });
    // console.log(data, trivia)
    setDataTable((prev) => [
      ...prev,
      { quest: arrQuest[index], score: data.value },
    ]);
  };

  useEffect(() => {
    setDataTable([])
    const fetchData = async () => {
      for (const [index, value] of arrNumberQuest.entries()) {
        //  await getScoreQuest(numberQuest)
        await getScoreQuest(value, index);
      }
    };
    fetchData();
  }, [extraState]);

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

      <div className="z-20 w-10/12 lg:w-[60rem] flex flex-col gap-3 lg:gap-5">
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
            {dataTable.map((data, index) => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewResults;
