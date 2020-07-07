import React, { useState } from "react";
import OptionsButton from "./Components/OptionsButton";
import OptionsDropdown from "./Components/OptionsDropdown/OptionsDropdown";

export default function Options(props) {
  const [showDropDown, setShowDropDown] = useState(false);

  const onOptionsButtonClick = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <div className="options-wrap">
        <OptionsButton click={onOptionsButtonClick}></OptionsButton>
        <OptionsDropdown onEdit={props.onEdit} onDelete={props.onDelete} show={showDropDown}></OptionsDropdown>
    </div>
  );
}
