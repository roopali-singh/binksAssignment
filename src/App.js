import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/userDetails/:username">
            <UserDetailsPage />
          </Route>

          <Route path="/userList">
            <UserListPage />
          </Route>

          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
