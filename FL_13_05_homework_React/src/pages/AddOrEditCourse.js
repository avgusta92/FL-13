import React, { useState } from "react";
import Input from "../components/Input";
import MainButton from "../components/MainButton";

export default function AddOrEditCourse(props) {
  let courseState;
  let saveValueClick;

  if (props.state.editMode.editModeId) {
    courseState = props.state.courses.find(
      (course) => course.id === props.state.editMode.editModeId
    );
    saveValueClick = () => props.updateValue(course);
  } else {
    courseState = {
      name: "",
      description: "",
      duration: "",
      authors: "",
      date: "",
    };
    saveValueClick = () => props.setNewValue(course);
  }

  const [course, setCourse] = useState(courseState);

  let updateInputValue = (type, inputValue) => {
    course[type] = inputValue;
    setCourse({ ...course });
  };

  return (
    <div className="editing-course">
      <h3 className="header-editing-course">New course</h3>

      <Input
        label="Title *"
        styles="input"
        type="text"
        value={course.name}
        inputName="name"
        onChange={(event) => updateInputValue("name", event.target.value)}
      ></Input>

      <div className="input-wrap">
        <label>Description *</label>
        <textarea
          className="input-textarea"
          value={course.description}
          onChange={(event) =>
            updateInputValue("description", event.target.value)
          }
        ></textarea>
      </div>

      <div className="duration-authors-calendar-wrap">
        <div className="duration-authors-wrap">
          <Input
            label="Duration *"
            styles="input"
            type="text"
            value={course.duration}
            onChange={(event) =>
              updateInputValue("duration", event.target.value)
            }
          ></Input>
          <Input
            label="Authors *"
            styles="input"
            type="text"
            value={course.authors}
            onChange={(event) =>
              updateInputValue("authors", event.target.value)
            }
          ></Input>
        </div>
        <Input
          label="Calendar *"
          styles="input input-calendar"
          type="date"
          value={course.date}
          onChange={(event) => updateInputValue("date", event.target.value)}
        ></Input>
      </div>

      <div className="editing-course-button-wrap">
        <MainButton
          styles="main-button editing-course-button"
          name="Save"
          click={saveValueClick}
        ></MainButton>
        <MainButton
          styles="main-button button-cancel"
          name="Cancel"
          click={props.hideAddOrEdit}
        ></MainButton>
      </div>
    </div>
  );
}
