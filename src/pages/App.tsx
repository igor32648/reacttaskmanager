import React, { useState } from "react";
import Form from "../components/Form/Form";
import List from "../components/List/List";
import Timer from "../components/Timer/Timer";
import { Itask } from "../types/Itask";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<Itask[]>([]);
  const [selected, setSelected] = useState<Itask>();

  function selectTask(selectedTask: Itask) {
    setSelected(selectedTask);
    setTasks((previusTasks) =>
      previusTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    );
  }

  function endTask() {
    if (selected) {
      setSelected(undefined);
      setTasks((previusTasks) =>
        previusTasks.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              complemented: false,
            }
          }
          return task;
        })
      )
    }
  }
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Timer selected={selected}
      endTask={endTask} />
    </div>
  );
}

export default App;
