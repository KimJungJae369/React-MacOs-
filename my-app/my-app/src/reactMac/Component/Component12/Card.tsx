// import React from 'react'

// interface CardProps {
//   children : React.ReactNode
//   title : string
//   onAction : () => void
// }

// export default function Card({ children, title, onAction }: CardProps) {
//   return (
//     <div style={{ border: '1px solid #fff', padding: '10px', marginBottom: '10px' }}>
//       <h2>{title}</h2>
//       <p>{children}</p>
//       <button onClick={onAction}>Action</button>
//     </div>
//   )
// }

type CardProps = {
  children : React.ReactNode
  title : string 
  onAction : () => void;
}

import React, { Children } from 'react'

export default function Card(props : CardProps) {
  return (
    <div 
    style={{
      border: '1px solid #ccc',order: '1px solid #fff', padding: '10px', marginBottom: '10px' 
    }}>
      <h2>{props.title}</h2>
      <h3>{props.children}</h3>
      <button onClick={props.onAction}>Action</button>
    </div>
  )
}
