

export default function ButtonFunc({ children, getFunc, ...props }) {
    return (
        <button onClick={() => { getFunc(children) }}>{children}</button>
    )
}
