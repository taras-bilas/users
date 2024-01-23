import './UserCard.scss';
import { Link } from 'react-router-dom';
import userIcon from './../../assets/icons/user.svg';
import phoneIcon from './../../assets/icons/phone.svg';
import emailIcon from './../../assets/icons/email.svg';
import { useDispatch } from 'react-redux';
import { setUserInfo } from './../../redux/actions';

export const UserCard = ({ user }) => {
  const { name, phone, email } = user;

  const dispatch = useDispatch();

  const handleDetailsClick = () => {
    dispatch(setUserInfo(user));
  };

  return (
    <div className="card">
      <img
        src={userIcon}
        alt="User icon"
        className="card__user-icon"
      />

      <div className="card__user-info">
        <div className="card__user-name">{name}</div>
        <div className="card__contacts">
          <a href={`tel:${phone}`} className="card__user-phone">
            <img
              src={phoneIcon}
              alt="Phone icon"
              className="card__phone-icon"
            />
            <span className="card__phone-value">
              {phone}
            </span>
          </a>
          <a href={`mailto:${email}`} className="card__user-email">
            <img
              src={emailIcon}
              alt="Email icon"
              className="card__email-icon"
            />
            <span className="card__email-value">
              {email}
            </span>
          </a>
        </div>
        <Link
          to="/details"
          className="card__details"
          onClick={handleDetailsClick}
        >
          Details
        </Link >
      </div>
    </div>
  );
}