import axios from "axios";

export const loginAction = (userInfo, callback) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://limitless-cove-92010.herokuapp.com/api/signin",
        method: "POST",
        data: userInfo,
      });
      if (result.status === 200) {
        dispatch({
          type: "LOGIN",
          infoLogin: result.data,
        });
        callback();
      }
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
    return dispatch;
  };
};
