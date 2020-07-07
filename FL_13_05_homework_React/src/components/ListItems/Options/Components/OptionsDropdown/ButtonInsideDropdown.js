import React from "react";

const styles = {
  ButtonInsideDropdownWrap: {
    display: "flex",
    margin: "5px",
    cursor: "pointer",
  },
  icon: {
    width: "12px",
    height: "12px",
    margin: "5px",
  },
  ButtonInsideDropdown: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  },
};

export default function ButtonInsideDropdown(props) {
  return (
    <div style={styles.ButtonInsideDropdownWrap}>
      <img style={styles.icon} src={props.icon} alt=""></img>
      <button onClick={props.click} style={styles.ButtonInsideDropdown}>{props.name}</button>
    </div>
  );
}
