import React from "react";
import User from "../components/userListPageComponents/user/User";
import {
  FETCH_USER_API_BASE_URL,
  USERS_PER_PAGE,
} from "../context/constants/userConstants";
import useAxios from "../utils/useAxios";
import "../style/userListPageStyle/UserListPage.css";
import PageTitle from "../components/sharedComponents/PageTitle";
import FlexColumnLayout from "../components/sharedComponents/FlexColumnLayout";

function UserListPage() {
  const userData = useAxios(
    `${FETCH_USER_API_BASE_URL}?results=${USERS_PER_PAGE}`
  );

  // const { result } = userData;
  // console.log(userData?.results);

  return (
    <FlexColumnLayout>
      <PageTitle title="Users List" />

      <main className="userListPage__userList">
        {userData?.results?.map((user) => (
          <User
            key={user?.login?.username}
            name={user?.name}
            username={user?.login?.username}
          />
        ))}
      </main>
    </FlexColumnLayout>
  );
}

export default UserListPage;
