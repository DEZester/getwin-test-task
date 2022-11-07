import { FC } from "react";
import "./header.scss";
import headerLogo from "../../images/logo.png";

const Header: FC = () => {
  return (
    <header className="header">
      <img src={headerLogo} alt="logo" className="header__logo" />
    </header>
  );
};

export default Header;
