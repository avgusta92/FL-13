import React, { useState, useEffect } from "react";
import MainButton from "../components/MainButton";
import ListItems from "../components/ListItems/ListItem";

export default function ListOfCourses(props) {
  // СОЗДАЕМ ЛОКАЛЬНЫЙ СТЕЙТ С ДАННЫМИ
  const [courses, setCourses] = useState(props.state.courses);

  // ПОДПИСЫВАЕТСЯ НА ИЗМЕНЕНИЕ ==> props.state.courses
  useEffect(() => {
    setCourses(props.state.courses);
  }, [props.state.courses]);

  // SEARCH ФУНКЦИЯ
  const onSearchInputChange = (event) => {
    const searchValue = event.target.value.toLowerCase();

    if (searchValue) {
      const filteredCourses = courses.filter((course) =>
        course.name.toLowerCase().includes(searchValue)
      );
      setCourses(filteredCourses);
    } else {
      setCourses(props.state.courses);
    }
  };

  //ФУНКЦИЯ КОТОРАЯ ВЫЗЫВАЕТ ДОБАВДЕНИЕ НОВОГО КУРСА ИЗ REDUCERS
  const showAddOrEditFunc = () => {
    props.dispatch({
      type: "SHOW_ADD",
    });
  };

  return (
    <div>
      <div className="header-of-list">
        <input
          type="search"
          id="search"
          className="search-input"
          placeholder="Search"
          onChange={onSearchInputChange}
        ></input>
        <MainButton
          click={showAddOrEditFunc}
          styles="main-button list-button"
          name="Add cource"
        ></MainButton>
      </div>

      <div className="list">
        {props.state.courses.map((course) => {
          return <ListItems course={course} key={course.id}></ListItems>;
        })}
      </div>
    </div>
  );
}
