// import './Footer.css';
// import MainrashaLogo from '../../images/logo.png';
// import { Link } from 'react-router-dom';
// import Instagram from '../../images/instagram-footer.svg';
// import Vk from '../../images/vk-footer.svg';

// function Footer() {
//   return (
//     <div className="footer">
//       <Link to="/">
//         <img className="footer__logo" src={MainrashaLogo} alt="лого" />
//       </Link>
//       <div className="footer__contacts-container">
//       <div className="footer__contacts-info">
//         <p className="footer__contacts-info-text">Cвязаться с нами</p>
//         <p className="footer__contacts-info-text">reklama@wildjam.ru</p>
//         <p className="footer__contacts-info-text">ул. Сущевская, д. 27, стр. 2</p>
//         <p className="footer__contacts-info-text">+7 (499) 393-39-62</p>
//       </div>
//       <ul className="footer__social-link">
//       <li className="footer__social-link-list">
//           <a className="footer__social-link-item" href="https://vk.com/" target="_blank" rel="noreferrer">
//             <img className="footer__social-link-icon" src={Vk} alt="vk" />
//           </a>
//         </li>
//         <li className="footer__social-link-list">
//           <a className="footer__social-link-item" href="https://www.instagram.com" target="_blank" rel="noreferrer">
//             <img className="footer__social-link-icon" src={Instagram} alt="instagram" />
//           </a>
//         </li>
//       </ul>
//     </div>
//     </div>
//   )
// }

// export default Footer;


import './Footer.css';
import MainrashaLogo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import Instagram from '../../images/instagram-footer.svg';
import Vk from '../../images/vk-footer.svg';
import { FormattedMessage } from 'react-intl';

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <img className="footer__logo" src={MainrashaLogo} alt="лого" />
      </Link>
      <ul className="footer__contacts-info">
        <li className="footer__contacts-info-list">
          <a href="/contactss" className="footer__contacts-info-item"><FormattedMessage id='contact_us'/></a>
        </li>
        <li className="footer__contacts-info-list">
          <a href="mailto:reklama@wildjam.ru" className="footer__contacts-info-item">reklama@wildjam.ru</a>
        </li>
        <li className="footer__contacts-info-list">
          <a href="https://yandex.ru/maps/213/moscow/house/sushchyovskaya_ulitsa_27s2/Z04YcAdgSEYBQFtvfXt5cnxrYA==/?ll=37.600136%2C55.783084&mode=search&sctx=ZAAAAAgAEAAaKAoSCf8EFytq7kNAET0q%2Fu%2BIokdAEhIJAAAAAIB98T8RgH0eqtxj3j8iBgABAgMEBSgKOABA0YgGSAFqAnJ1nQHNzEw9oAEAqAEAvQE%2B3RqjwgEJAAAAAAAAAAAA6gEA8gEA%2BAEAggIr0YPQuy4g0KHRg9GJ0LXQstGB0LrQsNGPLCDQtC4gMjcsINGB0YLRgC4gMooCAA%3D%3D&sll=37.600136%2C55.783084&source=wizgeo&sspn=0.012855%2C0.004623&text=%D1%83%D0%BB.%20%D0%A1%D1%83%D1%89%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%2C%20%D0%B4.%2027%2C%20%D1%81%D1%82%D1%80.%202&utm_medium=maps-desktop&utm_source=serp&z=16.41" className="footer__contacts-info-item"><FormattedMessage id='address'/></a>
        </li>
        <li className="footer__contacts-info-list">
          <a href="tel:+7 (499) 393-39-62" className="footer__contacts-info-item">+7 (499) 393-39-62</a>
        </li>
      </ul>
      <ul className="footer__social-link">
        <li className="footer__social-link-list">
          <a className="footer__social-link-item" href="https://vk.com/" target="_blank" rel="noreferrer">
            <img className="footer__social-link-icon" src={Vk} alt="vk" />
          </a>
        </li>
        <li className="footer__social-link-list">
          <a className="footer__social-link-item" href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img className="footer__social-link-icon" src={Instagram} alt="instagram" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer;
