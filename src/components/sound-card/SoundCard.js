import styles from './sound-card.module.css';
import useAudio from '../../hooks/useAudio';
import icons from '../../assets/icons';

const SoundCard = (props) => {
  const { title, url } = props;

  const Icon = icons[title];

  const { ref, toggle, playing } = useAudio();
  return (
    <section
      onClick={toggle}
      className={`${styles.card} ${playing && styles.active}`}
      role="button"
    >
      <h5 className={styles.title}>{title}</h5>

      <div className={styles.iconWrapper}>
        {Icon && <Icon className={styles.icon} />}
      </div>

      <audio loop ref={ref}>
        <source src={url} />
      </audio>
    </section>
  );
};

export default SoundCard;
