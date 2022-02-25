import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FlexColumnLayout from "../components/sharedComponents/FlexColumnLayout";
import PageTitle from "../components/sharedComponents/PageTitle";
import UserImage from "../components/userDetailsPageComponents/userImage/UserImage";
import UserInfo from "../components/userDetailsPageComponents/userInfo/UserInfo";
import { fetchUserDetails } from "../context/actions/userActions";
import "../style/userDetailsPageStyle/UserDetailsPage.css";
import { logout } from "../context/actions/adminActions";
import Button from "../components/sharedComponents/Button";

function UserDetailsPage() {
  const { username } = useParams();
  const dispatch = useDispatch();
  const adminReducer = useSelector((state) => state.adminReducer);
  const { admin } = adminReducer;
  const userDetailsReducer = useSelector((state) => state.userDetailsReducer);
  const { loading, userDetails, error } = userDetailsReducer;

  const history = useHistory();

  useEffect(() => {
    if (admin) {
      dispatch(fetchUserDetails(username));
    } else {
      dispatch(logout());
    }
  }, [dispatch, username, admin]);

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
      <PageTitle title="User Details" />

      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <main className="userDetailsPage">
          <UserImage picture={userDetails?.picture} />

          <UserInfo title="Name">
            {userDetails?.name?.title}. {userDetails?.name?.first}{" "}
            {userDetails?.name?.last}
          </UserInfo>
          <UserInfo title="Username">{username}</UserInfo>
          <UserInfo title="Email">{userDetails?.email}</UserInfo>
          <UserInfo title="Age">{userDetails?.dob?.age}</UserInfo>
          <UserInfo title="Phone">{userDetails?.phone}</UserInfo>
          <UserInfo title="Address">
            {userDetails?.location?.street?.number}{" "}
            {userDetails?.location?.street?.name}, {userDetails?.location?.city}
            , {userDetails?.location?.state}, {userDetails?.location?.country}
          </UserInfo>
        </main>
      )}

      <footer className="logoutBtn">
        <Button title="LOGOUT" handleClick={logoutHandler} />
      </footer>
    </FlexColumnLayout>
  );
}

export default UserDetailsPage;
