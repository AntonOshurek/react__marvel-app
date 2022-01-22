import { Link, NavLink } from 'react-router-dom';

import './appHeader.scss';

const AppHeader = () => {
  return (
    <header className="header">
      <h1 className="header-title">
        <Link className="header-title__link" to='/'>
          <span className="header-title__custom-text">Marvel</span> information portal
        </Link>
      </h1>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <NavLink exact activeClassName='menu__link--active' className="menu__link" to='/'>Characters</NavLink>
          </li>
          <span aria-hidden="true">/</span>
          <li className="menu__item">
            <NavLink exact activeClassName='menu__link--active' className="menu__link" to='/comics'>Comics</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader;
