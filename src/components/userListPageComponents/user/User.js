import React from "react";
import { Link } from "react-router-dom";
import "../../../style/userListPageStyle/user/User.css";
import GradientBorder from "../../sharedComponents/GradientBorder";

function User({ name, username }) {
  return (
    <Link to={`/userDetails/${username}`} className="user">
      <GradientBorder>
        <span className="user__name--title">{name?.title}.</span>
        <span className="user__name--first">{name?.first}</span>
        <span className="user__name--last">{name?.last}</span>
      </GradientBorder>
    </Link>
  );
}

export default User;
