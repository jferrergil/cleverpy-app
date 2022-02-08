import React from "react";
import './Login.scss'

export default function Login() {
  return (
    <div className="form">
      <form className="form-container">
        <div>
          <input type="text" name="Username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="Password" placeholder="Password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}
