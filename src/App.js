import { useState } from "react";

import "./App.css";

function App() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirm, setconfirm] = useState("");

  function handleSubmit() {
    if (
      email.endsWith("@gmail.com") &&
      password.length >= 8 &&
      password === confirm
    ) {
      alert("form submitted sucessfully!");
    } else if (password !== confirm) {
      alert("form cannot be submitted");
    }
  }

  return (
    <form className="main" onSubmit={handleSubmit}>
      <div className="container">
        <div className="field">
          <label for="email">
            <b>Email:</b>
          </label>{" "}
          <br></br>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="enter your email"
            required
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </div>
        {email.endsWith("@gmail.com") ? (
          <p></p>
        ) : (
          <p className="design">Invalid email format</p>
        )}

        <div className="field">
          <label for="pass">
            <b>Password:</b>
          </label>{" "}
          <br></br>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password must 8 character"
            required
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        {password.length >= 8 ? (
          <p></p>
        ) : (
          <p className="design">Password must be at least 8 characters</p>
        )}

        <div className="field">
          <label for="confirm">
            <b>Confirm Password:</b>
          </label>{" "}
          <br></br>
          <input
            type="password"
            id="confirm"
            name="confirm"
            placeholder="enter  password again"
            required
            onChange={(e) => {
              setconfirm(e.target.value);
            }}
          />
        </div>
        {password === confirm && password !== "" ? (
          <p></p>
        ) : (
          <p className="design">Password do not match</p>
        )}

        <button className="btn">Sign up</button>
      </div>
    </form>
  );
}

export default App;
