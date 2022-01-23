export default function Input({ name, type = 'text', value, setValue }) {
  return (
    <div className="flex flex-col">
      <label htmlFor="">{name}</label>
      <input
        type={type}
        className="px-2 py-1 rounded text-gray-700"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}
