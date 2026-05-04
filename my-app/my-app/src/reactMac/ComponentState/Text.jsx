import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  const plusButton = () => {
    setCount(prev => (prev < 10 ? prev + 1 : prev))
  }

  const minusButton = () => {
    setCount(prev => (prev > -10 ? prev - 1 : prev))
  }

  const reset = () => {
    setCount(0)
  }

  const getMessage = () => {
    if (count > 0) return '양수입니다'
    if (count < 0) return '음수입니다'
    return '숫자입력해주세요'
  }

  return (
    <>
      <h1>현재 값: {count}</h1>
      <h2>{getMessage()}</h2>

      <button onClick={plusButton} disabled={count === 10}>
        +
      </button>

      <button onClick={minusButton} disabled={count === -10}>
        -
      </button>

      <button onClick={reset}>Reset</button>
    </>
  )
}