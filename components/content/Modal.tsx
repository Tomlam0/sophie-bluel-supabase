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
      <div className="fixed inset-0 bg-textDark/50" onClick={closeModal}></div>

      {/* Modal */}
      <div className="modal fixed left-1/2 top-1/2 z-10 flex h-2/3 w-5/6 -translate-x-1/2 -translate-y-1/2 select-none flex-col items-center gap-8 overflow-y-scroll rounded-lg bg-background px-6 py-8 md:w-4/6 md:px-20 md:py-12 xl:w-3/5 xl:px-32">
        {addingPicture ? (
          <>
            {/* Modal add picture*/}
            <p className="text-center text-2xl">Ajout photo</p>
            <AddPictureForm />
            <button
              onClick={closeAddingPicture}
              className="absolute left-4 top-4 text-text duration-300 ease-in-out hover:text-secondary hover:transition-all"
            >
              <FaArrowLeft className=" md:h- h-5 w-5 md:w-6" />
            </button>
          </>
        ) : (
          <>
            {/* Modal gallery */}
            <p className="text-center text-2xl">Galerie photo</p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              <GalleryPicture
                pictures={PicturesData}
                showTitles={false}
                showDeleteIcon={true}
              />
            </div>
            <Button text="Ajouter une photo" onClick={openAddingPicture} />
          </>
        )}

        {/* Close modal icon */}
        <button
          onClick={closeModal}
          className="absolute right-2 top-2 text-text duration-300 ease-in-out hover:text-secondary hover:transition-all"
        >
          <IoIosClose className=" h-8 w-8 md:h-10 md:w-10" />
        </button>
      </div>
    </>
  );
}
