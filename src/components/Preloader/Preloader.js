import './Preloader.css';
import { FormattedMessage } from 'react-intl';

const Preloader = () => {
  return (
    <p className="preloader"><FormattedMessage id='preloader'/>...</p>
  )
}

export default Preloader;
