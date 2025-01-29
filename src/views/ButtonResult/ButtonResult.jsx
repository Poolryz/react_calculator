import React from 'react'

export default function ButtonResult({ children, resultCalc, ...props }) {
    return (
        <button onClick={() => { resultCalc() }}>{children}</button>
    )
}
