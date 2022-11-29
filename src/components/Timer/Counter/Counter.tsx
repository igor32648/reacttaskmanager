import { useState } from "react";
import { timeToSeconds } from "../../../common/utils/time";
import { Itask } from "../../../types/Itask";
import style from "./Counter.module.scss";

interface Props {
  selected: Itask | undefined;
  time: number | undefined
}

export default function Counter({ selected, time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteDozen, minuteUnit] = String(minutes).padStart(2, "0");
  const [secondDozen, secondUnit] = String(seconds).padStart(2, "0");

  if (selected?.time) {
    timeToSeconds(selected.time);
  }
  return (
    <>
      <span className={style.counterNumber}>{minuteDozen}</span>
      <span className={style.counterNumber}>{minuteUnit}</span>
      <span className={style.counterDivision}>:</span>
      <span className={style.counterNumber}>{secondDozen}</span>
      <span className={style.counterNumber}>{secondUnit}</span>
    </>
  );
}
