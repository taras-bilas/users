import './UserInfo.scss';
import { Link } from 'react-router-dom';
import userIcon from './../../assets/icons/user.svg';
import { useSelector } from 'react-redux';
import { Header } from '../Header/Header';
import backIcon from './../../assets/icons/back-arrow.svg';

export const UserInfo = () => {
  const user = useSelector(state => state.userInfo);
  const {
    name,
    company,
    phone,
    email,
    address,
    website
  } = user;
  const formattedAddress = `${address.street}, ${address.suite}, ${address.city}`;

  return (
    <>
      <Header title="Details">
        <Link to="/" className="header__back-link">
          <img
            src={backIcon}
            alt="Back icon"
            className="header__back-icon"
          />
          <span className="back-text">Back to users</span>
        </Link>
      </Header>

      <div className="info">
        <div className="info__top">
          <img
            src={userIcon}
            alt="User icon"
            className="info__user-icon"
          />
          <div className="info__main-info">
            <h1 className="info__user-name">{name}</h1>
            <p className="info__user-job">Works at {company.name}</p>
          </div>
        </div>

        <div className="info__bottom">
          <div className="contacts">
            <h2 className="contacts__title">Contacts</h2>
            <div className="contacts__phone">
              <h3 className="contacts__phone-title">Phone:</h3>
              <p className="contacts__phone-value">
                {phone}
              </p>
            </div>
            <div className="contacts__email">
              <h3 className="contacts__email-title">Email:</h3>
              <p className="contacts__email-value">
                {email}
              </p>
            </div>
            <div className="contacts__address">
              <h3 className="contacts__address-title">Address:</h3>
              <p className="contacts__address-value">
                {formattedAddress}
              </p>
            </div>
            <div className="contacts__website">
              <h3 className="contacts__website-title">Website:</h3>
              <p className="contacts__website-value">
                {website}
              </p>
            </div>
          </div>
          <div className="company">
            <h2 className="company__title">Company</h2>
            <div className="company__name">
              <h3 className="company__name-title">Name:</h3>
              <p className="company__name-value">{company.name}</p>
            </div>
            <div className="company__phrase">
              <h3 className="company__phrase-title">Catch phrase:</h3>
              <p className="company__phrase-value">{company.catchPhrase}</p>
            </div>
            <div className="company__strategy">
              <h3 className="company__strategy-title">Business strategy:</h3>
              <p className="company__strategy-value">{company.bs}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}