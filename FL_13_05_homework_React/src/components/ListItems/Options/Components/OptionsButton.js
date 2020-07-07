import React from "react";

const styles = {
  dropdownButton: {
    display: "flex",
    alignItems: "center",
    padding: "20px 12px",
    cursor: "pointer",
  },
  dropdownPoint: {
    width: "0,5px",
    margin: "0 2px",
    height: "0",
    border: "1px solid gray",
  },
};

export default function OptionsButton(props) {
  return (
    <div onClick={props.click} style={styles.dropdownButton}>
      <hr style={styles.dropdownPoint}></hr>
      <hr style={styles.dropdownPoint}></hr>
      <hr style={styles.dropdownPoint}></hr>
    </div>
  );
}
