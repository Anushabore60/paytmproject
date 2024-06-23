export function Button({label,onClick}){
    return <div className="pt-8 pb-2">
        <button onClick={onClick} type="button" className="w-full px-6 py-2 bg-sky-900 rounded-lg font-bold">
        {label}
        </button>
    </div>
}