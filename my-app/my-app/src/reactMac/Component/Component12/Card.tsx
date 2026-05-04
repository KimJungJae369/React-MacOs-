import React from 'react'
interface CardProps {
    title: string
    onAction: () => void
    children: React.ReactNode
}

export function Card({ title, onAction, children }: CardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div>{children}</div>
      <button onClick={onAction}>클릭</button>
    </div>
  )
}
