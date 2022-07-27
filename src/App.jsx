import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import API from './main'

const API = () => {
  async function getTodos() {
    try {
      const url = 'https://jsonplaceholder.typicode.com/todos/'

      const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }

      const resposta = await fetch(url, { headers })
      const todos = await resposta.json()

      if (todos.error)
        throw new Error('Erro ao buscar todos')

      else {

        const resposta = {
          userId: json.userId,
          id: json.id,
          title: json.title,
          completed: json.completed,
        }

      }

    }
    catch (error) {
      console.log(error)
    }
  }
} 

return (
  console.log(todos)
)

export default API