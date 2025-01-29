
export default function ButtonSign({ children, addSign, ...props }) {
    return (
        <button onClick={addSign}>{children}</button>
    )
}
