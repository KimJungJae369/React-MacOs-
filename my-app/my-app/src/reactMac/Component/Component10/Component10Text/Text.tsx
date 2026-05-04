import React from 'react'
import { UserCard } from './UserCard'

interface User {
  name: string
  age: number
  isOnline: boolean
}

export default function App() {
  const users: User[] = [
    { name: '홍길동', age: 31, isOnline: true },
    { name: '김철수', age: 25, isOnline: false }
  ]

  return (
    <>
      {users.map((user) => (
        <UserCard key={user.name} {...user} />
      ))}
    </>
  )
}
