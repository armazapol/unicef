import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";

import Input1 from "../components/commons/input/Input1";
import ButtonForm from "../components/commons/button/ButtonForm";
import { useCreateUserMutation } from "./api/services/auth/apiSlice";
import Loading from "../components/Loading/Loading";
import Link from "next/link";

import Image from "next/image";
import background from "../public/img/bgModal.png";
import logo from "../public/img/view1/logo.png";

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
      return toast.error("Ocurrió un error.");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-white">
         {isLoading && <Loading text="Cargando.." />}
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
      <div className="flex-col flex items-center gap-5">
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
        <div className="w-10/12 md:w-96 z-10 bg-white rounded-xl py-8 md:py-5 px-5 md:px-10 shadow-md gap-5 md:gap-4   flex flex-col">
          <h1 className="text-center text-2xl md:text-3xl font-semibold first_color ">
            Registro
          </h1>
          <div>
            <Input1 type="email" placeholder="Email" {...register("email")} />
            <Input1
              type="password"
              placeholder="Contraseña"
              {...register("password")}
            />
            <Input1 type="password" placeholder="Repetir Contraseña" {...register("repeatPassword")} />
            <Input1 type="text" placeholder="Nombre"  {...register("firstName")} />
        <Input1 type="text" placeholder="Apellido"  {...register("lastName")} />
        {stateRegex && (
          <p>
            La contraseña debe tener 6 caracteres, símbolos, números, letra
            mayúscula y minúscula.
          </p>
        )}
        {stateIgualdad && <p>Las contraseñas son diferentes.</p>}
          </div>
          <div className="flex flex-col gap-5">
            <ButtonForm text="Registrar" onClick={handleSubmit(onSubmit)} />
            <Link href="/login">
              <ButtonForm text="Login" />
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="w-96">
        <h1 className="text-center text-xl font-semibold">Registro</h1>
        {isLoading && <Loading text="Cargando.." />}
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
        <button
          onClick={handleSubmit(onSubmit)}
          className="text-center bg-blue-500 text-white p-2 mt-5 w-full"
        >
          Registrar
        </button>
        <Link href="login">
          <button className="text-center bg-blue-500 text-white p-2 mt-5 w-full">
            Login
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default Register;
