class Posts extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main class="main">
        <h1>Hello, Luke!</h1>
        <nav>
          <button>💬</button>
          <button>🚪</button>
        </nav>
        <section>
          <article>
            <h3>Han-solo</h3>
            <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHQwZXQ5emJ6d2t0ZThvdjFleHN0aGMxMDgxZDg0Y3M4eHdlcGQzeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OE6FE4GZF78nm/giphy.gif" />
            <p>ok!!</p>
            <time>2024-03-19</time>
          </article>
          <article>
            <h3>Leia</h3>
            <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnJpdnFtMnFvcWtjbWU5dWhlb3JsZDk2bXJmdnNteThycDZpM2FqaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2JJwoI01FCRpfQE8/giphy.gif" />
            <p>Nooo!!</p>
            <time>2024-03-19</time>
          </article>
          <article>
            <h3>Luke</h3>
            <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWkxMzFqZjV2MDRmb2hiMTNiankwdWdkYjhkcDZmZDNjc2IxNDQwMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ornk6UHtk276vLtkY/giphy.gif" />
            <p>Nooo!!</p>
            <time>2024-03-18</time>
            <button>📝</button>
            <button>🗑️</button>
          </article>
          <article>
            <h3>Anakin</h3>
            <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm91NWJwd2I4dXBvN2NxdHdiNHlocnZzemc2bnNtdnpqdm5uamt4aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ylyUQnqAdMNs4QITOE/giphy.gif" />
            <p>Coca cola vs pepsi</p>
            <time>2024-03-18</time>
          </article>
        </section>
        <footer class="footer">
          <button>➕</button>
        </footer>
      </main>
    );
  }
}
