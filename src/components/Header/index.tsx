import LogoIcon from '../../assets/icons/logo.svg?react'
import styles from './Header.module.css'

export const Header = () => {
  console.log(styles)

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <LogoIcon className={styles.logo} />
        <span className={styles.primary}>to</span>
        <span className={styles.secondary}>do</span>
      </h1>
    </header>
  )
}