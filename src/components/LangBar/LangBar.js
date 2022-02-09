// import './LangBar.css';
// import { NavLink } from 'react-router-dom';

// const LangBar = () => {
//   return (
//     <div className="langbar">
//       <NavLink className="langbar__link" to="/">en </NavLink>
//       <span className="langbar__span">/</span>
//       <NavLink className="langbar__link" to="/"> ru</NavLink>
//     </div>
//   )
// }

// export default LangBar;

import React from 'react';
import './LangBar.css';
import { LOCALES } from '../../translation/locales';

const LangBar = ({ currentLocale, isClicked, languageChange }) => {

  const languages = [
    { name: 'en', code: LOCALES.ENGLISH },
    { name: 'ru', code: LOCALES.RUSSIAN },
  ]

  return (
    <div className="langbar" value={currentLocale}>
      {languages.map(({ name, code }) => (
        <button className={isClicked?.active === code ? "langbar__btn langbar__btn_active" : "langbar__btn"} onClick={languageChange} type="button" key={code} value={code}>
          {name}
        </button>
      ))}
      <span className="langbar__span">/</span>
    </div>
  )
}

export default LangBar;
