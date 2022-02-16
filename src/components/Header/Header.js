import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import MobileMenu from '../MobileMenu/MobileMenu';
import HeaderLogo from '../../images/logo.png';

const Header = ({currentLocale, isClicked, languageChange}) => {

  return (
    <header className="header">
      <Link to="/main">
        <img className="header__logo" src={HeaderLogo} alt="лого" />
      </Link>
      <MobileMenu languageChange={languageChange} isClicked={isClicked} currentLocale={currentLocale}/>
    </header>
  )
}

export default Header;
