export default function WindowComponent({ first, functionCalculator, second, result, ...props }) {
    return (
        <h1>{result} {first} {functionCalculator} {functionCalculator ? second : ''}</h1>
    )
}