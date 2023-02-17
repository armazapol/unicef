import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./../../pages/api/features/auth/authSlice";
import { useRouter } from "next/router";
import { logOut } from "./../../pages/api/features/auth/authSlice";

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
  toggleViewSintomas: () => void;
  toggleViewSignosAlarma: () => void;
  toggleViewNuevasVacunas: () => void;
  toggleViewVPH: () => void;
  toggleViewVacunacionHepatitisA: () => void;
  toggleViewQuestSlide5: () => void;
  toggleViewQuestSlide4: () => void;
  toggleViewQuestSlide3: () => void;
  toggleViewQuestSlide2: () => void;
  toggleViewQuestSlide1: () => void;
  viewVideo: () => void;
};

const Menu = ({
  toggleViewAntecedentes,
  toggleViewDiagnostico,
  toggleViewAlarmaPrevencion,
  toggleViewVacunas,
  toggleViewInmunidadColectiva,
  toggleViewTiposVacunas,
  toggleViewInocuidadEfectividad,
  toggleViewEmbarazoLactancia,
  toggleViewEfectosSecundarios,
  toggleViewConsecuencias,
  toggleViewSintomas,
  toggleViewSignosAlarma,
  toggleViewNuevasVacunas,
  toggleViewVPH,
  toggleViewVacunacionHepatitisA,
  toggleViewQuestSlide2,
  toggleViewQuestSlide3,
  toggleViewQuestSlide4,
  toggleViewQuestSlide5,
  toggleViewQuestSlide1

}: Props) => {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const router = useRouter();

  const logoutSession = () => {
    router.push("/login");
    dispatch(logOut(null));
  };

  return (
    <div className="flex fixed w-screen fullvh lg:h-screen items-center justify-center text-white top-0 left-0 gap-10 ">
      <div className="grid grid-cols-2 grid-rows-2 h-full w-full">
        <div className="flex items-center py-1 lg:py-10 gap-0 lg:gap-2 flex-col">
          <h2 className="text-white text-base lg:text-xl">Módulo 1</h2>
          <p className="hover:underline cursor-pointer text-xs lg:text-base whitespace-nowrap text-ellipsis overflow-hidden" onClick={toggleViewAntecedentes}>
            Antecedentes
          </p>
          <p className="hover:underline cursor-pointer text-xs lg:text-base whitespace-nowrap text-ellipsis overflow-hidden" onClick={toggleViewAlarmaPrevencion}>
            Aislamiento y prevención del contagio
          </p>
          <p className="hover:underline cursor-pointer text-xs lg:text-base whitespace-nowrap text-ellipsis overflow-hidden" onClick={toggleViewSintomas}>
            Síntomas
          </p>
          <p className="hover:underline cursor-pointer text-xs lg:text-base whitespace-nowrap text-ellipsis overflow-hidden" onClick={toggleViewDiagnostico}>
            Diagnóstico
          </p>
          <p className="hover:underline cursor-pointer text-xs lg:text-base whitespace-nowrap text-ellipsis overflow-hidden" onClick={toggleViewSignosAlarma}>
            Signos de Alarma y Factores de riesgo
          </p>
        </div>
        <div className="flex items-center py-1 lg:py-10 gap-0 lg:gap-2 flex-col">
          <h2 className="text-white text-base lg:text-xl">Módulo 2</h2>
          <div className="grid grid-cols-2 gap-0 lg:gap-2 items-center">
          <p className="hover:underline cursor-pointer text-xs lg:text-base whitespace-nowrap text-ellipsis overflow-hidden" onClick={toggleViewVacunas}>
            ¿Cómo actuan las vacunas?
          </p>
          <p className="hover:underline cursor-pointer text-xs lg:text-base whitespace-nowrap text-ellipsis overflow-hidden" onClick={toggleViewInmunidadColectiva}>
            Inmunidad Colectiva
          </p>
          <p className="hover:underline cursor-pointer text-xs lg:text-base whitespace-nowrap text-ellipsis overflow-hidden" onClick={toggleViewEfectosSecundarios}>
            Efectos secundarios
          </p>
          <p className="hover:underline cursor-pointer text-xs lg:text-base whitespace-nowrap text-ellipsis overflow-hidden" onClick={toggleViewEmbarazoLactancia}>
            Embarazo y lactancia materna
          </p>
          <p className="hover:underline cursor-pointer text-xs lg:text-base  whitespace-nowrap text-ellipsis overflow-hidden" onClick={toggleViewTiposVacunas}>
            Tipos de Vacunas y Esquema de la vacunación
          </p>
          <p className="hover:underline cursor-pointer text-xs lg:text-base whitespace-nowrap text-ellipsis overflow-hidden" onClick={toggleViewInocuidadEfectividad}>
            Inocuidad y Efectividad de las vacunas
          </p>
          <p className="hover:underline cursor-pointer text-xs lg:text-base whitespace-nowrap text-ellipsis overflow-hidden" onClick={toggleViewConsecuencias}>
            Consecuencias de las variantes en vacunas
          </p>
          </div>
        
        </div>
        <div className="flex items-center py-1 lg:py-10 gap-0 lg:gap-2 flex-col">
          <h2 className="text-white text-base lg:text-xl">Módulo 3</h2>
          <p className="hover:underline cursor-pointer text-xs lg:text-base whitespace-nowrap text-ellipsis overflow-hidden" onClick={toggleViewNuevasVacunas}>
            Nuevas vacunas incluidas
          </p>
          <p className="hover:underline cursor-pointer text-xs lg:text-base whitespace-nowrap text-ellipsis overflow-hidden" onClick={toggleViewVPH}>
            Vacuna contra el Virus Papiloma Humano (VPH)
          </p>
          <p className="hover:underline cursor-pointer text-xs lg:text-base whitespace-nowrap text-ellipsis overflow-hidden" onClick={toggleViewVacunacionHepatitisA}>
            Vacunación hepatitis A
          </p>
        </div>
        <div className="flex items-center py-1 lg:py-10 gap-0 lg:gap-2 flex-col">
          <h2 className="text-white text-base lg:text-xl">Módulo 4</h2>
          <div className="grid grid-cols-1 gap-0 lg:gap-2 items-center text-center">
          <p className="hover:underline cursor-pointer text-xs lg:text-base whitespace-nowrap text-ellipsis overflow-hidden" onClick={toggleViewQuestSlide1}>
            ¿Qué hacer si ya tuviste COVID o si ya te vacunaste?
          </p>
          <p className="hover:underline cursor-pointer text-xs lg:text-base whitespace-nowrap text-ellipsis overflow-hidden " onClick={toggleViewQuestSlide2}>
            ¿Que sirve frente al COVID? ¿El frío, los antibióticos o las
            vacunas?
          </p>
          <p className="hover:underline cursor-pointer text-xs lg:text-base whitespace-nowrap text-ellipsis overflow-hidden" onClick={toggleViewQuestSlide3}>
            ¿Pueden las vacunas afectar la fertilidad o tu ADN? ¿Me puedo
            vacunar si estoy embarazada?
          </p>
          <p className="hover:underline cursor-pointer text-xs lg:text-base whitespace-nowrap text-ellipsis overflow-hidden" onClick={toggleViewQuestSlide4}>
            Tiempo de aparición de síntomas y duración de protección
          </p>
          <p className="hover:underline cursor-pointer text-xs lg:text-base whitespace-nowrap text-ellipsis overflow-hidden" onClick={toggleViewQuestSlide5}>
            ¿Los zapatos, las mascarillas y los mosquitos propagan el COVID?
          </p>
       </div>
        </div>
      </div>
      <p className="absolute top-5 left-5 font-semibold cursor-pointer text-xs md:text-base hidden lg:block">
        Bienvenido, <span className="uppercase ">{user.firstName}</span>
      </p>
      <p
        className="absolute bottom-2 lg:bottom-5 left-5 font-semibold cursor-pointer text-xs md:text-base"
        onClick={logoutSession}
      >
        Cerrar Sesión
      </p>
    </div>
  );
};

export default Menu;
