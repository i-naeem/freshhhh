import Header from '../header/Header';
import styles from './styles.module.css';

const AppLayout = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <main>{props.children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default AppLayout;
