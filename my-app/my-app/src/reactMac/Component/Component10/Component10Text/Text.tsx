type headerType = {
  title : string,
}

function Header({title} : headerType){
  return <h1>{title}</h1>
}

type secitonSub = {
  id : number,
  name : string,
  age : number
}

type sectionType = {
  lists : secitonSub[];
}

function Section({lists} : sectionType){
  return(
    <ol>
      {lists.map((item) => (
        <li key={item.id}>
          {item.name} : {item.age}
        </li>
      ))}
    </ol>
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

/*
  화살표 함수에서 ()와 {}의 의미 차이
  () 👉 "계산 끝! 결과값 여기 있어!" (단답형 / 바로 반환)
  {} 👉 "잠깐만, 해야 할 일이 좀 더 있어!" (장문형 / 변수 선언, if문 처리, console.log 출력 등 작업 후 마지막에 return
  - '{}'에서 retur이 마지막에 꼭 있어야 한다 '내 작업은 여기까지고, 최종 결과물은 이거야'라는 느낌
*/