import style from "./Counter.module.scss"

export default function Counter() {
  return (
    <>
      <span className={style.counterNumber}>0</span>
      <span className={style.counterNumber}>0</span>
      <span className={style.counterDivision}>:</span>
      <span className={style.counterNumber}>0</span>
      <span className={style.counterNumber}>0</span>
    </>
  );
}
