import React, { useState } from "react";
import Form from "../components/Form/Form";
import List from "../components/List/List";
import Timer from "../components/Timer/Timer";
import { Itask } from "../types/Itask";
import style from './App.module.scss'

function App() {
  const [tasks, setTasks] = useState<Itask[] | []>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks}/>
      <Timer />
    </div>
  );
}

export default App;
