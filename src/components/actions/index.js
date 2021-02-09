import axios from "axios";

// for Add New Item in Cart
const header = { "Access-Control-Allow-Origin": "*" };
export const getdata = (data) => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos", data)
    .then((res) => {
      dispatch({ type: "GET_CITY_DATA", payload: res });
    })
    .catch((err) =>
      dispatch({
        type: "GET_CITY_DATA_ERROR",
      })
    );
};
export const getpagedata = (page) => (dispatch) => {
  dispatch({ type: "GET_PAGE", payload: page });
};
