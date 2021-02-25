import styles from '../styles/Components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src='https://github.com/ibonetti.png' alt='Israel Bonetti' />
      <div>
        <strong>Israel Bonetti</strong>
        <p>
          <img src='icons/level.svg' alt='Level' />
          Level 1
        </p>
      </div>
    </div>
  );
}
