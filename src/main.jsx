import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


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

      if (resposta.ok) {
        return todos
      } else {
        throw new Error('Erro ao buscar todos')
      }

  }
}
