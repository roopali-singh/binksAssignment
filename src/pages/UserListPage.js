import { useState } from "react";
import User from "../components/userListPageComponents/user/User";
import {
  FETCH_USER_API_BASE_URL,
  THINGS_TO_INCLUDE,
  USERS_PER_PAGE,
  USER_SEED,
} from "../context/constants/userConstants";
import useAxios from "../utils/useAxios";
import "../style/userListPageStyle/UserListPage.css";
import PageTitle from "../components/sharedComponents/PageTitle";
import FlexColumnLayout from "../components/sharedComponents/FlexColumnLayout";
import Pagination from "../components/userListPageComponents/pagination/Pagination";

function UserListPage() {
  // const [page, setPage] = useState(1);

  const { userData, page, setPage } = useAxios({
    url: `${FETCH_USER_API_BASE_URL}?&results=${USERS_PER_PAGE}&seed=${USER_SEED}&inc=${THINGS_TO_INCLUDE}`,
    pagination: true,
  });

  // console.log(userData?.results);

  return (
    <FlexColumnLayout>
      <PageTitle title="Users List" />

      <Pagination page={page} changePage={setPage} />

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
