import VideosCard from '../VideosCard/VideosCard';
import './VideosCardList.css';

const VideosCardList = ({data}) => {

  const initialVideosCards = data.map((item) => (
    <li className="videos-card__list-item" key={item.id}>
      <VideosCard
        data={item}
      />
    </li>
  ))

  return (
    <ul className="videos-card__list">{initialVideosCards}</ul>
  )
}

export default VideosCardList;
