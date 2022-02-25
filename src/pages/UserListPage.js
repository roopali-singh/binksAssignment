import { useEffect, useState } from "react";
import User from "../components/userListPageComponents/user/User";
import "../style/userListPageStyle/UserListPage.css";
import PageTitle from "../components/sharedComponents/PageTitle";
import FlexColumnLayout from "../components/sharedComponents/FlexColumnLayout";
import Pagination from "../components/userListPageComponents/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserList } from "../context/actions/userActions";
import { logout } from "../context/actions/adminActions";
import { useHistory } from "react-router-dom";
import Button from "../components/sharedComponents/Button";

function UserListPage() {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const adminReducer = useSelector((state) => state.adminReducer);
  const { admin } = adminReducer;
  const userListReducer = useSelector((state) => state.userListReducer);
  const { loading, userList, error } = userListReducer;

  const history = useHistory();

  useEffect(() => {
    if (admin) {
      dispatch(fetchUserList(page));
    } else {
      dispatch(logout());
    }
  }, [dispatch, page, admin]);

  useEffect(() => {
    if (!admin) {
      history.push("/");
    }
  }, [admin]);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <FlexColumnLayout>
      <PageTitle title="Users List" />

      <Pagination page={page} changePage={setPage} />

      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <main className="userListPage__userList">
          {userList?.map((user) => (
            <User
              key={user?.login?.username}
              name={user?.name}
              username={user?.login?.username}
            />
          ))}
        </main>
      )}

      <footer className="logoutBtn">
        <Button title="LOGOUT" handleClick={logoutHandler} />
      </footer>
    </FlexColumnLayout>
  );
}

export default UserListPage;
