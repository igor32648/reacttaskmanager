import React, { useState } from "react";
import { Itask } from "../../types/Itask";
import style from "./Form.module.scss";
import {v4 as uuidv4} from 'uuid'
import Button from "../Button/Button";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<Itask[]>>
}

export default function Form( { setTasks }: Props) {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");

  function addTask(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    setTasks(previusTasks => 
      [
          ...previusTasks,
          {
            task,
            time,
            selected: false,
            completed: false,
            id: uuidv4()
          }
        ]
    )
    setTask("");
    setTime("00:00")
  }

  return (
    <form className={style.newTask}  onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Add Task:</label>
        <input
          type="text"
          name="task"
          value={task}
          onChange={(event) =>
           setTask(event.target.value)
          }
          id="task"
          placeholder="what do you want to do today?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          step="1"
          name="time"
          value={time}
          onChange={(event) =>
            setTime(event.target.value)
          }
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button>Add</Button>
    </form>
  )

}
