import './appHeader.scss';

const AppHeader = () => {
  return (
    <header className="header">
      <h1 className="header-title">
        <a className="header-title__link" href="#">
          <span className="header-title__custom-text">Marvel</span> information portal
        </a>
      </h1>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <a className="menu__link" href="#">Characters</a>
          </li>
          <span aria-hidden="true">/</span>
          <li className="menu__item">
            <a className="menu__link" href="#">Comics</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader;
