import {useState} from 'react'

// export default function CountDisplay({count} : {count : number}) {
//   return (
//     <>
//         <h1>Count : {count}</h1>
//     </>
//   )
// }

type countDispatchType = {
  count : number
}

export default function CountDisplay({count} : countDispatchType) {
  return (
    <div>
      <h1>Count : {count}</h1>
    </div>
  )
}
