import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import Spinner from "../components/spinner/Spinner";
import Input1 from "../components/commons/input/Input1";
import { useCreateUserMutation } from "./api/services/auth/apiSlice";
import Loading from "../components/Loading/Loading";
import Link from 'next/link';

type Form = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  repeatPassword: string;
};

const Register = () => {
  const [createUser, { isLoading, error }] = useCreateUserMutation();

  const [stateRegex, setStateRegex] = useState(false);
  const [stateIgualdad, setStateIgualdad] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm<Form>();

  const statePassword = watch(["password"])[0];
  const stateRepeatPass = watch(["repeatPassword"])[0];

  const cleanForm = () => {
    reset({
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      repeatPassword: "",
    });
  };

  useEffect(() => {
    if (statePassword && stateRepeatPass) {
      if (statePassword.trim() !== "" && stateRepeatPass.trim() !== "") {
        if (statePassword === stateRepeatPass) {
          setStateIgualdad(false);
        } else {
          setStateIgualdad(true);
        }
      }
    }
  }, [statePassword, stateRepeatPass]);

  useEffect(() => {
    const regex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i;
    if (statePassword) {
      if (statePassword.trim() !== "") {
        if (regex.test(statePassword)) {
          setStateRegex(false);
        } else {
          setStateRegex(true);
        }
      }
    }
  }, [statePassword]);

  const onSubmit: SubmitHandler<Form> = async (data: Form) => {
    const { email, password, firstName, lastName, repeatPassword } = data;
    if (
      email === "" ||
      password === "" ||
      firstName === "" ||
      lastName === "" ||
      repeatPassword === ""
    )
      return toast.error("Llenar todos los campos");
    if (password !== repeatPassword)
      return toast.error("Contraseñas diferentes");
    if (stateRegex)
      return toast.error(
        "La contraseña debe tener 6 caracteres como mínimo, símbolos, números, letra mayúscula y minúscula."
      );
    try {
      await createUser({ email, password, firstName, lastName }).unwrap();
      cleanForm();
      return toast.success("Cuenta creada con éxito!");
    } catch (error) {
      return toast.error(
        "Ocurrió un error."
      );
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <Toaster />
      <div className="w-96">
        <h1 className="text-center text-xl font-semibold">Registro</h1>
        {isLoading && <Loading text="Cargando.." />}
        {/* {error && <p>Error al registrar: {error.error} </p>} */}
        <Input1 type="email" label="Email" {...register("email")} />
        <Input1 type="password" label="Contraseña" {...register("password")} />
        <Input1
          type="password"
          label="Repetir Contraseña"
          {...register("repeatPassword")}
        />
        <Input1 type="text" label="Nombres" {...register("firstName")} />
        <Input1 type="text" label="Apellidos" {...register("lastName")} />
        {stateRegex && (
          <p>
            La contraseña debe tener 6 caracteres, símbolos, números, letra
            mayúscula y minúscula.
          </p>
        )}
        {stateIgualdad && <p>Las contraseñas son diferentes.</p>}
        {/* {stateIgualdad || stateRegex ? (
             <button
             className="text-center bg-blue-500 text-white p-2 mt-5 w-full"
             disabled
           >
             Registrar
           </button>
        ) : (
          <button
            onClick={handleSubmit(onSubmit)}
            className="text-center bg-blue-500 text-white p-2 mt-5 w-full"
          >
            Registrar
          </button>
        )} */}
        <button
          onClick={handleSubmit(onSubmit)}
          className="text-center bg-blue-500 text-white p-2 mt-5 w-full"
        >
          Registrar
        </button>
        <Link href="login">
        <button
          className="text-center bg-blue-500 text-white p-2 mt-5 w-full"
        >
          Login
        </button>
        </Link>
      
      </div>
    </div>
  );
};

export default Register;
