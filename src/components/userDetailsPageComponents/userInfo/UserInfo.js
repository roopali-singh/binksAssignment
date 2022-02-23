import "../../../style/userDetailsPageStyle/userInfo/UserInfo.css";

function UserInfo({ title, children }) {
  return (
    <div className="userInfo">
      <span className="userInfo__title">{title} - </span>
      <span>{children}</span>
    </div>
  );
}

export default UserInfo;
