// import './BloggersCard.css';
// import Youtube from '../../images/youtube.svg';
// import Vk from '../../images/vk.svg';
// import Instagram from '../../images/instagram.svg';
// import { Link } from 'react-router-dom';
// import CardTitle from '../CardTitle/CardTitle';
// const BloggersCard = ({ data, onCardClick }) => {

//   const bloggersLocation = window.location.pathname === '/bloggers';

//   function handleClick() {
//     onCardClick(data);
//   }
//   return (
//     <>
//       {bloggersLocation ? (
//         <article id={data.id} className="bloggers-card">

//           <Link className="bloggers-card__link" style={{ backgroundImage: `url(${data.link})` }} to="/blogger" onClick={handleClick}>
//             <div className="bloggers-card__info-container">
//               <CardTitle title={data.title} />
//               <div className="bloggers-card__followers">
//                 <div className="bloggers-card__followers-container">
//                   <img className="bloggers-card__followers-icon" alt="youtube" src={Youtube} />
//                   <span className="bloggers-card__followers-count">{data.youtube}</span>
//                 </div>
//                 <div className="bloggers-card__followers-container">
//                   <img className="bloggers-card__followers-icon" alt="youtube" src={Vk} />
//                   <span className="bloggers-card__followers-count">{data.vk}</span>
//                 </div>
//                 <div className="bloggers-card__followers-container">
//                   <img className="bloggers-card__followers-icon" alt="youtube" src={Instagram} />
//                   <span className="bloggers-card__followers-count">{data.instagram}</span>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         </article>
//       ) : (
//         <>
//           <a className="bloggers-card__link bloggers-card__link_location" href="#blogger" style={{ backgroundImage: `url(${data.link})` }} onClick={handleClick}>
//           <div className="bloggers-card__info-container">
//             <CardTitle title={data.title} />
//             <div className="bloggers-card__followers">
//               <div className="bloggers-card__followers-container">
//                 <img className="bloggers-card__followers-icon bloggers-card__followers-icon_location" alt="youtube" src={Youtube} />
//                 <span className="bloggers-card__followers-count">{data.youtube}</span>
//               </div>
//               <div className="bloggers-card__followers-container">
//                 <img className="bloggers-card__followers-icon bloggers-card__followers-icon_location" alt="youtube" src={Vk} />
//                 <span className="bloggers-card__followers-count">{data.vk}</span>
//               </div>
//               <div className="bloggers-card__followers-container">
//                 <img className="bloggers-card__followers-icon bloggers-card__followers-icon_location" alt="youtube" src={Instagram} />
//                 <span className="bloggers-card__followers-count">{data.instagram}</span>
//               </div>
//             </div>
//           </div>
//           </a>
//         </>
//       )
//       }
//     </>
//   )
// }
// export default BloggersCard;


import React from 'react';
import './BloggersCard.css';
import Youtube from '../../images/youtube.svg';
import Vk from '../../images/vk.svg';
import Instagram from '../../images/instagram.svg';
import { Link } from 'react-router-dom';
import CardTitle from '../CardTitle/CardTitle';
import { FormattedMessage } from 'react-intl';

const BloggersCard = ({ data, onCardClick }) => {

  const bloggersLocation = window.location.pathname === '/bloggers';

  function handleClick() {
    onCardClick(data);
  }

  return (
    <>
      {bloggersLocation ? (
        <article id={data.id} className="bloggers-card">

          <Link className="bloggers-card__link" style={{ backgroundImage: `url(${data.link})` }} href="#blogger" to="/blogger" onClick={handleClick}>
            <div className="bloggers-card__info-container">
              <CardTitle title={<FormattedMessage id={data.key}/>}/>
              <div className="bloggers-card__followers">
                <div className="bloggers-card__followers-container">
                  <img className="bloggers-card__followers-icon" alt="youtube" src={Youtube} />
                  <span className="bloggers-card__followers-count">{data.youtube}</span>
                </div>
                <div className="bloggers-card__followers-container">
                  <img className="bloggers-card__followers-icon" alt="youtube" src={Vk} />
                  <span className="bloggers-card__followers-count">{data.vk}</span>
                </div>
                <div className="bloggers-card__followers-container">
                  <img className="bloggers-card__followers-icon" alt="youtube" src={Instagram} />
                  <span className="bloggers-card__followers-count">{data.instagram}</span>
                </div>
              </div>
            </div>
          </Link>
        </article>
      ) : (
        <>
          <a className="bloggers-card__link bloggers-card__link_location" href="#blogger" style={{ backgroundImage: `url(${data.link})` }} onClick={handleClick}>
          <div className="bloggers-card__info-container">
          <CardTitle title={<FormattedMessage id={data.key}/>}/>
            <div className="bloggers-card__followers">
              <div className="bloggers-card__followers-container">
                <img className="bloggers-card__followers-icon bloggers-card__followers-icon_location" alt="youtube" src={Youtube} />
                <span className="bloggers-card__followers-count">{data.youtube}</span>
              </div>
              <div className="bloggers-card__followers-container">
                <img className="bloggers-card__followers-icon bloggers-card__followers-icon_location" alt="youtube" src={Vk} />
                <span className="bloggers-card__followers-count">{data.vk}</span>
              </div>
              <div className="bloggers-card__followers-container">
                <img className="bloggers-card__followers-icon bloggers-card__followers-icon_location" alt="youtube" src={Instagram} />
                <span className="bloggers-card__followers-count">{data.instagram}</span>
              </div>
            </div>
          </div>
          </a>
        </>
      )
      }
    </>
  )
}
export default BloggersCard;
