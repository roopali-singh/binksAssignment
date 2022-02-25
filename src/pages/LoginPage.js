import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "../components/sharedComponents/Button";
import FlexColumnLayout from "../components/sharedComponents/FlexColumnLayout";
import GradientBorder from "../components/sharedComponents/GradientBorder";
import PageTitle from "../components/sharedComponents/PageTitle";
import { verifyAdmin } from "../context/actions/adminActions";
import adminUser from "../data/adminUser";
import "../style/loginPageStyle/LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const adminReducer = useSelector((state) => state.adminReducer);
  const { loading, admin, error } = adminReducer;

  const history = useHistory();

  function handleSpacesInBetween(e) {
    if (e.key === " ") {
      e.preventDefault();
    }
  }

  const userDetailsHandler = () => {
    setUsername(adminUser?.username);
    setPassword("binksPassword");
  };

  const loginHandler = () => {
    dispatch(verifyAdmin(username, password));
  };

  useEffect(() => {
    if (admin) {
      history.push("/userList");
    }
  }, [admin]);

  return (
    <FlexColumnLayout>
      <PageTitle title="Login" />

      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      <GradientBorder>
        <main className="loginPage">
          <label htmlFor="username" className="margin-bottom">
            Username:{" "}
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={(e) => setUsername(e.target.value.trim())}
            />
          </label>

          <label htmlFor="password" className="margin-bottom">
            Password:{" "}
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={(e) => setPassword(e.target.value.trim())}
              onKeyPress={handleSpacesInBetween}
            />
          </label>
          <Button
            fullWidth
            className="margin-bottom loginPage__btn"
            title="Fill Admin Details"
            handleClick={userDetailsHandler}
          />

          <Button fullWidth title="LOGIN" handleClick={loginHandler} />
        </main>
      </GradientBorder>
    </FlexColumnLayout>
  );
}

export default LoginPage;
