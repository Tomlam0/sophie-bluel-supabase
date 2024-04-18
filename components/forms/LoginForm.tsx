"use client";

const syne = Syne({ subsets: ["latin"] });
import { Syne } from "next/font/google";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "../common/Button";
import ReCaptcha from "../services/ReCaptcha";

const LoginFormSchema = z.object({
  email: z
    .string()
    .min(1, "Ce champ est requis")
    .email("Adresse email invalide")
    .max(254, "Maximum 254 caractères"),
  password: z
    .string()
    .min(1, "Ce champ est requis")
    .min(8, "Au moins 8 caractères requis")
    .max(100, "Maximum 100 caractères"),
});

type Inputs = z.infer<typeof LoginFormSchema>;

export default function LoginForm() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  // React Hook Form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = () => {
    if (!captchaToken) {
      toast.error("Veuillez résoudre le CAPTCHA.");
      return;
    }
    toast.success("Vous êtes connecté");
  };

  return (
    <section id="login" className="flex select-none flex-col items-center">
      <h2 className={`${syne.className} title`}>Log In</h2>

      {/* Form */}
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 flex w-3/4 flex-col gap-10 md:w-2/4 lg:w-1/3"
      >
        {/* Email */}
        <div>
          <label className="text-sm" htmlFor="email">
            E-mail
          </label>
          <input
            className="w-full p-3 text-sm shadow-md outline-none focus:rounded focus:border focus:border-primary"
            type="email"
            id="email"
            autoComplete="email"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-xs text-secondary">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="text-sm" htmlFor="password">
            Mot de passe
          </label>
          <input
            className="w-full p-3 text-sm shadow-md outline-none focus:rounded focus:border focus:border-primary"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-xs text-secondary">
              {errors.password.message}
            </span>
          )}
        </div>
        <ReCaptcha onChange={setCaptchaToken} />
        <Button text="Se connecter" />
      </form>

      <a
        className="mt-9 text-sm underline duration-300 ease-in-out hover:text-secondary hover:transition-all"
        href="#"
        draggable={false}
      >
        Mot de passe oublié
      </a>

      <ToastContainer />
    </section>
  );
}
