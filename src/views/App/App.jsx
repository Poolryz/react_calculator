
import './App.scss'
import WindowComponent from '../WindowComponent/WindowComponent.jsx'
import MenuComponent from '../WindowComponent/MenuComponent.jsx'
import { useState } from 'react'

function App() {
  const [first, setFirst] = useState('0')
  const [second, setSecond] = useState('0');
  const [functionCalculator, setFunctionCalculator] = useState('');
  const [result, setResult] = useState('');

  function resultCalc() {
    const func = functionCalculator
    const a = first
    const b = second
    switch (func) {
      case '+':
        setResult(+a + +b);
        break
      case '-':
        setResult(+a - +b);
        break
      case '*':
        setResult(+a * +b);
        break
      case '/':
        setResult(+a / +b);
        break



    }
    setFirst('')
    setSecond('')
    setFunctionCalculator('')
  }
  function getSecondNum(num) {
    const prev = second;
    const a = num
    if (prev === '0' && !!a) {
      setSecond(a)
    } else if (prev !== '0') {
      setSecond(() => { return prev + a })
    }
  }

  function getFirstNum(num) {
    setResult('')
    if (!functionCalculator) {
      const prev = first;
      const a = num
      if (prev === '0' && !!a) {
        setFirst(a)
      }
      else if (prev !== '0') {
        setFirst(() => { return prev + a })
      }
    } else {
      getSecondNum(num)
    }
  }

  function getDot(dot) {
    if (!first.includes('.') && !functionCalculator) {
      setFirst(() => { return first + dot })
    } else if (!second.includes('.')) {
      setSecond(() => { return second + dot })
    }
  }

  function getFunc(func) {
    setFunctionCalculator(func)
  }

  function delNum() {
    if (!functionCalculator) {
      if (first != '0') {
        setFirst((prev) => {
          let arr = prev.slice(0, -1)
          return arr
        })
      }
    } else {
      if (second != '0') {
        setSecond((prev) => {
          let arr = prev.slice(0, -1)
          return arr
        })
      }
    }
  }
  function delAllNum() {
    setFirst("0")
    setSecond('0')
    setResult('')
    setFunctionCalculator('')
  }
  function addSign() {
    if (!functionCalculator) {
      if (first != '0') {
        if (!first.includes('-')) {
          setFirst((prev) => {
            let arr = '-' + prev
            return arr
          })
        } else {
          setFirst((prev) => {
            let arr = prev.slice(1)
            return arr
          })
        }
      }
    } else {
      if (second != '0') {
        if (!second.includes('-')) {
          setSecond((prev) => {
            let arr = '-' + prev
            return arr
          })
        } else {
          setSecond((prev) => {
            let arr = prev.slice(1)
            return arr
          })
        }
      }
    }
  }
  function addProcent() {
    if (functionCalculator) {
      if (second != 0) {
        setSecond((prev) => {
          let num = first / 100 * prev
          return num
        })
      }
    }
  }


  return (
    <div className="calculator">
      <WindowComponent result={result} second={second} functionCalculator={functionCalculator} first={first} />
      <MenuComponent addProcent={addProcent} addSign={addSign} delAllNum={delAllNum} delNum={delNum} resultCalc={resultCalc} getFunc={getFunc} getFirstNum={getFirstNum} getDot={getDot} />
    </div>
  )
}

export default App
