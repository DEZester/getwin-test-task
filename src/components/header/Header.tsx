import { FC } from 'react';
import styles from './header.module.scss';
import headerLogo from '../../images/logo.png';
const Header: FC = () => {
  return (
    <header className={styles.header}>
      <img src={headerLogo} alt="logo" />
    </header>
  );
};

export default Header;
