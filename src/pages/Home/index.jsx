export default function Home() {
  return (
    <>
      <div className="menu">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <nav className="menu-desktop">
          <ul>
            <li>
              <a href="">Idiomas</a>
            </li>
            <li>
              <a href="">Projeto</a>
            </li>
            <li>
              <a href="">Contatos</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}