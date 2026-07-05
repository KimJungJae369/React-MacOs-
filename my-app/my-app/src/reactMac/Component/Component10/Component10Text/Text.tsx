// import React from 'react';

// type headerProps = {
//   title : string,
// }

// function Header(props : headerProps){
//   return (
//     <>
//       {props.title}
//     </>
//   )
// }

// type listsProps = {
//   id : number,
//   name : string,
//   age : number
// }

// type listProps = {
//   lists : listsProps[];
// }

// function Section({ lists }: listProps){
//   return (
//     <ul>
//       {lists.map((item) => (
//         <li key={item.id}>
//           {item.name} : {item.age}
//         </li>
//       ))}
//     </ul>
//   )
// }

// type footerProps = {
//   title2 : string
// }

// function Footer(props : footerProps){
//   return(
//     <>
//       {props.title2}
//     </>
//   )
// }


type headerType = {
  title : string
}

function Header(props : headerType){
  return <h1>{props.title}</h1>
}

type subList = {
  id : number,
  name : string,
  age : number
}

type sectionType = {
  lists : subList[];
}

function Section({lists} : sectionType){
  return(
    <ul>
      {lists.map((item, index) => (
        <li key={index}>{item.name} : {item.age}</li>
      ))}
    </ul>
  )
}

type footerType = {
  footers : string,
}

function Footer({footers} : footerType){
  return <h2>{footers}</h2>
}

export default function Text() {
  const list = [
    { id: 1, name: 'Jone', age: 20 },
    { id: 2, name: 'Hund', age: 25 },
    { id: 3, name: 'Jena', age: 24 },
  ]

  return (
    <div style={{ border: '1px solid #fff' }}>
      <Header title="Header"/>
      <Section lists={list}/>
      <Footer footers='Footer'/>
    </div>
  )
}