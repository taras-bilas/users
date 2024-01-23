import './Header.scss';

export const Header = ({ title, children }) => {
  return (
    <header className="header">
      <div className="header__left">
        <h1 className="header__title">{title}</h1>
      </div>
      <div className="header__right">{children}</div>
    </header>
  );
}