import React from 'react'

type userProps = {
  children : React.ReactNode,
  title : string,
  footer : string
}

export default function User({children, title, footer} : userProps) {
  return (
    <>
      <div className='card'>
        <h2>{title}</h2>

        <div className='content'>
          {children}
        </div>

        <footer>{footer}</footer>
      </div>
    </>
  )
}
