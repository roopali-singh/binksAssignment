import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import UserDetailsPage from "./pages/UserDetailsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/userDetails/:username">
            <UserDetailsPage />
          </Route>
          <Route path="/">
            <UserListPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
