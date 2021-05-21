import { FC } from 'react';
import './Header.scss';

export const Header: FC = (): JSX.Element => {
  return(
    <nav className="header">
      <div className="header__content">
        <a href="/#" className="logo">
          <img src="/images/logo.png" alt="logo" />
        </a>
        <ul className="header__nav-list nav-list">
          <li className="nav-list__item">
            <a href="/#" className="nav-list__item-link">Home</a>
          </li>
          <li className="nav-list__item">
            <a href="/#" className="nav-list__item-link">Menu</a>
          </li>
          <li className="nav-list__item">
            <a href="/#" className="nav-list__item-link">What's new</a>
          </li>
          <li className="nav-list__item">
            <a href="/#" className="nav-list__item-link">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
