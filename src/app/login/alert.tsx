import React from "react";
import tw from "twin.macro";
const AlertSuccess = tw.div`bg-green-400 p-6 text-white font-bold text-2xl text-center absolute top-0 left-0 w-full`;
const AlertError = tw.div`bg-red-400 p-6 text-white font-bold text-2xl text-center absolute top-0 left-0 w-full`;

const Alert = ({ children, variant }) => {
  switch (variant) {
    case "success":
      return <AlertSuccess id="alertSuccessLogin">{children}</AlertSuccess>;
      break;
    case "error":
      return <AlertError>{children}</AlertError>;
      break;
    default:
      break;
  }
};

export default Alert;
