import React from "react";
import Form from "../Form/Form";
import { List } from "../List/List";
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
    </div>
  );
}

export default App;
