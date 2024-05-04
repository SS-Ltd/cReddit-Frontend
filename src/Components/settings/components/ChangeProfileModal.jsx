import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FloatingInput from "./FloatingInput";

function ChangeProfileModal(props) {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <Modal
      style={{ opacity: 1, zIndex: 9999 }}
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="flex flex-col"
    >
      <Modal.Body className="border border-gray-700 flex flex-wrap justify-center items-center text-white bg-reddit_greenyDark rounded-b-sm font-plex pb-6 pt-6">
        <div className="flex flex-col w-full items-center justify-center">
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-row justify-center items-center bg-reddit_darkBlue rounded-full p-2">
              <svg
                className="h-8 w-8"
                style={{ fill: "#24a0ed" }}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.79,9.16,2.48,3.85A2.49,2.49,0,0,1,3.75,3.5h12.5a2.49,2.49,0,0,1,1.27.35L12.21,9.16A3.13,3.13,0,0,1,7.79,9.16Z"></path>
                <path d="M13.09,10.31,18.4,5a2.47,2.47,0,0,1,.35,1.27v7.5a2.5,2.5,0,0,1-2.5,2.5H3.75a2.5,2.5,0,0,1-2.5-2.5V6.27A2.47,2.47,0,0,1,1.6,5l5.31,5.31a4.37,4.37,0,0,0,6.18,0Z"></path>
              </svg>
            </div>
            <h1 className="text-white text-xl font-bold font-plex ml-2">
              {props.title}
            </h1>
          </div>
          <p className="text-white text-lg font-plex ml-2 mt-3 pl-4 mb-2">
            {props.message}
          </p>
          {props.inputLabels.map((inputLabel, index) => (
            <div className="w-full flex flex-col justify-center items-center mt-2 pl-5 pr-5">
              <FloatingInput
                key={index}
                id={inputLabel}
                label={inputLabel}
                setInputText={props.onClicks[index]}
              />
            </div>
          ))}
          <div className="w-full flex flex-row justify-end items-center mt-4 pl-5 pr-5">
            <button
              className="w-30 h-10 justify-center flex flex-row bg-white rounded-3xl items-center"
              onClick={props.onConfirm}
              disabled={isDisabled}
            >
              <span
                className={`${
                  isDisabled ? "text-gray-400" : "text-gray-700"
                } text-sm font-bold font-plex`}
              >
                {props.buttonLabel}
              </span>
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ChangeProfileModal;
