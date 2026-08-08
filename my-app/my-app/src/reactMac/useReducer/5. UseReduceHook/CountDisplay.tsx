import {useState} from 'react'

// export default function CountDisplay({count} : {count : number}) {
//   return (
//     <>
//         <h1>Count : {count}</h1>
//     </>
//   )
// }

export default function CountDisplay({count} : {count : number}) {
  return (
    <div>
      <h1>count : {count}</h1>
    </div>
  )
}
