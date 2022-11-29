import { Itask } from "../../types/Itask";
import { Item } from "./Item/Item";
import style from "./List.module.scss";

interface Props {
  tasks: Itask[],
  selectTask: (selectedTask: Itask) => void;
}

export default function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.tasksList}>
      <h2>Today's Tasks</h2>
      <ul>
        {tasks.map(item => (
          <Item 
              selectTask={selectTask}
              key={item.id} 
              {...item} />
        ))}
      </ul>
    </aside>
  );
}
