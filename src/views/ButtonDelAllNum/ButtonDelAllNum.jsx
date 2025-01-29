
export default function ButtonDelAllNum({ children, delAllNum, ...props }) {
    return (
        <button onClick={() => { delAllNum() }}>{children}</button>
    )
}
