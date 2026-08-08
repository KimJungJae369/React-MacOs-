import { container, button } from './App.css.ts'

export default function App() {
  return (
    <div className={container}>
      <h1>Vanilla Extract</h1>
      <button className={button}>Click me</button>
    </div>
  )
}

/*
    2. 기본 사용법
    = 'vailla-extract' 라이브러리는 '.css.ts' 확장자를 가진 파일에 CSS를 작성
    = 이 파일 안에 '@vanilla-extract/css' 패키지에서 제공하는 style() 함수를 사용 CSS 클래스를 정의
    = 각 style() 함수는 CSS 속성을 객체 형태로 작서하면 반환된 클래스 이름이 변수에 저장
    = 이 변수들을 'className'에 할당하면 해당 스타일이 적용
    = '가상 선택자'도 객체 속성 키로 지정할 수 있다
    = 'container, button' 변수는 각각 클래스 이름 문자열을 담고 있다 이를 'JSX'의 'className' 속성에 할당하면 해당 스타일이 HTML 요소에 적용

    설치 요약:
        1) 프로젝트 루트에서 다음 패키지 설치
            npm install --save-dev @vanilla-extract/css @vanilla-extract/vite-plugin

        2) Vite 설정(vite.config.js)에 아래 플러그인 추가
            import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
            plugins: [react(), vanillaExtractPlugin()]
            
        3) 이 파일에서 './App.css.ts'를 import하여 vanilla-extract 스타일 사용
*/
