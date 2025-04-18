import { LOGO_URL as url } from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={url}></img>
      </div>
      <div className="nav-items">
        <ul className="list">
          <li>Home</li>
          <li>Contact us</li>
          <li>Address</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
