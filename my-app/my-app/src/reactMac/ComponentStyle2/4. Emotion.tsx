// 1. 기본 emotion 스타일
// import { css } from '@emotion/css'

// export default function Emotion() {
//   return (
//     <div>
//         <button
//             className={css`
//                 background : transparent;
//                 border-radius : 3px;
//                 border : 2px solid #fff;
//                 color : #fff;
//                 margin : 0.1em;
//                 padding : 0.25em 1em;
//             `}
//         >Click Me</button>
//     </div>
//   )
// }






// 2. 동적 emotion 스타일
import { css } from '@emotion/css'

export default function Emotion() {
    const isAction = true;
  return (
    <div>
        <button
            className={css`
                background : ${isAction ? 'red' : 'transparent'};
                border-radius : 3px;
                border : 2px solid #fff;
                color : ${isAction ? 'blue' : '#fff'};
                margin : 0.1em;
                padding : 0.25em 1em;
            `}
        >Click Me</button>
    </div>
  )
}
/*
    emotion
    = 'emotion'은 현대 웹 개발에서 널리 사용하는 강력하고 유연한 'CSS-in-JS' 라이브러리
    = 스타일링의 유연성과 성능을 극대화할 수 있도록 설계되었으며 간결한 API를 제공해 개발자가 컴포넌트 기반 애플리케이션에서 직관적으로 스타일링을 정의하고 관리할 수 있다
        API : 다른 프로그램(서버)과 데이터를 주고 받는 통로
        React : 화면 만들기 -> API : 상품 정보 가져오기 -> DB(서버) : 실제 상품 정보 가져오기

    1. 설치 : npm i @emotion/css
    = 설치를 완료하면 'package.json' 파일의 'dependencies' 항목에 'emotion'이 추가된다
        ex)
            "dependencies": {
            "@emotion/css": "^11.13.5",
            ...}

    2. 기본 사용법
    = 'emotion' 라이브러리를 사용하려면 '@emotion/css' 패키지에서 css 함수를 불러와야 한다
    = 이 함수는 태그드 템플릿 문자열을 지원하므로 일반적인 CSS처럼 템플릿 리터럴 안에 스타일을 작성
    = css 함수 전달 받은 스타일 정보를 바탕으로 고유한 클래스 이름을 생성하고 해당 이름을 문자열로 반환
    = 이 클래스는 이름은 HTML 요소의 className 속성에 설정해 사용할 수 있다
        transparent : 투명한 배경
        ex)
            import { css } from '@emotion/css'

            export default function Emotion() {
                return (
                    <div>
                        <button
                            className={css`
                                background : transparent;
                                border-radius : 3px;
                                border : 2px solid #fff;
                                color : #fff;
                                margin : 0.1em;
                                padding : 0.25em 1em;
                            `}
                        >Click Me</button>
                    </div>
                )
            }
            - <button> 태그는 'className' 속성을 통해 css 함수를 호출
            - 템플릿 리터럴로 작성한 스타일은 'emotion'이 자동으로 클래스 이름을 생성해 적용

    3. 동적 스타일
    = 'emotion' 라이브러리는 템플릿 문자열 안에 자바스크립트 표현식을 사용할 수 있어서 삼항 연산자를 활용해 간단하게 동적 스타일을 구현할 수 있다
        ex)
            import { css } from '@emotion/css'

            export default function Emotion() {
                const isAction = true;
                return (
                    <div>
                        <button
                            className={css`
                                background : ${isAction ? 'red' : 'transparent'};
                                border-radius : 3px;
                                border : 2px solid #fff;
                                color : ${isAction ? 'blue' : '#fff'};
                                margin : 0.1em;
                                padding : 0.25em 1em;
                            `}
                        >Click Me</button>
                    </div>
                )
            }
            - 삼항 연산자를 활용해 상태 값에 따라 다른 스타일을 쉽게 적용할 수 있다
*/
