// import './RouteBar.css';
// import { NavLink } from 'react-router-dom';
// import { FormattedMessage } from 'react-intl';

// const RouteBar = () => {

//   return (
//     <div className="route-bar">
//       <NavLink to="/" className="route-bar-item"><FormattedMessage id="main" /></NavLink>
//       <span className="route-bar-item-span">/ </span>
//       <NavLink activeClassName="route-bar-item_active" className="route-bar-item" to="/bloggers"><FormattedMessage id="bloggers_title" /></NavLink>
//     </div>
//   )
// }

// export default RouteBar;


// import './RouteBar.css';
// import { NavLink } from 'react-router-dom';
// import { FormattedMessage } from 'react-intl';

// const RouteBar = () => {

//   return (
//     <div className="route-bar">
//       <NavLink to="/" className="route-bar-item"><FormattedMessage id="main" /></NavLink>
//       <span className="route-bar-item-span">/ </span>
//       <NavLink activeClassName="route-bar-item_active" className="route-bar-item" to="/bloggers"><FormattedMessage id="bloggers_title" /></NavLink>
//     </div>
//   )
// }

// export default RouteBar;

import './RouteBar.css';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const RouteBar = ({ data }) => {

  const routePath = [
    {
      title: "Блогеры",
      path: "/bloggers",
      key: "menu_bloggers_title",
    },
    {
      title: "Блогеры",
      path: "/blogger",
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
    <div className="route-bar">
      <NavLink to="/main" className="route-bar-item" activeClassName="route-bar-item_active"><FormattedMessage id="main" /></NavLink>
      {routePath.map(({ title, path, key }) => (
        <>
          <NavLink className="route-bar-item" activeClassName="route-bar-item_active" key={title} to={path}><FormattedMessage id={key} /></NavLink>
        </>
      ))}
    </div>
  )
}

export default RouteBar;
