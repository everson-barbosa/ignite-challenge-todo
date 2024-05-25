import styles from './Placeholder.module.css'
import PlaceholderIcon from '../../../assets/icons/clipboard.svg?react'

export const Placeholder = () => {

  return (
    <div className={styles.placeholder}>
      <div className={styles.content}>
        <PlaceholderIcon />
        <p className={styles.text}>
          <strong>Você ainda não tem tarefas cadastradas</strong><br/>
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </div>
  )
}