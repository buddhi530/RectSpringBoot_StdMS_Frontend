import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./fire";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        console.log("error occurs");
      }
    },
    [history]
  );

  return (
    <div>
      <center>
        <h1>Sign up</h1>
        <form onSubmit={handleSignUp}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                placeholder="Password"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              <center> Sign in</center>
            </button>
          </div>
        </form>
      </center>
    </div>
  );
};

export default withRouter(SignUp);
