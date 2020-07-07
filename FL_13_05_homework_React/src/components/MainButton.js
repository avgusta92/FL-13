import React from "react";

export default function MainButton(props) {
  return (
    <button onClick={props.click} className={props.styles}>
      {props.name}
    </button>
  );
}
