import './CardTitle.css';

const CardTitle = ({ title }) => {

  return (
    <h3 className="card__title">{title}</h3>
  )
}

export default CardTitle;


// import './CardTitle.css';
// import { FormattedMessage } from 'react-intl';

// const CardTitle = ({ titles }) => {

//   const title = [
//     {
//       title: 'Катя Конасова',
//       key: "blogger_title_1",
//     },
//     {
//       title: 'Влад Силач',
//       key: "blogger_title_2",
//     },
//     {
//       title: 'Максим Голополосов',
//       key: "blogger_title_3",
//     },
//     {
//       title: 'Саша Спилберг',
//       key: "blogger_title_4",
//     },
//     {
//       title: 'Николай Соболев',
//       key: "blogger_title_5",
//     },
//     {
//       title: 'Катя клэп',
//       key: "blogger_title_6",
//     },
//     {
//       title: 'Катя клэп',
//       key: "blogger_title_7",
//     },
//     {
//       title: 'Саша Ребекка',
//       key: "blogger_title_8",
//     },
//   ];

//   return (
//     <>
//       {title.map(({ title, key }) => (
//         <h3 className="card__title" key={title}>{title}</h3>
//       ))}
//     </>
//   )
// }

// export default CardTitle;
