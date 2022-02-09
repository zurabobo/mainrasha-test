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

const RouteBar = () => {

  return (
    <div className="route-bar">
      <NavLink to="/" className="route-bar-item"><FormattedMessage id="main" /></NavLink>
      <span className="route-bar-item-span">/ </span>
      <NavLink activeClassName="route-bar-item_active" className="route-bar-item" to="/bloggers"><FormattedMessage id="bloggers_title" /></NavLink>
    </div>
  )
}

export default RouteBar;
