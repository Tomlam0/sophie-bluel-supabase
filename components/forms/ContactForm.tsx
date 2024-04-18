"use client";

import { Syne } from "next/font/google";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ReCaptcha from "../services/ReCaptcha";
import Button from "../common/Button";

const syne = Syne({ subsets: ["latin"] });

const FormSchema = z.object({
    name: z
        .string()
        .min(1, "Ce champ est requis")
        .min(2, "Au moins 2 caractères requis")
        .max(50, "Maximum 50 caractères"),
    email: z
        .string()
        .min(1, "Ce champ est requis")
        .email("Adresse email invalide")
        .max(254, "Maximum 254 caractères"),
    message: z
        .string()
        .min(1, "Ce champ est requis")
        .min(10, "Au moins 10 caractères requis")
        .max(1000, "Maximum 1000 caractères"),
});

type Inputs = z.infer<typeof FormSchema>;

export default function ContactForm() {
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    // React Hook Form validation
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(FormSchema),
    });

    const onSubmit: SubmitHandler<Inputs> = () => {
        if (!captchaToken) {
            toast.error("Veuillez résoudre le CAPTCHA.");
            return;
        }
        toast.success("Message envoyé avec succès!");
    };

    return (
        <section
            id="contact"
            className="select-none flex flex-col items-center"
        >
            <h2 className={`${syne.className} title`}>Contact</h2>
            <p className="mt-1">Vous avez un projet ? Discutons-en</p>

            <form
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-10 mt-10 w-3/4 md:w-2/4 lg:w-1/3"
            >
                {/* Name */}
                <div>
                    <label className="text-sm" htmlFor="name">
                        Nom
                    </label>
                    <input
                        className="w-full p-3 text-sm shadow-md outline-none focus:border focus:border-primary focus:rounded"
                        type="text"
                        id="name"
                        autoComplete="name"
                        {...register("name")}
                    />
                    {errors.name && (
                        <span className="text-secondary text-xs">
                            {errors.name.message}
                        </span>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label className="text-sm" htmlFor="email">
                        E-mail
                    </label>
                    <input
                        className="w-full p-3 text-sm shadow-md outline-none focus:border focus:border-primary focus:rounded"
                        type="email"
                        id="email"
                        autoComplete="email"
                        {...register("email")}
                    />
                    {errors.email && (
                        <span className="text-secondary text-xs">
                            {errors.email.message}
                        </span>
                    )}
                </div>

                {/* Message */}
                <div>
                    <label className="text-sm" htmlFor="message">
                        Message
                    </label>

                    <textarea
                        className="w-full p-3 text-sm shadow-md outline-none focus:border focus:border-primary focus:rounded"
                        rows={6}
                        id="message"
                        {...register("message")}
                    ></textarea>
                    {errors.message && (
                        <span className="text-secondary text-xs">
                            {errors.message.message}
                        </span>
                    )}
                </div>
                <ReCaptcha onChange={setCaptchaToken} />
                <Button text="Envoyer" />
            </form>
            <ToastContainer />
        </section>
    );
}
