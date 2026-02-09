// import React from 'react'

// export default function Button({onFive} : {onFive : () => void}) {
//     return (
//         <button onClick={onFive}>click</button>
//     )
// }

import React from 'react'

export default function Button({dasop} : {dasop : ()=> void}) {
  return (
    <>
      <button onClick={dasop}>click</button>
    </>
  )
}
