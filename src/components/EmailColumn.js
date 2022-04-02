import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEmailList, filteredEmailList } from "../actions/index";
import EmailList from "./EmailList";

const EmailListColumn = (props) => {
  const [routeFilter, setRouteFilter] = useState("");
  const { filter } = useParams();

  //filtering emails on route change to set inbox as default tag
  useEffect(() => {
    setRouteFilter(filter);
    if (!(routeFilter == "all")) {
      props.filteredEmailList(props.originalEmailList, routeFilter);
    } else {
      props.fetchEmailList();
    }
  }, [routeFilter]);

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
