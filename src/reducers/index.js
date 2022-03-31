import { combineReducers } from "redux";
import emailListReducer from "./emailListReducer";
import emailBodyReducer from "./emailBodyReducer";

export default combineReducers({
  emailList: emailListReducer,
  emailBody: emailBodyReducer,
});
