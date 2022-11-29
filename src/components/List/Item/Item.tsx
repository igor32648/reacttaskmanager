import { start } from 'repl';
import { Itask } from '../../../types/Itask';
import style from '../List.module.scss'

export function Item({ task, time, selected, completed, id }: Itask) {
  return (
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}
