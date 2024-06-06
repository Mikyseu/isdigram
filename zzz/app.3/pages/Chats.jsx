class Chats extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main class="main">
        <h1>Hello, Luke!</h1>
        <nav>
          <button>🏠</button>
          <button>🚪</button>
        </nav>
        <section>
          <ul>
            <li class="user-list__item user-list__item--online">Anakin</li>
            <li class="user-list__item user-list__item--online">Han-solo</li>
            <li class="user-list__item user-list__item--offline">C3PO</li>
            <li class="user-list__item user-list__item--offline">Leia</li>
            <li class="user-list__item user-list__item--offline">R2D2</li>
          </ul>
          <h3>Han-solo</h3>
          <ul class="message-list">
            <li class="message-list__item--right">hola</li>
          </ul>
          <form>
            <label>Text</label>
            <input id="text" />
            <button class="round-button submit-button" type="submit">
              Send
            </button>
          </form>
        </section>
      </main>
    );
  }
}
