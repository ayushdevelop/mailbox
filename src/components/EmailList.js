import React from "react";

import { Link } from "react-router-dom";
import { emailBody } from "../actions";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

//styles
import "./emailListComponent.css";

const EmailList = (props) => {
  const { filter } = useParams();

  return (
    <div>
      <div className="email-list-style">
        <ul>
          <Link
            className="list"
            onClick={() => props.emailBody(props.emailList, props.id)}
            to={`/${filter}/${props.id}`}>
            <li>
              <span className="id">
                <span>Id :</span> {props.id}
              </span>
              <span className="subject">
                <span>Subject :</span> {props.subject}
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    emailList: state.emailList.filteredEmailList,
    emailContent: state.emailBody,
  };
};

export default connect(mapStateToProps, { emailBody })(EmailList);
