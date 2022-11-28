import React from "react";
import Form from "../components/Form/Form";
import { List } from "../components/List/List";
import Timer from "../components/Timer/Timer";
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Timer />
    </div>
  );
}

export default App;
