// type userType = {
//   title : string,
//   children : React.ReactNode,
//   border : string
// }

// export default function User({title, children, border} : userType) {
//   return (
//     <>
//       <h1 style={{border}}>{title}</h1>
//       <p>{children}</p>
//     </>
//   )
// }


import React from 'react'

type userprops = {
  children : React.ReactNode,
  title : string,
  border : string
}

export default function User({children, title, border} : userprops) {
  return (
    <div>
      <h1 style={{border}}>{title}</h1>
      <p>{children}</p>
    </div>
  )
}
