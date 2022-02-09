import './BloggersCardList.css';
import BloggersCard from '../BloggersCard/BloggersCard';
import React from 'react';

const BloggersCardList = ({ data, onCardClick }) => {

  const ref = React.useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const bloggersLocation = window.location.pathname === '/bloggers';

  

  const initialBloggersCards = data.map((item) => (
    <li className="bloggers-card__list-item" key={item.id}>
      <BloggersCard
        data={item}
        onCardClick={onCardClick}
      />
    </li>
  ))

  return (
    <>
      {bloggersLocation ? (
        <ul className="bloggers-card__list">{initialBloggersCards}</ul>
      ) : (
        <div className="bloggers-card__list_location-container">
          <ul ref={ref} className="bloggers-card__list bloggers-card__list_location">{initialBloggersCards}</ul>
          <button className="bloggers-card__list-scrollbtn-left" onClick={() => scroll(-331)}></button>
          <button className="bloggers-card__list-scrollbtn-right" onClick={() => scroll(331)}></button>
        </div>
      )
      }
    </>
  )
}

export default BloggersCardList;

