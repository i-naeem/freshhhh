import styles from './header.module.css';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <a href="/#" className={styles.brand}>
        <h1>Freshhhh</h1>
      </a>
    </header>
  );
};

export default Header;
