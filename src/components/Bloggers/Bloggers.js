// import './Bloggers.css';

// const Bloggers = () => {

//   const BLOGGERS_CARD_LIST_DATA = [
//     {
//       id: 1,
//       title: 'Катя Конасова',
//       youtube: '3 160 000',
//       vk: '2 777 000',
//       instagram: '3 333 000',
//     },
//     {
//       id: 2,
//       title: 'Влад Силач',
//       youtube: '3 160 000',
//       vk: '2 777 000',
//       instagram: '3 333 000',
//     },
//     {
//       id: 3,
//       title: 'аксим Голополосов',
//       youtube: '3 160 000',
//       vk: '2 777 000',
//       instagram: '3 333 000',
//     },
//     {
//       id: 4,
//       title: 'Саша Спилберг',
//       youtube: '3 160 000',
//       vk: '2 777 000',
//       instagram: '3 333 000',
//     },
//     {
//       id: 5,
//       title: 'Николай Соболев',
//       youtube: '3 160 000',
//       vk: '2 777 000',
//       instagram: '3 333 000',
//     },
//     {
//       id: 6,
//       title: 'Катя клэп',
//       youtube: '3 160 000',
//       vk: '2 777 000',
//       instagram: '3 333 000',
//     },
//     {
//       id: 7,
//       title: 'Катя клэп',
//       youtube: '3 160 000',
//       vk: '2 777 000',
//       instagram: '3 333 000',
//     },
//     {
//       id: 8,
//       title: 'Саша Ребекка',
//       youtube: '3 160 000',
//       vk: '2 777 000',
//       instagram: '3 333 000',
//     },
//   ];

//   return (
//     <div className="bloggers">
//       <h1 className="bloggers__title">Блогеры</h1>
//       <div className="bloggers__sort-menu-container">
//         <p className="bloggers__sort-menu-header">Сортировать по:</p>
//         <ul className="bloggers__sort-menu">
//           <li className="bloggers__sort-menu-list">
//             <a className="bloggers__sort-menu-item" href="/bloggers">выберете площадку</a>
//             <ul className="bloggers__sort-menu-submenu">
//           <li className="bloggers__sort-menu-submenu-list">
//             <a className="bloggers__sort-menu-submenu-list-item" href="/bloggers">Вконтакте</a>
//           </li>
//           <li className="bloggers__sort-menu-submenu-list">
//             <a className="bloggers__sort-menu-submenu-list-item" href="/bloggers">Facebook</a>
//           </li>
//           <li className="bloggers__sort-menu-submenu-list">
//             <a className="bloggers__sort-menu-submenu-list-item" href="/bloggers">Instagram</a>
//           </li>
//         </ul>
//           </li>
//           <li className="bloggers__sort-menu-list">
//             <a className="bloggers__sort-menu-item" href="/bloggers">выберете направление</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Bloggers;

import React from 'react';
import './Bloggers.css';
import BloggersCardList from '../BloggersCardList/BloggersCardList';
import SortMenu from '../SortMenu/SortMenu';
import Title from '../Title/Title';
import { FormattedMessage } from 'react-intl';

const Bloggers = ({onCardClick}) => {

  const BLOGGERS_CARD_LIST_DATA = [
    {
      id: 1,
      link: 'https://100biografiy.ru/wp-content/uploads/2020/10/katya-konasova3-650x571.jpg',
      title: 'Катя Конасова',
      youtube: '3 160 000',
      vk: '2 777 000',
      instagram: '3 333 000',
      key: "blogger_title_1",
    },
    {
      id: 2,
      link: 'https://uchastniki.com/wp-content/uploads/2019/05/vlad-bumaga-25.jpg',
      title: 'Влад Силач',
      youtube: '3 160 000',
      vk: '2 777 000',
      instagram: '3 333 000',
      key: "blogger_title_2",
    },
    {
      id: 3,
      link: 'https://socialbus.ru/wp-content/uploads/2020/06/kak-vosstanovit-kanal-youtube.jpg',
      title: 'Максим Голополосов',
      youtube: '3 160 000',
      vk: '2 777 000',
      instagram: '3 333 000',
      key: "blogger_title_3",
    },
    {
      id: 4,
      link: 'https://comp-pro.ru/wp-content/uploads/b/6/3/b63d31b07df6937fb5ee382ac86df007.jpeg',
      title: 'Саша Спилберг',
      youtube: '3 160 000',
      vk: '2 777 000',
      instagram: '3 333 000',
      key: "blogger_title_4",
    },
    {
      id: 5,
      link: 'https://sun9-43.userapi.com/impf/c850420/v850420848/52c0b/oI57GUJ_fs8.jpg?size=1080x720&quality=96&sign=c5dcd36c36c2a8052b869e89a41b5dc3&c_uniq_tag=hSglr3AjvxOhHDG_H0fcjQxvHkoLafe7BAadriee_3U&type=video_thumb',
      title: 'Николай Соболев',
      youtube: '3 160 000',
      vk: '2 777 000',
      instagram: '3 333 000',
      key: "blogger_title_5",
    },
    {
      id: 6,
      link: 'https://www.likeni.ru/upload/iblock/d24/s1200-1-5-1024x768.jpg',
      title: 'Катя клэп',
      youtube: '3 160 000',
      vk: '2 777 000',
      instagram: '3 333 000',
      key: "blogger_title_6",
    },
    {
      id: 7,
      link: 'https://i.pinimg.com/736x/a8/7a/3a/a87a3acc3f7a821c38ec38d2e9b70324.jpg',
      title: 'Катя клэп',
      youtube: '3 160 000',
      vk: '2 777 000',
      instagram: '3 333 000',
      key: "blogger_title_7",
    },
    {
      id: 8,
      link: 'https://static.360tv.ru/media/uploads/2017/10/23/sasha2.JPG',
      title: 'Саша Ребекка',
      youtube: '3 160 000',
      vk: '2 777 000',
      instagram: '3 333 000',
      key: "blogger_title_8",
    },
  ];


  const bloggersLocation = window.location.pathname === '/bloggers';

  return (
    <div className="bloggers">
      <Title title={bloggersLocation ? <FormattedMessage id='bloggers_title' /> : <FormattedMessage id='blogger_location_title' />} />
      <SortMenu />
      <BloggersCardList data={BLOGGERS_CARD_LIST_DATA} onCardClick={onCardClick}/>
    </div>
  )
}

export default Bloggers;
