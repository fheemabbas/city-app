export default (state = [], action) => {
  switch (action.type) {
    case "GET_CITY_DATA":
      return {
        state: action.payload,
      };
    default:
      return state;
  }
};
