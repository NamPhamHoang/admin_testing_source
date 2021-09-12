import "./App.css";
import "./assets/styles/sb-admin-2.min.css";
import "./assets/styles/custom.css";
import "./assets/styles/material/default.css"
import Actions from "./app/shared-components/actions";
import 'react-datepicker/dist/react-datepicker.css'
// import Temp from "./app/shared-components/temp";
import Portfolio from "./app/portfolio";
import Sidebar from "./app/layouts/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar />
        <Router>
          <Switch>
            <Route exact path="/">
              <Actions />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
