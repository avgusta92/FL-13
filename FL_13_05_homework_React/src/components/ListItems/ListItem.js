import React from "react";
import Options from "./Options/Options";

import { connect } from "react-redux";

function ListItem({ course, dispatch }) {
  const onDelete = () =>
    dispatch({
      type: "DELETE_COURSE",
      id: course.id,
    });

  const onEdit = () =>
    dispatch({
      type: "SHOW_EDIT",
      id: course.id,
    });

  return (
    <div className="item-wrap">
      <div className="text-item text-item-data">
        <p className="item-data">{course.date}</p>
      </div>
      <div className="text-item text-item-name">
        <p className="item-name">{course.name}</p>
      </div>
      <div className="text-item text-item-description">
        <p className="item-description">{course.description}</p>
      </div>
      <div className="text-item text-item-duration">
        <p className="item-duration">{course.duration}</p>
      </div>
      <Options onEdit={onEdit} onDelete={onDelete}></Options>
    </div>
  );
}

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
