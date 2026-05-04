import React from 'react'
interface UserProps {
    title : string,
    children : React.ReactNode
}

export default function User({ title, children }: UserProps) {
  return (
    <>
      <h1 style={{border : '1px solid #333', padding: '12px', marginBottom : '10px'}}>{title}</h1>
      {children}
    </>
  )
}
