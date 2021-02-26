import styles from '../styles/Components/ChallengeBox.module.css';

export function ChallengeBox() {
  const hasActiveChallenge = true;
  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src='icons/body.svg' />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
            <footer>
              <button type='button' className={styles.challengeFailedButton}>
                Completei
              </button>
              <button type='button' className={styles.challengeSucceededButton}>
                Falhei
              </button>
            </footer>
          </main>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src='icons/level-up.svg' alt='Level Up' />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
