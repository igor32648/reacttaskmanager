import { Itask } from "../../types/Itask";
import { Item } from "./Item/Item";
import style from "./List.module.scss";


export default function List({ tasks }: {tasks: Itask[]}) {
 
  return (
    <aside className={style.tasksList}>
      <h2>
        Today's Tasks
      </h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}
