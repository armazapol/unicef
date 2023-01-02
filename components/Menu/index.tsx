import React from "react";

type Props = {
  toggleViewAntecedentes: () => void;
  toggleViewDiagnostico: () => void;
  toggleViewAlarmaPrevencion: () => void;
  toggleViewVarianteCovid: () => void;
  toggleViewVacunas: () => void;
  toggleViewInmunidadColectiva: () => void;
  toggleViewTiposVacunas: () => void;
  toggleViewInocuidadEfectividad: () => void;
  toggleViewEmbarazoLactancia: () => void;
  toggleViewEfectosSecundarios: () => void;
  toggleViewAvanceVacunacion: () => void;
  toggleViewConsecuencias: () => void;
  viewVideo: () => void;
};

const Menu = ({
  toggleViewAntecedentes,
  toggleViewDiagnostico,
  toggleViewAlarmaPrevencion,
  toggleViewVarianteCovid,
  toggleViewVacunas,
  toggleViewInmunidadColectiva,
  toggleViewTiposVacunas,
  toggleViewInocuidadEfectividad,
  toggleViewEmbarazoLactancia,
  toggleViewEfectosSecundarios,
  toggleViewAvanceVacunacion,
  toggleViewConsecuencias,
  viewVideo
}: Props) => {
  return (
    <div className="flex fixed w-screen h-screen items-center justify-center text-white top-0 left-0 gap-10">
      <div className="flex">
        <ul className="text-white text-center text-xl lg:text-2xl flex flex-col gap-5 ">
          <li className="hover:underline cursor-pointer" onClick={toggleViewAntecedentes}>Antecedentes</li>
          <li className="hover:underline cursor-pointer" onClick={toggleViewAlarmaPrevencion}>
            Aislamiento y prevención del contagio
          </li>
          <li className="hover:underline cursor-pointer" onClick={viewVideo}>
            Síntomas
          </li>
          <li className="hover:underline cursor-pointer" onClick={toggleViewDiagnostico}>Diagnóstico</li>
          <li className="hover:underline cursor-pointer" >
            <a href="https://www.unicef.org/peru/" target="_blank" rel="noopener noreferrer">
            Signos de alarma y Factores de Riesgo
            </a>
          
          </li>
          <li className="hover:underline cursor-pointer" onClick={toggleViewVacunas}>
            ¿Cómo actuan las vacunas?
          </li>
          <li className="hover:underline cursor-pointer" onClick={toggleViewInmunidadColectiva}>
            Inmunidad Colectiva
          </li>
          <li className="hover:underline cursor-pointer" onClick={toggleViewEfectosSecundarios}>
            Efectos Secundarios
          </li>
          <li className="hover:underline cursor-pointer" onClick={toggleViewEmbarazoLactancia}>
            Embarazo y lactancia materna
          </li>
          <li className="hover:underline cursor-pointer" onClick={toggleViewAvanceVacunacion}>
            Tipos de Vacunas. Avance y esquema de la Vacunación
          </li>
          <li className="hover:underline cursor-pointer" onClick={toggleViewInocuidadEfectividad}>
            Inocuidad y Efectividad de las vacunas
          </li>
          <li className="hover:underline cursor-pointer" onClick={toggleViewConsecuencias}>
            Consecuencias de las variantes en vacunas
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
