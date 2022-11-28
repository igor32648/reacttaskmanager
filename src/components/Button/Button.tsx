import React from "react";
import style from "./Button.module.scss";

export function Button({children}:{children: string}) {
  return <button className={style.button}>{children}</button>;
}
