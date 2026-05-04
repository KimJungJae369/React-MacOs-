// import React from 'react'

// export default function Count({ count, increment } : {count : number, increment : () => void}) {
//   return (
//     <div>
//         <p>Count: {count}</p>
//         <button onClick={increment}>증감</button>
//     </div>
//   )
// }


import React from 'react'

export default function Count({ count, increment } : {count : number, increment : () => void}) {
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={increment}>증감</button>
    </div>
  )
}
