type userType = {
  title : string,
  price : number,
  backgroundColor : string,
  children : React.ReactNode
}

export default function User({title, price, backgroundColor, children} : userType) {
  return (
    <div>
      <div style={{backgroundColor, padding : 20}}>
          <h1>{title}</h1>
          <p>가격 : {price.toLocaleString()}원</p>
          {children}
      </div>
    </div>
  )
}
