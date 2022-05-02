import Head from 'next/head';

import { FaUserTie } from 'react-icons/fa';
import { AiFillCar } from 'react-icons/ai'

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | iFix</title>
      </Head>

      <main className={styles.osContainer}>
        <div className={styles.osContent}>
          <header className={styles.osHeader}>
            <p>
              <FaUserTie color="#eba417" className={styles.userIcon} />
              Lucas Prado
            </p>
            <p>07/10/2001</p>
          </header>

          <div className={styles.osInfos}>
            <p>
              <AiFillCar color="#619fff" className={styles.userCar} />
              Palio Weekend  
            </p>
            <p>R$150,00</p>
          </div>
        </div>
        <div className={styles.osContent}>
          <header className={styles.osHeader}>
            <p>
              <FaUserTie color="#eba417" className={styles.userIcon} />
              Lucas Prado
            </p>
            <p>07/10/2001</p>
          </header>

          <div className={styles.osInfos}>
            <p>
              <AiFillCar color="#619fff" className={styles.userCar} />
              Palio Weekend  
            </p>
            <p>R$150,00</p>
          </div>
        </div>
        <div className={styles.osContent}>
          <header className={styles.osHeader}>
            <p>
              <FaUserTie color="#eba417" className={styles.userIcon} />
              Lucas Prado
            </p>
            <p>07/10/2001</p>
          </header>

          <div className={styles.osInfos}>
            <p>
              <AiFillCar color="#619fff" className={styles.userCar} />
              Palio Weekend  
            </p>
            <p>R$150,00</p>
          </div>
        </div>
      </main>
    </>
  );
}
