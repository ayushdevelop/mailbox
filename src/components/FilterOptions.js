import React from "react";
import { filteredEmailList, fetchEmailList } from "../actions";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./filterOptions.css";
const FilterOptions = (props) => {
  const { filter } = useParams();
  return (
    <div>
      <ul>
        <li className="filter-option">
          <NavLink
            className={`link ${filter == "inbox" ? "active" : ""}`}
            onClick={(e) => {
              props.filteredEmailList(
                props.emailList,
                e.target.innerText.toLowerCase()
              );
            }}
            to="/inbox">
            Inbox
          </NavLink>
        </li>
        <li className="filter-option">
          <NavLink
            className={`link ${filter == "spam" ? "active" : ""}`}
            onClick={(e) => {
              props.filteredEmailList(
                props.emailList,
                e.target.innerText.toLowerCase()
              );
            }}
            to="/spam">
            Spam
          </NavLink>
        </li>
        <li className="filter-option">
          <NavLink
            className={`link ${filter == "trash" ? "active" : ""}`}
            onClick={(e) => {
              props.filteredEmailList(
                props.emailList,
                e.target.innerText.toLowerCase()
              );
            }}
            to="/trash">
            Trash
          </NavLink>
        </li>
        <li className="filter-option">
          <NavLink
            className={`link ${filter == "draft" ? "active" : ""}`}
            onClick={(e) => {
              props.filteredEmailList(
                props.emailList,
                e.target.innerText.toLowerCase()
              );
            }}
            to="/draft">
            Draft
          </NavLink>
        </li>
        <li className="filter-option">
          <NavLink
            className={`link ${filter == "all" ? "active" : ""}`}
            onClick={() => {
              props.fetchEmailList();
            }}
            to="/all">
            All
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { emailList: state.emailList.originalEmailList };
};
export default connect(mapStateToProps, { filteredEmailList, fetchEmailList })(
  FilterOptions
);
