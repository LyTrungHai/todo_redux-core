const INITIAL_STATE = [
  { id: 1, text: "làm bài tập", complete: false, edit: false },
  { id: 2, text: "đi xem Dr.Strange", complete: true, edit: false },
  { id: 3, text: "đi uống cf Muối", complete: false, edit: false },
];

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todo];
    case "DELETE_TODO":
      return [...state].filter((todo) => todo.id !== action.todo.id);
    case "COMPLETE_TODO":
      return [...state].map((todo) => {
        return todo.id === action.todo.id
          ? { ...todo, complete: !todo.complete }
          : { ...todo };
      });
    case "EDIT_TODO":
      return [...state].map((todo) => {
        return todo.id === action.todo.id
          ? { ...todo, edit: !todo.edit }
          : { ...todo };
      });
    case "UPDATE_TODO":
      // console.log(action.newtext);
      // console.log(state);
      return [...state].map((todo) => {
        return todo.id === action.todo.id
          ? { ...todo, edit: !todo.edit, text: action.newtext }
          : { ...todo };
      });
    default:
      return [...state];
  }
};

export default todoReducer;
