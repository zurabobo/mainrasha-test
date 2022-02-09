// import './SortMenu.css';
// import { FormattedMessage } from 'react-intl';

// const SortMenu = () => {

//   const bloggersLocation = window.location.pathname === '/bloggers';

//   return (
//     <div className={bloggersLocation ? "sort-menu__container" : "sort-menu__container_invisible"}>
//       <ul className="sort-menu__header">
//         <li className="sort-menu__header-list">
//           <a className="sort-menu__header-item" href="/bloggers"><FormattedMessage id="sort_by"/></a>
//           <ul className="sort-menu">
//             <li className="sort-menu__list">
//               <a className="sort-menu__item" href="/bloggers"><FormattedMessage id="platform_choose"/></a>
//               <ul className="sort-menu__submenu">
//                 <li className="sort-menu__submenu-list">
//                   <a className="sort-menu__submenu-item" href="/bloggers"><FormattedMessage id="vk"/></a>
//                 </li>
//                 <li className="sort-menu__submenu-list">
//                   <a className="sort-menu__submenu-item" href="/bloggers"><FormattedMessage id="facebook"/></a>
//                 </li>
//                 <li className="sort-menu__submenu-list">
//                   <a className="sort-menu__submenu-item" href="/bloggers"><FormattedMessage id="instagram"/></a>
//                 </li>
//               </ul>
//             </li>
//             <li className="sort-menu__list">
//               <a className="sort-menu__item" href="/bloggers"><FormattedMessage id="platform_choose"/></a>
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//   )
// }

// export default SortMenu;


// import './SortMenu.css';
// import { FormattedMessage } from 'react-intl';

// const SortMenu = () => {

//   const bloggersLocation = window.location.pathname === '/bloggers';
//   const option = [
//     {
//       title: "выберете площадку",
//       key: "choose_platform",
//     },
//     {
//       title: "вконтакте",
//       key: "vk",
//     },
//     {
//       title: "Facebook",
//       key: "facebook",
//     },
//     {
//       title: "Instagram",
//       key: "instagram",
//     },
//   ]

//   return (
//     <div className={bloggersLocation ? "sort-menu__container" : "sort-menu__container_invisible"}>
//       <select className="sort-menu">
//         {option.map(({ title, key }) => (
//           <FormattedMessage id={key} key={title}>
//             {(message) => <option className="sort-menu__item" value={title}>{message}</option>}
//           </FormattedMessage>
//         ))}
//       </select>
//     </div>
//   )
// }

// export default SortMenu;


import './SortMenu.css';
import { FormattedMessage } from 'react-intl';

const SortMenu = () => {

  const bloggersLocation = window.location.pathname === '/bloggers';

  const platform = [
    {
      title: "вконтакте",
      key: "vk",
      link: "https://vk.com/",
    },
    {
      title: "Facebook",
      key: "facebook",
      link: "https://www.facebook.com/",
    },
    {
      title: "Instagram",
      key: "instagram",
      link: "https://www.instagram.com/",
    },
  ]

  const direction = [
    {
      title: "Животные",
      key: "direction_animals",
    },
    {
      title: "Игры",
      key: "direction_games",
    },
    {
      title: "Иностранные языки",
      key: "direction_lang",
    },
  ]

  return (
    <div className={bloggersLocation ? "sort-menu__container" : "sort-menu__container_invisible"}>
      <div className="sort-menu__header">
        <h3 className="sort-menu__header-item" href="/bloggers"><FormattedMessage id="sort_by" /></h3>
        <ul className="sort-menu">
          <li className="sort-menu__list">
            <a className="sort-menu__item" href="/bloggers"><FormattedMessage id="platform_choose" /></a>
            <ul className="sort-menu__submenu">
              {platform.map(({ title, key, link }) => (
                <li key={key} className="sort-menu__submenu-list">
                  <a className="sort-menu__submenu-item" key={title} href={link} target="_blank" rel="noreferrer"><FormattedMessage id={key} /></a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <ul className="sort-menu">
          <li className="sort-menu__list">
            <a className="sort-menu__item" href="/bloggers"><FormattedMessage id="direction_choose" /></a>
            <ul className="sort-menu__submenu">
              {direction.map(({ title, key }) => (
                <li key={key} className="sort-menu__submenu-list">
                  <a className="sort-menu__submenu-item" key={title} href="/"><FormattedMessage id={key} /></a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SortMenu;
