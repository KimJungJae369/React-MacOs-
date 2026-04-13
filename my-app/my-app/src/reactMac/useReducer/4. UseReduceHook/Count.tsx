import React, { Dispatch, SetStateAction } from 'react'

// 첫 번째 방법
// export default function Count({count, setCount} : {count : number, setCount : Dispatch<SetStateAction<number>>}) {
//   return (
//     <>
//         <h1>Count : {count}</h1>
//         <button onClick={() => setCount((count) => count + 1)}>증가</button>
//     </>
//   )
// }

// export default function Count({count, setCount} : {count : number, setCount : Dispatch<SetStateAction<number>>}) {
//   return (
//     <>
//       <h1>Count : {count}</h1>
//       <button onClick={() => setCount((count) => count + 1)}>증가</button>
//       <button onClick={() => setCount((count) => count - 1)}>감소</button>
//       <button onClick={() => setCount(0)}>초기화</button>
//     </>
//   )
// }




// 두 번째 방법
// export default function Count({count, increment} : {count : number, increment : () => void}) {
//   return (
//     <>
//         <h1>Count : {count}</h1>
//         <button onClick={increment}>증가</button>
//     </>
//   )
// }

export default function Count({count, increment, decrement, reset} : {count : number, increment : () => void, decrement : () => void, reset : () => void}) {
  return (
    <>
        <h1>Count : {count}</h1>
        <button onClick={increment}>증가</button>
        <button onClick={decrement}>감소</button>
        <button onClick={reset}>초기화</button>
    </>
  )
}



