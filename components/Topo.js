import Link from 'next/link'

import styles from '../styles/Header.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
            <ul>
                <li><Link href="/">&lt;</Link></li>
                <h1>Nícolas Kurz Chimenes Silva</h1>
                <li><Link href="/todos">&gt;</Link></li>
            </ul>
        </nav>
      </header>
    </div>
  )
}