import "./App.css";
import Listemployee from "./components/Listemployee";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateEmpComponent from "./components/CreateEmpComponent";
import UpdateEmployee from "./components/UpdateEmployee";
import Payment from "./components/Payment";
import Login from "./Login";
import SignUp from "./SignUp";
import { useState, useEffect } from "react";
import fire from "./fire";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <div>
        <HeaderComponent />

        <Router>
          <div className="container">
            <div className="container">
              <Switch>
                <Route path="/signup" exact component={SignUp}></Route>
                <Route path="/login" exact component={Login}></Route>
                <PrivateRoute
                  path="/"
                  exact
                  component={Listemployee}
                ></PrivateRoute>
                <PrivateRoute
                  path="/employee"
                  component={Listemployee}
                ></PrivateRoute>
                <Route
                  path="/addemployee"
                  component={CreateEmpComponent}
                ></Route>
                <Route path="/payment" component={Payment}></Route>
                <Route
                  path="/updateemployee/:id"
                  component={UpdateEmployee}
                ></Route>
              </Switch>
            </div>
          </div>
        </Router>

        <FooterComponent />
      </div>
    </AuthProvider>
  );
}

export default App;
