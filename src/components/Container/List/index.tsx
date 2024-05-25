import TrashIcon from '../../../assets/icons/trash.svg?react'
import { Task } from "../../../types/entities/task"
import styles from './List.module.css'

interface ListProps {
  tasks: Task[]
  handleDelete: (id: string) => void
  handleToggleAsDone: (id: string) => void
}

export const List = ({ tasks, handleDelete, handleToggleAsDone }: ListProps) => {
  return (
    <ul className={styles.list}>
      {tasks.map(task => 
        <li key={task.id} className={styles.item}>
          <div className={styles.toggleButton}>
            <input 
              className={styles.toggleButton}
              type="radio"
              id={task.id}
              checked={task.done} 
              onClick={() => handleToggleAsDone(task.id)}
            />
            <label htmlFor={task.id} />
          </div>
          <p 
            className={styles.text} 
            style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
              {task.text}
          </p>
          <button 
              className={styles.deleteButton}
              onClick={() => handleDelete(task.id)}
            >
              <TrashIcon />
            </button>
        </li>
      )}
    </ul>
  )
}