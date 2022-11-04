import { FC } from 'react';
import styles from '../../stylesheets/header.module.scss';
import headerLogo from '../../images/logo.png';
const Header: FC = () => {
  return (
    <header className={styles.header}>
      <img src={headerLogo} alt="logo" className={styles.header__logo} />
    </header>
  );
};

export default Header;
