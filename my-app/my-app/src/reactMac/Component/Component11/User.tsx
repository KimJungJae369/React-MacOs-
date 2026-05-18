// import React from 'react'
// type userProps = {
//   children : React.ReactNode
// }
// export default function User({children} : userProps) {
//     const count = React.Children.count(children);
//   return (
//     <div className='box'>
//       {children}
//       <span>{count}개</span>
//     </div>
//   )
// }


import React from 'react'
type userProps = {
  children : React.ReactNode
}

export default function User({children} : userProps) {
  const count = React.Children.count(children);
  return (
    <div>
      <div className='box'>
        {children}
        <span>{count} 개</span>
      </div>
    </div>
  )
}
