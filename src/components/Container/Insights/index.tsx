import styles from './Insights.module.css'

interface InsightsProps {
  amountOfCreated: number
  amountOfDone: number
}

export const Insights = ({ amountOfCreated, amountOfDone }: InsightsProps) => {
  
  return (
    <section className={styles.container}>
      <div className={styles.field}>
        <p className={styles.created}>Tarefas criadas</p>
        <span className={styles.counter}>{amountOfCreated}</span>
      </div>

      <div className={styles.field}>
        <p className={styles.done}>Concluídas</p>
        <span className={styles.counter}>{amountOfCreated } de {amountOfDone}</span>
      </div>
    </section>
  )
}