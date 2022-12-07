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

  return (
    <li
      className={`text-white p-2   
      ${state && "hover:bg-zinc-600 cursor-pointer bg-zinc-500"} 
       ${!state && stateRespuesta ? "bg-green-500" : "bg-red-500"} `}
      onClick={() => responder(data)}
    >
      {data.respuesta}
    </li>
  );
};

export default TriviaOpcion;
