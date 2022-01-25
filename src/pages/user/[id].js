import Link from 'next/link'

export default function User({ name, login, update }) {
  console.log(login, update)
  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      {login === 'false' && update === 'false' && (
        <h1 className="text-4xl">
          Parabéns <span className="text-teal-500">{name}</span>, você conseguiu
          criar sua conta!!
        </h1>
      )}

      {login === 'true' && update === 'false' && (
        <h1 className="text-4xl">
          Parabéns <span className="text-teal-500">{name}</span>, você conseguiu
          realizar o login!!
        </h1>
      )}

      {update === 'true' && login === 'false' && (
        <h1 className="text-4xl text-center">
          Parabéns <span className="text-teal-500">{name}</span>, você conseguiu
          atualizar sua senha!!
        </h1>
      )}

      <Link href="/">
        <a className="text-teal-500 hover:text-teal-400 transition">
          Voltar para home
        </a>
      </Link>
    </div>
  )
}

export async function getServerSideProps(req) {
  const { name, login, update } = req.query

  return {
    props: {
      name,
      login,
      update
    }
  }
}
