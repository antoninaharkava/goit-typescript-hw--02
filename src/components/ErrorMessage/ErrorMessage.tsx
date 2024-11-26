import React from "react";
import style from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return (
    <p className={style.errorMessage}>
      Something went wrong, please try again later!
    </p>
  );
};

export default ErrorMessage;