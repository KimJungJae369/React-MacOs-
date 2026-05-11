// import React from 'react'

// interface UserProps{
//   title : string
//   children : React.ReactNode
// }

// export default function User({ title, children }: UserProps) {
//   return (
//     <div
//       style={{
//         border : '1px solid #333',
//         margin : 10,
//         padding : 20,
//         textAlign : 'center'
//       }}
//     >
//       <h1>{title}</h1>
//       <p>{children}</p>
//     </div>
//   )
// }

type UserProps = {
  children : React.ReactNode
  title : string
}

import React from 'react'

export default function User(props : UserProps) {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  )
}
