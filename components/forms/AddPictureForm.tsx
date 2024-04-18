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
        className="flex w-3/4 flex-col gap-10 "
      >
        {/* Upload picture */}
        <div className="flex w-full flex-col items-center justify-center gap-3 rounded-md bg-addPictureForm p-5">
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
              <TbPhotoPlus className="h-14 w-14 text-primary" />
              <label
                htmlFor="file"
                className="cursor-pointer rounded-full bg-addPictureFormDarker px-8 py-3 text-center text-sm font-semibold text-primary"
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
                <span className="text-xs text-secondary">
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
            className="w-full p-3 text-sm shadow-md outline-none focus:rounded focus:border focus:border-primary"
            type="text"
            id="title"
            {...register("title")}
          />
          {errors.title && (
            <span className="text-xs text-secondary">
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
            className="w-full p-3 text-sm shadow-md outline-none focus:rounded focus:border focus:border-primary"
            type="text"
            id="category"
            {...register("category")}
          />
          {errors.category && (
            <span className="text-xs text-secondary">
              {errors.category.message}
            </span>
          )}
        </div>
        <Button text="Valider" />
      </form>
    </>
  );
}
