import React from 'react'

interface UserCardProps {
  name: string
  age: number
  isOnline: boolean
}

export function UserCard({ name, age, isOnline }: UserCardProps) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <div>이름: {name}</div>
      <div>나이: {age}</div>
      <div>
        상태: {isOnline ? "🟢 온라인" : "🔴 오프라인"}
      </div>
    </div>
  )
}