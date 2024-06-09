import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">CloudSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on CloudSocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <botton className="loginRegisterButton">
              Create a New Account
            </botton>
          </div>
        </div>
      </div>
    </div>
  );
}
