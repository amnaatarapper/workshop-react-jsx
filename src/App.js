import images from "./images";

function App() {
  return (
    <div id="wrapper">
      <header id="header">
        <h1>
          <a href="index.html">
            <strong>Multiverse</strong> by HTML5 UP
          </a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="#footer" className="icon solid fa-info-circle">
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div id="main">
        {images.map((img, index) => {
          const { fullSize, path, title, article } = img;
          return (
            <article className="thumb" key={index + 1}>
              <a href={fullSize} className="image">
                <img src={path} alt="" />
              </a>
              <h2>{title}</h2>
              <p>{article}</p>
            </article>
          );
        })}
      </div>

      <footer id="footer" className="panel">
        <div className="inner split">
          <div>
            <section>
              <h2>Magna feugiat sed adipiscing</h2>
              <p>
                Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt erat,
                et scelerisque turpis ipsum eget quis orci mattis aliquet.
                Maecenas fringilla et ante at lorem et ipsum. Dolor nulla eu
                bibendum sapien. Donec non pharetra dui. Nulla consequat, ex ut
                suscipit rutrum, mi dolor tincidunt erat, et scelerisque turpis
                ipsum.
              </p>
            </section>
            <section>
              <h2>Follow me on ...</h2>
              <ul className="icons">
                <li>
                  <a href="/" className="icon brands fa-twitter">
                    <span className="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="/" className="icon brands fa-facebook-f">
                    <span className="label">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="/" className="icon brands fa-instagram">
                    <span className="label">Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="/" className="icon brands fa-github">
                    <span className="label">GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="/" className="icon brands fa-dribbble">
                    <span className="label">Dribbble</span>
                  </a>
                </li>
                <li>
                  <a href="/" className="icon brands fa-linkedin-in">
                    <span className="label">LinkedIn</span>
                  </a>
                </li>
              </ul>
            </section>
            <p className="copyright">
              &copy; Unttled. Design: <a href="http://html5up.net">HTML5 UP</a>.
            </p>
          </div>
          <div>
            <section>
              <h2>Get in touch</h2>
              <form method="post" action="#">
                <div className="fields">
                  <div className="field half">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="field half">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="field">
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send" className="primary" />
                  </li>
                  <li>
                    <input type="reset" value="Reset" />
                  </li>
                </ul>
              </form>
            </section>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
