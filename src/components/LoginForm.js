import { useRouter } from 'next/router'
import { useState } from 'react'
import api from '../services/api'
import Input from './Input'

export default function LoginForm() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const response = await api.post('/loginUser', {
      email,
      password
    })

    const data = await response.data

    if (response.status === 201) {
      setEmail('')
      setPassword('')

      const { uuid, name } = data.user

      router.push({
        pathname: `/user/${uuid}`,
        query: {
          name: name,
          login: true,
          update: false
        }
      })
    } else {
      alert(data)
    }
  }

  return (
    <form
      className="flex flex-col gap-4 w-full p-4 sm:w-80 sm:px-6"
      onSubmit={handleSubmit}
    >
      <Input name="Email" type="email" value={email} setValue={setEmail} />
      <Input
        name="Senha"
        type="password"
        value={password}
        setValue={setPassword}
      />

      <button
        className="bg-red-600 block py-2 mt-4 rounded font-bold hover:bg-red-500 transition"
        type="submit"
      >
        Enviar
      </button>
    </form>
  )
}
