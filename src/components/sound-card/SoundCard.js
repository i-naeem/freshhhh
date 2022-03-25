import styles from './sound-card.module.css';

const SoundCard = (props) => {
  return (
    <section className={styles.card} role="button">
      <h5 className={styles.title}>Rain</h5>
      <div className={styles.iconWrapper}>
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="16" y1="13" x2="16" y2="21"></line>
          <line x1="8" y1="13" x2="8" y2="21"></line>
          <line x1="12" y1="15" x2="12" y2="23"></line>
          <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
        </svg>
      </div>
      <audio>
        <source src="/sounds/rain.mp3" />
      </audio>
    </section>
  );
};

export default SoundCard;
