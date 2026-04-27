/*
  FormEvent<HTMLFormElement> : 폼 요소에서 발생하는 이벤트를 나타내는 타입입니다.
  HTMLFormElement : HTML의 <form> 요소를 나타내는 타입입니다. 
  폼 요소에서 발생하는 이벤트 객체의 타입을 지정할 때 사용됩니다.
*/

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  function handleCapturn(){
    console.log("캡처링 단계");
  }

  function handleClick(){
    console.log('카드 클릭됨');
  }
  return(
    <button onClickCapture={handleCapturn} onClick={handleClick}>
      <h2>{title}</h2>
      {children}
    </button>
  )
}

function ActionButton({label, onAction} : {label : string; onAction: () => void}) {
  function handleClick(e : React.MouseEvent<HTMLButtonElement>){
    e.stopPropagation();
    console.log(`버튼 클릭됨`);
    onAction();
  }
  return (
    <button onClick={handleClick}>{label}</button>
  )
}

export default function Text() {
  const handleClick = (name: string) => {
    console.log(name);
  }
  return (
    <>
  <Card title="이벤트 테스트">
    <ActionButton label="클릭1" onAction={() => handleClick("클릭1")} />
    <ActionButton label="클릭2" onAction={() => handleClick("클릭2")} />
  </Card>
    </>
  );
}
