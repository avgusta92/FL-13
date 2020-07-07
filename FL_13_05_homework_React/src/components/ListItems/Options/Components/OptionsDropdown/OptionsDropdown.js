import React from "react";
import ButtonInsideDropdown from "./ButtonInsideDropdown";
import deleteIcon from "./img/delete.svg";
import editIcon from "./img/edit.svg";

const styles = {
  dropdown: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    position: "absolute",
    right: 0,
    top: "28px",
    filter: "drop-shadow(1px 1px 5px rgba(0,0,0,.15))",
    zIndex: "1",
  },

  triangle: {
    width: 0,
    height: 0,
    marginRight: "10px",
    borderStyle: "solid",
    borderWidth: "0 10px 10px 10px",
    borderColor: "transparent transparent white transparent",
  },

  editingButtons: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: "4px",
    padding: "10px",
    width: "120px",
  },
};

export default function OptionsDropdown(props) {
  return (
    <div>
      {props.show && (
        <div style={styles.dropdown}>
          <div style={styles.triangle}></div>
          <div style={styles.editingButtons}>
            <ButtonInsideDropdown
              icon={editIcon}
              name="Edit"
              click={props.onEdit}
            ></ButtonInsideDropdown>
            <ButtonInsideDropdown
              icon={deleteIcon}
              name="Delete"
              click={props.onDelete}
            ></ButtonInsideDropdown>
          </div>
        </div>
      )}
    </div>
  );
}
