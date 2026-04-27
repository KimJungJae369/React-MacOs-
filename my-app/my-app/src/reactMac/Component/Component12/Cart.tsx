import React from 'react'

interface CardProps {
  title: string
  children: React.ReactNode
}

export default function Cart({ title, children }: CardProps) {
  return (
    <div style={{ border: '1px solid gray', padding: '16px', margin: '12px' }}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  )
}