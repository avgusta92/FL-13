import React from "react";

export default function Input(props) {
  return (
    <div className="input-wrap">
      <label>{props.label}</label>
      <input
        type={props.type}
        className={props.styles}
        value={props.value}
        id={props.inputName}
        onChange={props.onChange}
      ></input>
    </div>
  );
}
