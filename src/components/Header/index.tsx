import Link from 'next/link';

import styles from './styles.module.scss';


export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a>
            <h1>i<span>.</span>Fix</h1>
          </a>
        </Link>

        <div>
            <Link href='/orders'>
              <span>Ordens</span>
            </Link>

            <Link href='/clients'>
              <span>Clientes</span>
            </Link>

            <Link href='/vehicles'>
              <span>Veículos</span>
            </Link>
        </div>
      </div>
    </header>
  )
}