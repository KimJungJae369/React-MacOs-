import { container, button, active } from './App.css.ts'

export default function App() {
  const isActive = true;
  return (
    <div className={container}>
      <h1>Vanilla Extract</h1>
      <button className={`${button} ${isActive && active}`}>Click me</button>
    </div>
  )
}

/*
    3. 동적 스타일
    = 'vanilla-extract' 라이브러리는 런타임에서 CSS를 생성하지는 않지만 조건에 따라 'classsName'을 선택적으로 할당하는 방식으로 동적 스타일을 적용할 수 있다
    = 자바스크립트의 '삼항 연산자(조건? 값1 : 값2)' 또는 'AND 연산자(조건 && 값)'를 사용하면 특정 상태에 따라 클래스를 추가하거나 제외할 수 있다
*/
