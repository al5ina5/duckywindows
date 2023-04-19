type InputType = {
    autoFocus?: boolean,
    type?: string,
    label: string,
    placeholder: string,
    value: any,
    onChange: any
}

export default function Input({ type = 'text', autoFocus, label, placeholder, value, onChange }: InputType) {
    return <div className="space-y-1">
        <p className="text-base opacity-50 font-medium">{label}</p>
        <input className="border p-2 w-full rounded" {...{ autoFocus, type, label, placeholder, value, onChange }} />
    </div>
}