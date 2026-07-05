import Children from './Children'

// export default function GlobalStyle() {
//   return (
//     <div>
//       <button className='btn'>GlobalStyle Button</button>
//       <Children />
//     </div>
//   )
// }

export default function GlobalStyle() {
  return (
    <div>
      <button className='btn'>GlobalStyle Button</button>
      <Children />
    </div>
  )
}


/*
    글로벌 스타일 
    = '.css'확장자를 가진 파일에 CSS 코드를 작성하고 이를 컴포넌트에서 import해 적용하는 방식이다 일반적으로 '외부 스타일'이라고 한다
    = 예를 들어 src 폴더 안에 부모 파일을 만들고 버튼에 적용할 스타일 파일을 만든다
    = 작성이 간편하고 전통적인 방식이라 친숙 할 수 있지만 한가지 중요한 특징이 있다 
    = CSS 파일을 한 번 임포트하면 해당 스타일은 전체 애플리케이션에 '전역으로 적용'된다
*/
