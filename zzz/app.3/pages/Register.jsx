class Register extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main>
        <h1>Register</h1>
        <form>
          <label>Name</label>
          <input id="name" />
          <label>Birthdate</label>
          <input type="date" id="birthdate" />
          <label>E-mail</label>
          <input type="email" id="email" />
          <label>Username</label>
          <input id="username" />
          <label>Password</label>
          <input type="password" id="password" />
          <button class="round-button" type="submit">
            Register
          </button>
        </form>
        <a href="">Login</a>
      </main>
    );
  }
}
