import { render } from "@testing-library/react";
import React from "react";
import { Iprops } from "../../types/Iprops";
import style from "./Button.module.scss";

 interface Props {
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void,
  children?: React.ReactNode
}

export default function Button({onClick, type, children}: Props){
  return (
    <button onClick={onClick} type={type} className={style.button}>
      {children}
    </button>
  )
}

