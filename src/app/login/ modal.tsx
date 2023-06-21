import React from "react";
import tw from "twin.macro";
const ModalSuccess = tw.div`bg-green-400 p-6 text-white font-bold text-2xl text-center absolute top-0 left-0 w-full`;
const ModalError = tw.div`bg-red-400 p-6 text-white font-bold text-2xl text-center absolute top-0 left-0 w-full`;

const Modal = ({ children, variant }) => {
  switch (variant) {
    case "success":
      return <ModalSuccess>{children}</ModalSuccess>;
      break;
    case "error":
      return <ModalError>{children}</ModalError>;
      break;
    default:
      break;
  }
};

export default Modal;
