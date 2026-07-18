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

type ConutButtonType = {
  incerement : () => void,
  decrement : () => void,
  reset : () => void,
}

export default function ConutButton({incerement, decrement, reset} : ConutButtonType) {
  return (
    <div>
      <button onClick={incerement}>incerement</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}
