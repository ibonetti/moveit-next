import Head from "next/head";
import { CompletedChallenges } from "../Components/CompletedChallenges";
import { Countdown } from "../Components/CountDown";
import { ExperienceBar } from "../Components/ExperienceBar";
import { Profile } from "../Components/Profile";

import styles from "../styles/Pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div></div>
      </section>
    </div>
  );
}
