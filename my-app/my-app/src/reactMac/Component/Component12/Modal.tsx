// type modalType = {
//     title : string,
//     backgroundColor : string,
//     buttonText : string,
//     onButtonClick : () => void,
//     children : React.ReactNode
// }

// export default function Modal({
//     title,
//     backgroundColor,
//     buttonText,
//     onButtonClick,
//     children
// } : modalType) {
//   return (
//     <div style={{backgroundColor, padding : '20px', marginBottom : '20px'}}>
//         <h2>{title}</h2>
//         {children}
//         <button onClick={onButtonClick}>{buttonText}</button>
//     </div>
//   )
// }


import React from 'react'

type modalProps = {
  children : React.ReactNode,
  title : string,
  backgroundColor : string,
  buttonText : string,
  onButtonClick : () => void
}

export default function Modal({children, title, backgroundColor, buttonText, onButtonClick} : modalProps) {
  return (
  <div>
    <div style={{backgroundColor, 'padding' : '20px', 'marginBottom' : '20px'}}>
      <h2>{title}</h2>
      {children}
      <button onClick={onButtonClick}>{buttonText}</button>
    </div>
  </div>
  )
}
