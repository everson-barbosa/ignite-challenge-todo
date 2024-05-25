import { useState } from "react"
import { Task } from "../../types/entities/task"
import styles from './Container.module.css'
import { Form } from "./Form"
import { Insights } from "./Insights"
import { List } from "./List"
import { Placeholder } from "./Placeholder"

export const Container = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  const onSubmit = (task: Task) => {
    setTasks(prev => [...prev, task])
  }

  const handleDelete = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const handleToggleAsDone = (id: string) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done }
      }      
      return task
    }))
  }

  const amountOfTasksCreated = tasks.length
  const amountOfTasksDone = tasks.filter(({ done }) => done).length

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Form onSubmit={onSubmit} />
          <Insights  
            amountOfCreated={amountOfTasksCreated} 
            amountOfDone={amountOfTasksDone}
          />
          {
            tasks.length > 0 && 
              <List 
                tasks={tasks} 
                handleDelete={handleDelete}
                handleToggleAsDone={handleToggleAsDone}
              />
          }
          {
            tasks.length === 0 && <Placeholder />
          }
      </div>
    </div>
  )
}