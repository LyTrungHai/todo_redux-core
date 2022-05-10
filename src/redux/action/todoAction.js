export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    todo: data,
  };
};
export const deleteTodo = (data) => {
  return {
    type: "DELETE_TODO",
    todo: data,
  };
};

export const isComplete = (data) => {
  return {
    type: "COMPLETE_TODO",
    todo: data,
  };
};
export const editTodo = (data) => {
  return {
    type: "EDIT_TODO",
    todo: data,
  };
};
export const updateTodo = (data, newtext) => {
  return {
    type: "UPDATE_TODO",
    todo: data,
    newtext,
  };
};
