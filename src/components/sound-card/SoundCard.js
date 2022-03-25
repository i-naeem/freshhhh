import styles from './sound-card.module.css';
import icons from '../../assets/icons';
import { useEffect, useRef, useState } from 'react';

const SoundCard = (props) => {
  const { title, url } = props;
  const [isPlaying, setIsPlaying] = useState(false);

  const Icon = icons[title];

  const audioRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      return;
    }

    audioRef.current.pause();
  }, [isPlaying]);

  return (
    <section
      onClick={() => setIsPlaying(!isPlaying)}
      className={`${styles.card} ${isPlaying && styles.active}`}
      role="button"
    >
      <h5 className={styles.title}>{title}</h5>
      <div className={styles.iconWrapper}>
        {Icon && <Icon className={styles.icon} />}
      </div>
      <audio loop ref={audioRef}>
        <source src={url} />
      </audio>
    </section>
  );
};

export default SoundCard;
