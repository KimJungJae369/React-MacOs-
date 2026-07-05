type modalType = {
    title : string,
    backgroundColor : string,
    buttonText : string,
    onButtonClick : () => void,
    children : React.ReactNode
}

export default function Modal({
    title,
    backgroundColor,
    buttonText,
    onButtonClick,
    children
} : modalType) {
  return (
    <div style={{backgroundColor, padding : '20px', marginBottom : '20px'}}>
        <h2>{title}</h2>
        {children}
        <button onClick={onButtonClick}>{buttonText}</button>
    </div>
  )
}
