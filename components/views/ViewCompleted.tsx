import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import background from "../../public/img/bgModal.png";
import logo from "../../public/img/logo.png";
import icon from "../../public/img/icono-verificado.png";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./../../pages/api/features/auth/authSlice";

const ViewCompleted = () => {
  const user = useSelector(selectCurrentUser);
  console.log(user)

  return (
    <div className="fullvh lg:h-screen w-full z-60 bg-black/60 flex items-center justify-center fixed modal">
      <Image
        className="object-cover"
        alt="background"
        src={background}
        placeholder="blur"
        fill
        // quality={50}
      />
      <div className="w-10/12 lg:w-[70rem] h-[16rem] sm:h-[18rem] lg:h-[30rem] bg-white flex gap-2 p-5 lg:p-10 relative component rounded-md overflow-auto items-center justify-center">
        <div className="absolute right-5 top-0 w-10 lg:w-32">
          <Image className="" alt="quest" src={logo} placeholder="blur" />
        </div>

        <div className="text-sm lg:text-xl flex flex-col gap-5 items-center">
        <div className=" w-20 lg:w-48 ">
            <Image className="" alt="quest" src={icon} placeholder="blur" />
          </div>
          <p className="text-orange-600 font-bold text-xl lg:text-4xl text-center">
            ¡Felicitaciones, {user.firstName} {user.lastName} !
          </p>
          <p className="third_color font-bold text-base lg:text-3xl text-center">
          Completaste satisfactoriamente el curso sobre vacunación regular y Covid-19 
          </p>
          {/* <div className="flex items-center justify-center ">

            <div
              className="bg-gradient-to-r from-[#0b2d61] to-[#0e70cc] rounded-md py-2 px-12 text-white font-bold text-md  lg:text-2xl cursor-pointer z-20 shadow-md shadow-black"
              //   onClick={toggleViewInit}
            >
              Finalizar
            </div>
    
           
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ViewCompleted;
