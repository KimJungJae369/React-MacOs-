import React from 'react'
import UserCart from './UserCart'

export default function Text() {
  return (
    <>
        <UserCart name = "React" age = {25}/>
        <UserCart name = "Vue" age = {19}/>
    </>
  )
}
