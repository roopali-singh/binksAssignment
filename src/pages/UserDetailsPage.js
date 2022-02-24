import { useParams } from "react-router-dom";
import FlexColumnLayout from "../components/sharedComponents/FlexColumnLayout";
import PageTitle from "../components/sharedComponents/PageTitle";
import UserImage from "../components/userDetailsPageComponents/userImage/UserImage";
import UserInfo from "../components/userDetailsPageComponents/userInfo/UserInfo";
import { FETCH_USER_API_BASE_URL } from "../context/constants/userConstants";
import "../style/userDetailsPageStyle/UserDetailsPage.css";
import useAxios from "../utils/useAxios";

function UserDetailsPage() {
  const { username } = useParams();
  const { userData } = useAxios({
    url: FETCH_USER_API_BASE_URL,
    pagination: false,
  });
  // console.log(userData?.results);

  return (
    <FlexColumnLayout>
      <PageTitle title="User Details" />

      {userData?.results?.map((user) => (
        <main className="userDetailsPage" key={user?.login?.username}>
          <UserImage picture={user?.picture} />
          <UserInfo title="Name">
            {user?.name?.title}. {user?.name?.first} {user?.name?.last}
          </UserInfo>
          <UserInfo title="Email">{user?.email}</UserInfo>
          <UserInfo title="Age">{user?.dob?.age}</UserInfo>
          <UserInfo title="Phone">{user?.phone}</UserInfo>
          <UserInfo title="Address">
            {user?.location?.street?.number} {user?.location?.street?.name},{" "}
            {user?.location?.city}, {user?.location?.state},{" "}
            {user?.location?.country}
          </UserInfo>
        </main>
      ))}
    </FlexColumnLayout>
  );
}

export default UserDetailsPage;
