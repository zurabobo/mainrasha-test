// import './NavMenu.css';
// import { NavLink } from 'react-router-dom';

// const NavMenu = ({ toggleSideBar }) => {

//   return (
//     <nav className="menu">
//       <nav className="menu__list" onClick={toggleSideBar}>
//         <NavLink className="menu__list-link" activeClassName="menu__list-link_active" to="/bloggers" onClick={toggleSideBar}>Блогеры</NavLink>
//         <NavLink className="menu__list-link" activeClassName="menu__list-link_active" to="/cases" onClick={toggleSideBar}>Кейсы</NavLink>
//         <NavLink className="menu__list-link" activeClassName="menu__list-link_active" to="/agency" onClick={toggleSideBar}>exit agency</NavLink>
//         <NavLink className="menu__list-link" activeClassName="menu__list-link_active" to="/contacts" onClick={toggleSideBar}>Контакты</NavLink>
//       </nav>
//     </nav>
//   )

// }

// export default NavMenu;

import './NavMenu.css';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const NavMenu = ({ toggleSideBar }) => {

  const menu = [
    {
      title: "Блогеры",
      path: "/bloggers",
      key: "menu_bloggers_title",
    },
    {
      title: "Кейсы",
      path: "/cases",
      key: "menu_cases_title",
    },
    {
      title: "Агентство",
      path: "/exit-agency",
      key: "menu_agency_title",
    },
    {
      title: "Контакты",
      path: "/contacts",
      key: "menu_contacts_title",
    },
  ]

  return (
    <nav className="menu">
      {/* <nav className="menu__list" onClick={toggleSideBar}>
        <NavLink className="menu__list-link" activeClassName="menu__list-link_active" to="/bloggers" onClick={toggleSideBar}><FormattedMessage id="menu_bloggers_title" /></NavLink>
        <NavLink className="menu__list-link" activeClassName="menu__list-link_active" to="/cases" onClick={toggleSideBar}><FormattedMessage id="menu_cases_title" /></NavLink>
        <NavLink className="menu__list-link" activeClassName="menu__list-link_active" to="/agency" onClick={toggleSideBar}><FormattedMessage id="menu_agency_title" /></NavLink>
        <NavLink className="menu__list-link" activeClassName="menu__list-link_active" to="/contacts" onClick={toggleSideBar}><FormattedMessage id="menu_contacts_title" /></NavLink>
        </nav> */}

      <ul className="menu__list" onClick={toggleSideBar}>
        {menu.map(({ title, path, key }) => (
          <li className="menu__list-item" onClick={toggleSideBar} key={title}>
            <NavLink className="menu__list-link" activeClassName="menu__list-link_active" to={path}><FormattedMessage id={key} /></NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )

}

export default NavMenu;

