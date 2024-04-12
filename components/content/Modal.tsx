// Used in Home page / Displayed by ModifyButton

import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";

import Button from "../common/Button";
import GalleryPicture from "../common/GalleryPicture";
import AddPictureForm from "../forms/AddPictureForm";
import PicturesData from "../../data/galleryPicturesData.json";

interface ModalProps {
    closeModal: () => void;
}

export default function Modal({ closeModal }: ModalProps) {
    // "Add picture" button opens the add picture modal section
    const [addingPicture, setAddingPicture] = useState(false);
    const openAddingPicture = () => setAddingPicture(true);
    const closeAddingPicture = () => setAddingPicture(false);

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-textDark/50"
                onClick={closeModal}
            ></div>

            {/* Modal */}
            <div
                className="modal fixed z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-scroll
                flex flex-col items-center gap-8 w-5/6 md:w-4/6 xl:w-3/5 h-2/3 
                bg-background rounded-lg py-8 md:py-12 px-6 md:px-20 xl:px-32"
            >
                {addingPicture ? (
                    <>
                        {/* Modal add picture*/}
                        <p className="text-2xl text-center">Ajout photo</p>
                        <AddPictureForm />
                        <button
                            onClick={closeAddingPicture}
                            className="absolute left-4 top-4 text-text
                            hover:text-secondary hover:transition-all ease-in-out duration-300"
                        >
                            <FaArrowLeft className=" w-5 h-5 md:w-6 md:h-" />
                        </button>
                    </>
                ) : (
                    <>
                        {/* Modal gallery */}
                        <p className="text-2xl text-center">Galerie photo</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                            <GalleryPicture
                                pictures={PicturesData}
                                showTitles={false}
                                showDeleteIcon={true}
                            />
                        </div>
                        <Button
                            text="Ajouter une photo"
                            onClick={openAddingPicture}
                        />
                    </>
                )}

                {/* Close modal icon */}
                <button
                    onClick={closeModal}
                    className="absolute right-2 top-2 text-text
                    hover:text-secondary hover:transition-all ease-in-out duration-300"
                >
                    <IoIosClose className=" w-8 h-8 md:w-10 md:h-10" />
                </button>
            </div>
        </>
    );
}
