import "./Login.scss";

export default function Login() {

  const handeleForm = (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <div className="center">
      <h1>Login</h1>
      <form onSubmit={(e) => handeleForm(e)}>
        <div className="txt_field">
          <input
            type="text"
            className="form-control"
            name="user-email"
            id="user-email"
            required
          />
          <label htmlFor="user-email">Email</label>
        </div>
        <div className="txt_field">
          <input
            type="password"
            className="form-control"
            name="user-passwd"
            id="user-passwd"
            required
          />
          <label htmlFor="user-passwd">Password</label>
        </div>
        <button className="button" type="submit">
          Login
        </button>
        <div className="signup_link"></div>
      </form>
    </div>
  );
}
