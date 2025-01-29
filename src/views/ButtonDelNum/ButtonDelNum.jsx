export default function ButtonDelNum({ children, delNum, ...props }) {
    return (
        <button onClick={() => { delNum() }}>{children}</button>
    )
}
