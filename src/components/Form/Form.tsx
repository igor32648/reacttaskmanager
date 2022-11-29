import React from "react";
import { Itask } from "../../types/Itask";
import Button from "../Button/Button";
import style from "./Form.module.scss";
import {v4 as uuidv4} from 'uuid'

// Class component example
class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<Itask[]>>
 }> {state = {
    task: "",
    time: "00:00"
  };
  addTask(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    this.props.setTasks(oldTasks => 
      [
        ...oldTasks, 
         {
          ... this.state, 
         selected: false, 
         completed: false, 
         id: uuidv4()
        }
      ]
    )
    this.setState({
        task: "",
        time: "00:00"
      })
  }
  render() {
    return (
      <form className={style.newTask}  onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Add Task:</label>
          <input
            type="text"
            name="task"
            value={this.state.task}
            onChange={(event) =>
              this.setState({ ...this.state, task: event.target.value })
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
            value={this.state.time}
            onChange={(event) =>
              this.setState({ ...this.state, time: event.target.value })
            }
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button>Add</Button>
      </form>
    );
  }
}
export default Form;
