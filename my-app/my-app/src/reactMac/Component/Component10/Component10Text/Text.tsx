type userheader = {
  title : string;
}

function Header(props : userheader){
  return(
    <h4>{props.title}</h4>
  )
}

type listType = {
  id : number,
  name : string,
  age : number
}

type userSection = {
  lists : listType[];
}

function Section(props : userSection){
  return(
    <>
      {props.lists.map((item : listType, index : number) => (
        <ul key={index}>
          <li>{item.name} : {item.age}</li>
        </ul>
      ))}
    </>
  )
}

type userFooter = {
  title2 : string;
}


function Footer(props : userFooter){
  return(
    <footer>{props.title2}</footer>
  )
}

export default function Text() {
  const list = [
    {id : 1, name : 'Jone', age : 20},
    {id : 2, name : 'Hund', age : 25},
    {id : 3, name : 'Jena', age : 24},
  ]
  return (
    <div style={{border : '1px solid #fff'}}>
      <Header title ='Hello Header'/>
      <Section lists={list}/>
      <Footer title2 ='By Footer'/>
    </div>
  )
}
