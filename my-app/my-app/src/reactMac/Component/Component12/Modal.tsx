import React from 'react'

type modalProps = {
    children : React.ReactNode
    title : string,
    onClose : () => void;
}

export default function Modal({onClose, title, children} : modalProps) {
  return (
        <div className='modal'>
            <h2>{title}</h2>

            <div className='content'>
                {children}
            </div>

            <button onClick={onClose}>닫기</button>
        </div>
  )
}
