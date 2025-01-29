export default function ButtonNum({ children, getFirstNum, ...props }) {

    return (
        <button onClick={() => { getFirstNum(children) }}>{children}</button>
    )
}