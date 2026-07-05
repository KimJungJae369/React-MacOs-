type userType = {
  title : string,
  children : React.ReactNode,
  border : string
}

export default function User({title, children, border} : userType) {
  return (
    <>
      <h1 style={{border}}>{title}</h1>
      <p>{children}</p>
    </>
  )
}
