import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1>i<span>.</span>Fix</h1>
      </div>
    </header>
  )
}