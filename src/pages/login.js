import Link from 'next/link'
import React from 'react'
import LoginForm from '../components/LoginForm'
import Title from '../components/Title'

export default function login() {
  return (
    <>
      <div className="bg-slate-800 grid sm:grid-cols-2 justify-items-center items-center py-8 px-2 rounded">
        <Title login={true} />
        <LoginForm />
      </div>
      <Link href="/">
        <a className="block text-center mt-4 text-xs text-teal-500 hover:text-teal-400 transition">
          Se ainda não possui conta, crie aqui
        </a>
      </Link>
      <Link href="/update">
        <a className="block text-center mt-4 text-xs text-teal-500 hover:text-teal-400 transition">
          Se esqueceu sua senha, atualize-a aqui
        </a>
      </Link>
    </>
  )
}
