// import Bloggers from '../Bloggers/Bloggers';
// import BloggersCard from '../BloggersCard/BloggersCard';
// import Videos from '../Videos/Videos';
// import './Blogger.css';

// const Blogger = ({ data }) => {

//   return (
//     <div className="blogger" >
//       <div className="blogger__container">
//         <BloggersCard data={data} />
//       </div>
//       <Videos />
//       <Bloggers />
//     </div>
//   )
// }

// export default Blogger;

import React from 'react';
import Videos from '../Videos/Videos';
import './Blogger.css';
import YoutubeColor from '../../images/youtube-color.svg';
import VkColor from '../../images/vk-color.svg';
import InstagramColor from '../../images/instagram-color.svg';
import { FormattedMessage } from 'react-intl';

const Blogger = ({ data }) => {

  return (
    <article id="blogger" className="blogger" >
      <div className="blogger__container">
        <img className="bloggers-card__link_blogger-location" src={data?.link} alt={data?.name} />
        <div className="bloggers-card__info-container bloggers-card__info-container_location">
          <h3 className="bloggers-card__title"><FormattedMessage id={data?.key}/></h3>
          <div className="bloggers-card__followers bloggers-card__followers_location">
            <div className="bloggers-card__followers-container bloggers-card__followers-container_location">
              <img className="bloggers-card__followers-icon bloggers-card__followers-icon_location" alt="youtube" src={YoutubeColor} />
              <span className="bloggers-card__followers-count bloggers-card__followers-count_location">{data?.youtube}</span>
              <span className="bloggers-card__followers-span"><FormattedMessage id='subscribers'/></span>
            </div>
            <div className="bloggers-card__followers-container bloggers-card__followers-container_location">
              <img className="bloggers-card__followers-icon bloggers-card__followers-icon_location" alt="youtube" src={VkColor} />
              <span className="bloggers-card__followers-count bloggers-card__followers-count_location">{data?.vk}</span>
              <span className="bloggers-card__followers-span"><FormattedMessage id='subscribers'/></span>
            </div>
            <div className="bloggers-card__followers-container bloggers-card__followers-container_location">
              <img className="bloggers-card__followers-icon bloggers-card__followers-icon_location" alt="youtube" src={InstagramColor} />
              <span className="bloggers-card__followers-count bloggers-card__followers-count_location">{data?.instagram}</span>
              <span className="bloggers-card__followers-span"><FormattedMessage id='subscribers'/></span>
            </div>
          </div>
          <div className="blogger__channel-info">
            <div className="blogger__channel-info_container">
              <h3 className="blogger__channel-title"><FormattedMessage id='channel_information'/></h3>
              <p className="blogger__channel-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Risus elit lobortis pellentesque tellus mi nulla morbi. Risus, quis consectetur sagittis pharetra, urna, leo.
                Egestas porta habitasse fermentum nulla neque. At eget leo sed bibendum nunc.
                Diam neque, eu velit urna, feugiat vulputate elit justo. Lectus diam lacus vel donec sit.
                Vitae venenatis amet suscipit enim nec tincidunt sit lacus. Morbi orci, eget vitae tortor cras at eu duis.
                Sit est, cursus sem facilisis sed ac.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Risus elit lobortis pellentesque tellus mi nulla morbi. Risus, quis consectetur sagittis pharetra, urna, leo.
                Egestas porta habitasse fermentum nulla neque. At eget leo sed bibendum nunc.
                Diam neque, eu velit urna, feugiat vulputate elit justo. Lectus diam lacus vel donec sit.
                Vitae venenatis amet suscipit enim nec tincidunt sit lacus. Morbi orci, eget vitae tortor cras at eu duis.
                Sit est, cursus sem facilisis sed ac </p>
            </div>
          </div>
        </div>
      </div>
      <Videos />
    </article>
  )
}

export default Blogger;
