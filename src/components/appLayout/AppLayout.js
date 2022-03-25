import Footer from '../footer/Footer';
import Header from '../header/Header';
import styles from './styles.module.css';

const AppLayout = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
