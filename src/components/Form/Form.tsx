import React from "react";
import Button from "../Button/Button";
import style from './Form.module.scss'

class Form extends React.Component {
  render() {
    return (
      <form className={style.newTask}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Add Task:</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="what do you want to do today?"
            required
          />
        </div>
        <div>
          <label htmlFor="time"></label>
          <input
            type="time"
            step="1"
            name="time"
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button />
      </form>
    );
  }
}
export default Form;
