import { useState } from "react";
import Button from "../components/sharedComponents/Button";
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
          <Button
            fullWidth
            className="margin-bottom loginPage__btn"
            title="Fill Random User Details"
            handleClick={userDetailsHandler}
          />

          <Button
            fullWidth
            className="loginPage__btn"
            title="LOGIN"
            handleClick={loginHandler}
          />
        </main>
      </GradientBorder>
    </FlexColumnLayout>
  );
}

export default LoginPage;
