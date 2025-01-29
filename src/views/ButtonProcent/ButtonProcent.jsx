
export default function ButtonProcent({ children, addProcent, ...props }) {
    return (
        <button onClick={() => { addProcent() }}>{children}</button>
    )
}
