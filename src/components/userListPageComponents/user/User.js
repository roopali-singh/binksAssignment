import React from "react";
import { Link } from "react-router-dom";
import "../../../style/userListPageStyle/user/User.css";

function User({ name, username }) {
  return (
    <Link to={`/userDetails/${username}`} className="user">
      <span className="user__name--title">{name?.title}.</span>
      <span className="user__name--first">{name?.first}</span>
      <span className="user__name--last">{name?.last}</span>
    </Link>
  );
}

export default User;
