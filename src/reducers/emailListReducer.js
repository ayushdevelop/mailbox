// reducer used to fetch and filter emails
const initialState = { originalEmailList: [], filteredEmailList: [] };
export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EMAIL_LIST":
      return {
        ...state,
        originalEmailList: action.payload,
        filteredEmailList: action.payload,
      };
    case "FILTER_EMAILS_BY_TAGS":
      return { ...state, filteredEmailList: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, filteredEmailList: action.payload };
    default:
      return state;
  }
};
