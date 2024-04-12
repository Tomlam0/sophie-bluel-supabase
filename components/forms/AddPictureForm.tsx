// Used in Home page / Modal
"use client";

import Image from "next/image";
import { useState, useEffect, ChangeEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TbPhotoPlus } from "react-icons/tb";

import Button from "../common/Button";

const AddPictureFormSchema = z.object({
    file: z.any().refine((file) => file && file.length > 0, {
        message: "L'ajout d'image est obligatoire",
    }),
    title: z
        .string()
        .min(1, "Ce champ est requis")
        .min(2, "Au moins 2 caractères requis")
        .max(30, "Maximum 30 caractères"),
    category: z
        .string()
        .min(1, "Ce champ est requis")
        .min(2, "Au moins 2 caractères requis")
        .max(20, "Maximum 30 caractères"),
});

type Inputs = z.infer<typeof AddPictureFormSchema>;

export default function AddPictureForm() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(AddPictureFormSchema),
    });

    // Handle picture preview and file in form
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    useEffect(() => {
        register("file");
    }, [register]);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setImagePreview(URL.createObjectURL(file));
            setValue("file", [file]);
        } else {
            setSelectedFile(null);
            setImagePreview(null);
            setValue("file", null);
        }
    };
    // End of Handle picture preview and file in form

    const onSubmit: SubmitHandler<Inputs> = () => {
        toast.success("Photo ajoutée");
    };

    return (
        <>
            <form
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-10 w-3/4 "
            >
                {/* Upload picture */}
                <div className="flex flex-col justify-center items-center gap-3 w-full p-5 rounded-md bg-addPictureForm">
                    {/* Display picture preview */}
                    {imagePreview ? (
                        <Image
                            src={imagePreview}
                            alt="Aperçu de l'image"
                            width={180}
                            height={180}
                        />
                    ) : (
                        <>
                            {/* Display add picture */}
                            <TbPhotoPlus className="text-primary h-14 w-14" />
                            <label
                                htmlFor="file"
                                className="text-center text-sm text-primary font-semibold cursor-pointer bg-addPictureFormDarker rounded-full py-3 px-8"
                            >
                                + Ajouter photo
                            </label>
                            <input
                                className="hidden"
                                type="file"
                                accept="image/png, image/jpeg, image/jpg"
                                id="file"
                                {...register("file")}
                                onChange={handleImageChange}
                            />
                            <p className="text-xs">jpg, png : 4mo max</p>
                            {errors.file && (
                                <span className="text-secondary text-xs">
                                    {errors.file.message as string}
                                </span>
                            )}
                        </>
                    )}
                </div>

                {/* Title */}
                <div>
                    <label className="text-sm" htmlFor="title">
                        Titre
                    </label>
                    <input
                        className="w-full p-3 text-sm shadow-md
                        outline-none focus:border focus:border-primary focus:rounded"
                        type="text"
                        id="title"
                        {...register("title")}
                    />
                    {errors.title && (
                        <span className="text-secondary text-xs">
                            {errors.title.message}
                        </span>
                    )}
                </div>

                {/* Category */}
                <div>
                    <label className="text-sm" htmlFor="category">
                        Catégorie
                    </label>
                    <input
                        className="w-full p-3 text-sm shadow-md
                        outline-none focus:border focus:border-primary focus:rounded"
                        type="text"
                        id="category"
                        {...register("category")}
                    />
                    {errors.category && (
                        <span className="text-secondary text-xs">
                            {errors.category.message}
                        </span>
                    )}
                </div>
                <Button text="Valider" />
            </form>
        </>
    );
}
