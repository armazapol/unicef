import React, { useState } from "react";

type Props = {
  data: {
    correcta: boolean;
    respuesta: string;
  };
  actualizarFinTrivia: () => void;
  actualizarPuntaje: () => void;
  finishTrivia: boolean;
};

type Data = {
  correcta: boolean;
  respuesta: string;
};

const TriviaOpcion = ({
  data,
  actualizarFinTrivia,
  actualizarPuntaje,
  finishTrivia,
}: Props) => {
  const [state, setState] = useState(true);
  const [stateRespuesta, setStateRespuesta] = useState(false);

  const responder = (data: Data) => {
    if (!finishTrivia) {
      if (state) {
        setState(false);
        if (data.correcta) {
          setStateRespuesta(true);
          actualizarFinTrivia();
        } else {
          actualizarPuntaje();
        }
      }
    }
  };

  // console.log("state:", state, "stateres:", stateRespuesta);

  return (
    <li
      className={` py-1 px-3 lg:px-10 rounded-2xl h-12 lg:h-14 leading-none text-left font-semibold text-xs lg:text-lg border-b-4
      ${state && "hover:bg-zinc-300 cursor-pointer bg-white text-black border-sky-500 "} 
       ${
         state === false
           ? stateRespuesta === true
             ? "bg-green-500 text-white border-green-900"
             : "bg-red-500 text-white border-red-900"
           : null
       } `}
      onClick={() => responder(data)}
    >
      {data.respuesta}
    </li>
  );
};

export default TriviaOpcion;
