import { StrictMode } from "react"
import {createRoot} from "react-dom/client"
import'./index.css'

export default function TailwindCssStyle() {
  return (
    <div>
        <button
            style={{
                background : 'transparent',
                border : '2px solid #4CAF50',
                color : '#4CAF50',
                padding : '10px 24px',
                cursor : 'pointer'

            }}
        >일반 버튼</button>
        <br /><br /><br />
        <button
            className="bg-transparent border-2 border-red-500 text-red-500 py-2 px-4 cursor-pointer"
        >
            TailwindCss 버튼
        </button>
    </div>
  )
}


/*
    TailwindCss로 스타일링하기
    = TailwindCss는 유틸리티 퍼스트 스타일링 철학을 따르는 프레임워크 중에서 가장 인기 있는 라이브러리
    = '유틸리티 퍼스트'란 작고 재사용 가능한 '유틸리티 클래스'를 조합해 스타일을 만드는 방식
        유틸리티 클래스 : 여러 곳에서 공통으로 사용할 수 있는 기능들을 모아 놓은 클래스, 즉 재사용 가능한 클래스
    
    = 각 유틸리티 클래스는 보통 하나의 CSS 속성과 일대일로 대응하며 이 클래스들을 class 속성에 나열해 원하는 스타일을 만들 수 있다
    = 이런 방식 덕분에 CSS 파일을 따로 작성하지 않고도 HTML이나 JSX 코드 안에서 클래스만으로 스타일을 적용할 수 있다
    = TailwindCss는 '반응형 디자인'을 지원하며, 다양한 화면 크기에 맞춰 스타일을 조정할 수 있는 유틸리티 클래스도 제공한다
    = 또한 TailwindCss는 '커스터마이징'이 가능하여 프로젝트의 요구사항에 맞게 색상, 폰트, 간격 등의 디자인 시스템을 정의할 수 있다

    1. 설치
    = Vite 환경에서는 '@tailwindcss/vite' 플러그인이 자동으로 처리하기 때문에 따로 설치하지 않아도 된다 
        - npm i -D tailwindcss -> @tailwindcss/vite

    2. 기본 사용법
    = TailwindCss는 유틸리티 클래스를 HTML 요소에 직접 적용해 스타일을 설정하는 방식

        <TailwindCss 클래스와 대응하는 CSS 속성>
            bg-transparent = background-color: transparent;
            bg-black = background-color: #000;
            bg-white = background-color: #fff;
            bg-gray-500 = background-color: #6b7280;
            text-red-500 = color: #ef4444;
            ...

    = TailwindCss를 처음 사용할 때 클래스명을 매칭하기 어려울 수 있다 이럴 때는 TailwindCss 공식 문서(https://tailwindcss.com/docs)에서
    제공하는 '유틸리티 클래스 검색' 기능을 활용
    = 원하는 CSS 속성을 검색하면 대응하는 클래스명을 쉽게 찾을 수 있다
*/