const initialState = [
  {
    id: 1,
    name: "Prerequisites",
    authors: "Author 1",
    date: "2018-02-18",
    description: "Webpack, AngularCLI, TypeScript",
    duration: "01h 34min",
  },
  {
    id: 2,
    name: "Components",
    authors: "Author 2",
    date: "2018-02-01",
    description: "Webpack, AngularCLI, TypeScript, Webpack, AngularCLI",
    duration: "01h 34min",
  },
  {
    id: 3,
    name: "Directives + Pipes",
    authors: "Author 3",
    date: "2018-01-15",
    description: "Webpack, AngularCLI, TypeScript, Webpack",
    duration: "01h 34min",
  },
];

export default function (state = initialState, action) {
  switch (action.type) {
    case "DELETE_COURSE":
      const idSelectedCourse = action.id;
      const newState = state.filter((course) => course.id !== idSelectedCourse);
      return newState;

    case "UPDATE_COURSE": {
      const selectedCourse = action.newCourse;
      for (let i = 0; i < state.length; i++) {
        if (selectedCourse.id === state[i].id) {
          state[i] = selectedCourse;
        }
      }
      return state;
    }
    case "SET_NEW_COURSE": {
      const newCourse = action.newCourse;
      newCourse.id = Math.floor(Math.random() * 10000);
      return [...state, newCourse];
    }

    default:
      return state;
  }
}
