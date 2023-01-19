import React from "react";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { decodeToken } from "react-jwt";

import Input1 from "../components/commons/input/Input1";
import {
  useLoginUserMutation,
  useLazyGetUserQuery,
} from "./api/services/auth/apiSlice";
import { setToken, setUser } from "./api/features/auth/authSlice";
import Loading from "../components/Loading/Loading";
import Link from "next/link";

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
      const idUser = Object.values(datajwt)[2];
      dispatch(setToken({ accesstoken: IdToken }));
      try {
        const user = await trigger(idUser);
        dispatch(setUser(user.data));
        router.push("/main");
      } catch (e: any) {
        return console.log(e);
      }
    } catch (e: any) {
      return toast.error(e.data.message);
      // console.log(error)
    }
  };
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <Toaster />
      {isLoading && <Loading text="Cargando.." />}
      {isTriggerLoading && (
        <Loading text="Obteniendo información de usuario.." />
      )}
      <div className="w-96">
        <h1 className="text-center text-xl font-semibold">Login</h1>
        <Input1 type="email" label="Email" {...register("email")} />
        <Input1 type="password" label="Contraseña" {...register("password")} />
        <div
          onClick={handleSubmit(onSubmit)}
          className="text-center bg-blue-500 text-white p-2 mt-5"
          role="button"
        >
          Ingresar
        </div>
        <Link href="/register">
          <div
            className="text-center bg-blue-500 text-white p-2 mt-5"
            role="button"
          >
            registrar
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
