import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FlexColumnLayout from "../components/sharedComponents/FlexColumnLayout";
import PageTitle from "../components/sharedComponents/PageTitle";
import UserImage from "../components/userDetailsPageComponents/userImage/UserImage";
import UserInfo from "../components/userDetailsPageComponents/userInfo/UserInfo";
import { fetchUserDetails } from "../context/actions/userActions";
import "../style/userDetailsPageStyle/UserDetailsPage.css";

function UserDetailsPage() {
  const { username } = useParams();
  const dispatch = useDispatch();
  const userDetailsReducer = useSelector((state) => state.userDetailsReducer);
  const { loading, userDetails, error } = userDetailsReducer;

  useEffect(() => {
    dispatch(fetchUserDetails(username));
  }, [dispatch, username]);

  return (
    <FlexColumnLayout>
      <PageTitle title="User Details" />

      {loading && <div>Loading...</div>}
      {error && <strong>{error}</strong>}

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
          {userDetails?.location?.street?.name}, {userDetails?.location?.city},{" "}
          {userDetails?.location?.state}, {userDetails?.location?.country}
        </UserInfo>
      </main>
    </FlexColumnLayout>
  );
}

export default UserDetailsPage;
