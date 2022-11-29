import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { Itask } from "../../types/Itask";
import Button from "../Button/Button";
import Counter from "./Counter/Counter";
import style from "./Timer.module.scss";

interface Props {
  selected: Itask | undefined,
  endTask: () => void
}

export default function Timer({ selected, endTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
    endTask();
  },[selected]);

function regressive(counter: number = 0) {
  setTimeout(() => {
    if(counter > 0) {
      setTime(counter - 1);
      return regressive(counter - 1);
    }
  }, 1000);
}

  return (
    <div className={style.timer}>
      <div className={style.title}>
        <p>Choose a task and start the timer</p>
        Time: {time}
      </div>
      <div className={style.counterWrapper}>
        <Counter selected={selected} time={time} />
      </div>
      <Button onClick={() => regressive(time)}>Start</Button>
    </div>
  );
}
