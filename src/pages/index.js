import Title from '../components/Title'
import Link from 'next/link'
import RegistrationForm from '../components/RegistrationForm'

export default function Home() {
  return (
    <>
      <div className="bg-slate-800 grid sm:grid-cols-2 justify-items-center items-center py-8 px-2 rounded">
        <Title />
        <RegistrationForm />
      </div>
      <Link href="/login">
        <a className="block text-center mt-4 text-xs text-teal-500 hover:text-teal-400 transition">
          Se já possui conta, faça login
        </a>
      </Link>
    </>
  )
}
