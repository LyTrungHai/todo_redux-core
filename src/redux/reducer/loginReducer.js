const INITIAL_STATE = {
  userLogin: JSON.parse(localStorage.getItem("LOGIN_USER")) || {},
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("LOGIN_USER", JSON.stringify(action.infoLogin));
      return { ...state, userLogin: action.infoLogin };
    default:
      return { ...state };
  }
};

export default loginReducer;
