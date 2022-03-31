import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEmailList, filteredEmailList } from "../actions/index";
import EmailList from "./EmailList";

const EmailListColumn = (props) => {
  const { filter } = useParams();

  //filtering emails on route change to set inbox as default tag
  useEffect(() => {
    if (filter == "inbox") {
      props.filteredEmailList(props.originalEmailList, filter);
    }
  }, [filter]);

  return (
    <div>
      <div>
        <div>{filter.toUpperCase()}</div>
        {props.emailList.map((emailDetails) => (
          <EmailList
            key={emailDetails.id}
            subject={emailDetails.subject}
            id={emailDetails.id}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    emailList: state.emailList.filteredEmailList,
    originalEmailList: state.emailList.originalEmailList,
  };
};

export default connect(mapStateToProps, { fetchEmailList, filteredEmailList })(
  EmailListColumn
);
