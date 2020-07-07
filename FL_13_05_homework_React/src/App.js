import React from 'react';
import './App.css';
import ListOfCourses from'./containers/ListOfCourses';
import AddOrEditCourse from'./containers/AddOrEditCourse';

import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      {!props.state.editMode.addOrEditMode && (<ListOfCourses></ListOfCourses>)} 
      {props.state.editMode.addOrEditMode && (<AddOrEditCourse></AddOrEditCourse>)}
    </div>
  );
}

const mapStateToProps = (state) => {return {state}};

// CONTAINER
export default connect(
  mapStateToProps
)(App);