import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";

import Modal from "../content/Modal";

export default function ModifyButton() {
  const [showModal, setShowModal] = useState(false);

  // Used to add or remove scrolling on background when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Clean up class when component is dismount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showModal]);

  return (
    <>
      <div className="flex items-center justify-center gap-1">
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="inline-flex items-center p-1 duration-300 ease-in-out hover:text-secondary hover:transition-all"
        >
          <HiOutlinePencilSquare className="h-5 w-5" />
          <p className="text-sm">modifier</p>
        </button>
      </div>

      {/* Create Portal can dislay modal*/}
      {showModal &&
        createPortal(
          <Modal
            closeModal={() => {
              setShowModal(false);
            }}
          />,
          document.body
        )}
    </>
  );
}
