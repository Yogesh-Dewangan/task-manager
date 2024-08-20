export default function LoginPage() {
  return (
    <section className="min-h-screen">
      <h3>Login</h3>
      <div>
        <form>
          <input id="email" type="text" name="email" className="text_input" />
          <input
            id="password"
            type="text"
            name="password"
            className="text_input"
          />
          <button type="submit" className="btn login_btn">
            Login
          </button>
        </form>
        <p className="">
          Don't have account? <span className="link">Signup</span>
        </p>
        <button type="submit" className="btn login_btn">
          Login with <b>Google</b>
        </button>
      </div>
    </section>
  );
}
