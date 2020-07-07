import { connect } from "react-redux";
import AddOrEditCourse from "../pages/AddOrEditCourse";

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  hideAddOrEdit: () => {
    dispatch({
      type: "HIDE_ADD_OR_EDIT",
    });
  },
  updateValue: (course) => {
    dispatch({
      type: "UPDATE_COURSE",
      newCourse: course,
    });
    dispatch({
      type: "HIDE_ADD_OR_EDIT",
    });
  },
  setNewValue: (course) => {
    dispatch({
      type: "SET_NEW_COURSE",
      newCourse: course,
    });
    dispatch({
      type: "HIDE_ADD_OR_EDIT",
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddOrEditCourse);
