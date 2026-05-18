import {useState} from 'react'

// export default function ConutButton({incerement, decrement, reset} : {incerement : () => void, decrement : () => void, reset : () => void}) {
//   return (
//     <div>
//         <button onClick={incerement}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//         <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

export default function ConutButton({incerement, decrement, reset} : {incerement : () => void, decrement : () => void, reset : () => void}) {
  return (
    <>
      <button onClick={incerement}>incerement</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </>
  )
}

