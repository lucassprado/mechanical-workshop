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
          <ul>
            <Link href='/orders'>
              <a>
                <li>Ordens de Serviço</li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  )
}