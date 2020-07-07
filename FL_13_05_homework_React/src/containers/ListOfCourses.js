import { connect } from "react-redux";
import ListOfCourses from "../pages/ListOfCourses";

//STATE
const mapStateToProps = (state) => {
  return { state };
};

//ACTION
const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

// CONTAINER (SET IN PROPS: STATE AND ACTION)
export default connect(mapStateToProps, mapDispatchToProps)(ListOfCourses);
