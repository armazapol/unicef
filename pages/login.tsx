import React from "react";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { decodeToken } from "react-jwt";
import Image from "next/image";

import Input1 from "../components/commons/input/Input1";
import ButtonForm from "../components/commons/button/ButtonForm";
import {
  useLoginUserMutation,
  useLazyGetUserQuery,
} from "./api/services/auth/apiSlice";
import { setToken, setUser } from "./api/features/auth/authSlice";
import Loading from "../components/Loading/Loading";
import Link from "next/link";
import background from "../public/img/bgModal.png";
import logo from "../public/img/view1/logo.png";

type Form = {
  email: string;
  password: string;
};

const Login = () => {
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const [trigger, { isLoading: isTriggerLoading, data }] =
    useLazyGetUserQuery();
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Form>();

  const onSubmit: SubmitHandler<Form> = async (data) => {
    const { email, password } = data;
    if (email === "" || password === "")
      return toast.error("Llenar todos los campos");
    try {
      const { IdToken } = await loginUser(data).unwrap();
      const datajwt: any = decodeToken(IdToken);
      const idUser = Object.values(datajwt)[3];
      dispatch(setToken({ accesstoken: IdToken }));
      try {
        const user = await trigger(idUser);
        dispatch(setUser(user.data));
        router.push("/main");
      } catch (e: any) {
        return console.log(e);
      }
    } catch (e: any) {
      if (e.data.message === "User credentials not found or not authorized")
        return toast.error("Usuario no encontrado o no autorizado");
        return toast.error(e.data.message);
      // console.log(e)
    }
  };
  return (
    <div className="fullvh lg:h-screen flex items-center justify-center bg-white text-black">
      <div className="absolute h-1/2 top-0 w-full bg-black">
        <Image
          className="object-cover"
          alt="background"
          src={background}
          placeholder="blur"
          fill
          quality={50}
        />
      </div>
      <Toaster />
      {isLoading && <Loading text="Cargando.." />}
      {isTriggerLoading && (
        <Loading text="Obteniendo información de usuario.." />
      )}
      <div className="flex-col flex items-center gap-10">
        <div className="w-6/12 md:w-8/12 relative">
          <Image
            // className="object-cover"
            alt="background"
            src={logo}
            placeholder="blur"
            // fill
            quality={50}
          />
        </div>
        <div className="w-10/12 md:w-96 z-10 bg-white rounded-xl py-8 md:py-14 px-5 md:px-10 shadow-md gap-5 md:gap-10 flex flex-col">
          <h1 className="text-center text-2xl md:text-3xl font-semibold first_color ">
            Login
          </h1>
          <div>
            <Input1 type="email" placeholder="Email" {...register("email")} />
            <Input1
              type="password"
              placeholder="Contraseña"
              {...register("password")}
            />
          </div>
          <div className="flex flex-col gap-5">
            <ButtonForm text="Ingresar" onClick={handleSubmit(onSubmit)} />
            <Link href="/register">
              <ButtonForm text="registrar" />
            </Link>
            {/* <div
              onClick={handleSubmit(onSubmit)}
              className="text-center bg-blue-500 text-white p-2 mt-5"
              role="button"
            >
              Ingresar
            </div> */}
            {/* <Link href="/register">
              <div
                className="text-center bg-blue-500 text-white p-2 mt-5"
                role="button"
              >
                registrar
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
