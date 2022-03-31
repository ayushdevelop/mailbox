import { connect } from "react-redux";
import "./EmailBody.css";
const EmailBody = (props) => {
  const emailData = props.emailBody[0];
  return (
    <div className="email-layout">
      <div className="email-header">
        <div>
          <span>UserId: </span>
          {emailData.userId}
        </div>
        <div>
          <span>Email Id: </span>
          {emailData.id}
        </div>
      </div>
      <div className="emailSubject">
        <div>
          <span>Subject: </span>
          {emailData.subject}
        </div>
      </div>
      <div className="emailBody">
        <div>
          {emailData.body}
          {emailData.body}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { emailBody: state.emailBody };
};

export default connect(mapStateToProps)(EmailBody);
