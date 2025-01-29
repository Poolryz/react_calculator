
export default function ButtonDot({ children, getDot, ...props }) {
    return (
        <button onClick={() => { getDot(children) }}>{children}</button>
    )
}
