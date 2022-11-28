import { Button } from "../Button/Button";
import Counter from "./Counter/Counter";
import style from "./Timer.module.scss"

export default function Timer() {
  return (
    <div className={style.timer}>
      <div className={style.title}>
        <p>Choose a task and start the timer</p>
      </div>
      <div className={style.counterWrapper}>
        <Counter />
      </div>
      <Button>Start</Button>
    </div>
  );
}
