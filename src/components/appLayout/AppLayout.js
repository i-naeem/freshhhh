import styles from './styles.module.css';

const AppLayout = (props) => {
  return (
    <div className={styles.container}>
      <header>Fresshhh</header>
      <main>{props.children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default AppLayout;
