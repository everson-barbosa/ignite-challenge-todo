import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './Form.module.css'
import PlusIcon from '../../../assets/icons/plus.svg?react'
import { Task } from '../../../types/entities/task'

interface FormProps {
  onSubmit: (task: Task) => void
}

export const Form = ({ onSubmit }: FormProps) => {
  const [text, setText] = useState('')

  const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const task = {
      id: crypto.randomUUID(),
      text,
      done: false
    }

    onSubmit(task)
    setText('')
  }

  const isSubmitButtonDisabled = !text
  
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input 
        className={styles.input} 
        placeholder='Adicione uma nova tarefa'
        type="text" 
        value={text} 
        onChange={handleChangeText} 
      />
      <button 
        className={styles.button}
        type="submit" 
        disabled={isSubmitButtonDisabled}
      >
        Criar <PlusIcon />
      </button>
    </form>
  )
}