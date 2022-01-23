import Link from 'next/link'
import Title from '../components/Title'
import UpdateForm from '../components/UpdateForm'

export default function update() {
  return (
    <>
      <div className="bg-slate-800 grid sm:grid-cols-2 justify-items-center items-center py-8 px-2 rounded">
        <Title update={true} />
        <UpdateForm />
      </div>
      <Link href="/">
        <a className="block text-center mt-4 text-xs text-teal-500 hover:text-teal-400 transition">
          Crie sua conta
        </a>
      </Link>
      <Link href="/login">
        <a className="block text-center mt-4 text-xs text-teal-500 hover:text-teal-400 transition">
          Faça seu login
        </a>
      </Link>
    </>
  )
}
