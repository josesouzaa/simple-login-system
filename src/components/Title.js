export default function Title({ login = false, update = false }) {
  return (
    <div className="flex flex-col space-y-4 max-w-xs p-4 border-b border-slate-500 sm:border-0">
      <h1
        className="text-3xl sm:text-5xl font-semibold"
        style={{ lineHeight: 1.2 }}
      >
        {login && 'Faça seu login para continuar'}
        {!login && !update && 'Crie sua conta para continuar'}
        {update && 'Atualize a senha para continuar'}
      </h1>
      <p className="text-sm">MyFlix: maior catálogo de filmes do Brasil!</p>
    </div>
  )
}
