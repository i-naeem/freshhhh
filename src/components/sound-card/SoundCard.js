import styles from './sound-card.module.css';
import icons from '../../assets/icons';

const SoundCard = (props) => {
  const { title, url } = props;

  const Icon = icons[title];

  return (
    <section className={styles.card} role="button">
      <h5 className={styles.title}>{title}</h5>
      <div className={styles.iconWrapper}>
        {Icon && <Icon className={styles.icon} />}
      </div>
      <audio>
        <source src={url} />
      </audio>
    </section>
  );
};

export default SoundCard;
