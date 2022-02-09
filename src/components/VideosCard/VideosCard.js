import './VideosCard.css';

const VideosCard = ({ data }) => {

  return (
    <article id={data.id} className="videos-card">
      <a className="videos-card__link" href={data.link} target="_blank" rel="noopener noreferrer nofollow" >
        <img className="videos-card__image" style={{ backgroundImage: `url(${data.image})` }} alt="" />
        <button className="videos-card__play-btn" type="button" ></button>
      </a>
    </article>
  )
}

export default VideosCard;
