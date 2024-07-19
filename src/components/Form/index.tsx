// src/components/Form.js
import { useState } from 'react'
import { db } from '../../../firebase'
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore'
import { ContainerForm } from './style'

export function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const register = query(collection(db, 'users'), where('email', '==', email))
    const querySnapshot = await getDocs(register)

    if (name === '' || email === '') {
      alert('Nenhum campo pode estar vazio')
      return
    }

    if (!querySnapshot.empty) {
      alert('email já cadastrado')
      return
    }

    addDoc(collection(db, 'users'), {
      name,
      email,
      date: new Date().toLocaleString('pt-br'),
    }).then(() => {
      alert('Email cadastrado')
      window.location.href = 'https://www.facebook.com.br' // Usado para fazer o redirecionamento.
    })
  }

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Seu nome"
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Seu e-mail"
        required
      />

      <button type="submit">Fazer parte do grupo VIP</button>
    </ContainerForm>
  )
}
