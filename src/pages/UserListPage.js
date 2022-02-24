import { useEffect, useState } from "react";
import User from "../components/userListPageComponents/user/User";
import "../style/userListPageStyle/UserListPage.css";
import PageTitle from "../components/sharedComponents/PageTitle";
import FlexColumnLayout from "../components/sharedComponents/FlexColumnLayout";
import Pagination from "../components/userListPageComponents/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../context/actions/userActions";

function UserListPage() {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { loading, userData, error } = user;

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  return (
    <FlexColumnLayout>
      <PageTitle title="Users List" />

      <Pagination page={page} changePage={setPage} />

      {loading && <div>Loading...</div>}
      {error && <strong>{error}</strong>}

      <main className="userListPage__userList">
        {userData?.map((user) => (
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
