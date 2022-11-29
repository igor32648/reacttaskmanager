import { render } from "@testing-library/react";
import React from "react";
import { Iprops } from "../../types/Iprops";
import style from "./Button.module.scss";

class Button extends React.Component<Iprops> {
  render() {
    return (
      <button className={style.button}>
        {this.props.children}
      </button>
    );
  }
}
export default Button;
