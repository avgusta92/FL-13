const initialState = {
  addOrEditMode: false,
  editModeId: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SHOW_ADD":
      return {
        addOrEditMode: true,
        editModeId: null,
      };

    case "SHOW_EDIT":
      return {
        addOrEditMode: true,
        editModeId: action.id,
      };

    case "HIDE_ADD_OR_EDIT":
      return {
        addOrEditMode: false,
        editModeId: null,
      };

    default:
      return state;
  }
}
