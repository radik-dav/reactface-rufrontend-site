import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav className="main-nav">
      <ul className="main-nav__item">
        <li className="main-nav__item">
          <Link to="/">Главная</Link>
        </li>
        <li className="main-nav__item">
          <Link to="/articles">Статьи</Link>
        </li>
        <li className="main-nav__item">
          <Link to="/events">Мероприятия</Link>
        </li>
        <li className="main-nav__item">
          <Link to="/about">О нас</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
