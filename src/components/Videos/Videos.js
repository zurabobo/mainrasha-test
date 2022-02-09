import './Videos.css';
import VideosCardList from '../VideosCardList/VideosCardList';
import VideoOne from '../../images/video-1.jpg';
import VideoTwo from '../../images/video-2.jpg';
import VideoThree from '../../images/video-3.jpg';
import VideoFour from '../../images/video-4.jpg';
import VideoFive from '../../images/video-5.jpg';
import VideoSix from '../../images/video-6.jpg';
import Title from '../Title/Title';
import { FormattedMessage } from 'react-intl';

const Videos = () => {

  const VIDEOS_CARD_LIST_DATA = [
    {
      id: 1,
      link: 'https://youtu.be/yivaVZNSWrM',
      image: `${VideoOne}`,
    },
    {
      id: 2,
      link: 'https://newsbel.by/wp-content/uploads/2019/08/newsbel.by-19.08.2019-5tA45HbJOJLExgPgw3dhM9dULPwZ1L16.jpg',
      image: `${VideoTwo}`,
    },
    {
      id: 3,
      link: 'https://socialbus.ru/wp-content/uploads/2020/06/kak-vosstanovit-kanal-youtube.jpg',
      image: `${VideoThree}`,
    },
    {
      id: 4,
      link: 'https://comp-pro.ru/wp-content/uploads/b/6/3/b63d31b07df6937fb5ee382ac86df007.jpeg',
      image: `${VideoFour}`,
    },
    {
      id: 5,
      link: 'https://sun9-43.userapi.com/impf/c850420/v850420848/52c0b/oI57GUJ_fs8.jpg?size=1080x720&quality=96&sign=c5dcd36c36c2a8052b869e89a41b5dc3&c_uniq_tag=hSglr3AjvxOhHDG_H0fcjQxvHkoLafe7BAadriee_3U&type=video_thumb',
      image: `${VideoFive}`,
    },
    {
      id: 6,
      link: 'https://www.likeni.ru/upload/iblock/d24/s1200-1-5-1024x768.jpg',
      image: `${VideoSix}`,
    },
  ];

  return (
    <>
      <Title title={<FormattedMessage id='recent_videos'/>} />
      <div className="videos">
        <VideosCardList data={VIDEOS_CARD_LIST_DATA} />
      </div>
    </>
  )
}

export default Videos;
