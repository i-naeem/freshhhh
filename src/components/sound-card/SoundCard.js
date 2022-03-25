import styles from './sound-card.module.css';
import useAudio from '../../hooks/useAudio';
import icons from '../../assets/icons';

const SoundCard = (props) => {
  const { title, url } = props;

  const Icon = icons[title];

  const { ref, toggle, playing, setVolume } = useAudio();
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
        <source src={process.env.PUBLIC_URL + '/' + url} />
      </audio>

      {playing ? (
        <div className={styles.control}>
          <input
            onClick={(event) => event.stopPropagation()}
            type="range"
            onChange={(e) => setVolume(e.target.value)}
          />
        </div>
      ) : null}
    </section>
  );
};

export default SoundCard;
