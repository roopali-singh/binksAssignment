import { useState } from "react";
import FlexColumnLayout from "../components/sharedComponents/FlexColumnLayout";
import GradientBorder from "../components/sharedComponents/GradientBorder";
import PageTitle from "../components/sharedComponents/PageTitle";
import "../style/loginPageStyle/LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userDetailsHandler = () => {
    console.log("filled");
  };

  const loginHandler = () => {
    console.log("Logged In");
  };

  return (
    <FlexColumnLayout>
      <PageTitle title="Login" />

      <GradientBorder>
        <main className="loginPage">
          <label htmlFor="username" className="margin-bottom">
            Username:{" "}
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label htmlFor="password" className="margin-bottom">
            Password:{" "}
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button
            type="submit"
            className="loginBtn"
            onClick={userDetailsHandler}
          >
            Fill Random User Details
          </button>

          <button
            type="submit"
            className="loginBtn margin-bottom"
            onClick={loginHandler}
          >
            LOGIN
          </button>
        </main>
      </GradientBorder>
    </FlexColumnLayout>
  );
}

export default LoginPage;
