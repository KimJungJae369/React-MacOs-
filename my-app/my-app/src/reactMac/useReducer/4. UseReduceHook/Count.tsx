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

// type CountProps = {
//   count : number,
//   setCount : Dispatch<SetStateAction<number>>
// }
 
// export default function Count({count, setCount} : CountProps) {
//   return (
//     <div>
//         <h1>Count :  {count}</h1>
//         <button onClick={() => setCount(count => count + 1)}>click</button>
//     </div>
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

type countProps = {
  count : number,
  increment : () => void;
}

export default function Count({count, increment} : countProps) {
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increment}>click</button>
    </div>
  )
}
























