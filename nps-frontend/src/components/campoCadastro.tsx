export default function campoCadastro(titulo: string, onChange: (valor: string) => void) {
    return (
        <div className="mb-4">
            <label className="block text-sm font-bold mb-2">{titulo}</label>
            <input
                type="text"
                onChange={e => onChange(e.target.value)}
                className="border p-2 rounded w-full"
            />
        </div>
    )
}
