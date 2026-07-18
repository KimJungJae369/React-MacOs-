import {useState} from 'react'

// export default function CountDisplay({count} : {count : number}) {
//   return (
//     <>
//         <h1>Count : {count}</h1>
//     </>
//   )
// }

type CountDisplayType = {
  count : number,
}

export default function CountDisplay({count} : CountDisplayType) {
  return (
    <div>
      <h1>Count : {count}</h1>
    </div>
  )
}
