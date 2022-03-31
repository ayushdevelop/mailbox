//reducer for returning the email supposed to be opened
export default (state = "", action) => {
  switch (action.type) {
    case "BODY_OF_EMAIL":
      return action.payload;
    default:
      return state;
  }
};
