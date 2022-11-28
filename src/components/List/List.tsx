import { Item } from "./Item/Item";
import style from "./List.module.scss";


export function List() {
  const tasks = [
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "Java",
      time: "03:00:00",
    },
    {
      task: "Spring Framework",
      time: "02:00:00",
    },
  ];
  return (
    <aside className={style.tasksList}>
      <ul>
        {tasks.map((item, index) => (
          <Item
          key={index}
          {...item} />
        ))}
      </ul>
    </aside>
  );
}
