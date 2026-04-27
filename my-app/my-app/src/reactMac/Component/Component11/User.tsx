import React from 'react'
interface UserProps {
    children: React.ReactNode
}

export default function User({ children }: UserProps) {
  return (
    <>
        <div style={{border : '2px solid black', padding : '20px', margin : '20px'}}>
            {children}
        </div>
    </>
  )
}
