import generateEmailList from "../DB/emailList";

//fetching data using the below action function
export const fetchEmailList = () => (dispatch) => {
  const emailData = generateEmailList();

  return dispatch({
    type: "FETCH_EMAIL_LIST",
    payload: emailData,
  });
};

// filtering the email list on the basis of tag using the below action function
export const filteredEmailList = (emailList, tag) => (dispatch) => {
  return dispatch({
    type: "FILTER_EMAILS_BY_TAGS",
    payload: tag ? emailList.filter((email) => email.tag == tag) : emailList,
  });
};

// searching and filtering the email using below function
export const filteredBySearch = (emailList, query) => (dispatch) => {
  return dispatch({
    type: "FILTER_BY_SEARCH",
    payload: query
      ? emailList.filter((email) => email.subject.trim().includes(query))
      : emailList,
  });
};

// action function used to preview the body of email
export const emailBody = (emailList, id) => (dispatch) => {
  return dispatch({
    type: "BODY_OF_EMAIL",
    payload: id ? emailList.filter((email) => email.id == id) : emailList,
  });
};
