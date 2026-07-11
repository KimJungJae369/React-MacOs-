import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #bf4f74;
    color: #bf4f74;
    margin: 0.1em;
    padding: 0.25em 1em;
`

export default function StyledComponent() {
  return <Button>Click Me</Button>
}

/*
    Styled-Component
    - 'CSS-in-JS' 방식의 대표적인 라이브러리 중 하나 
    - 자바스크립트 코드 안에 스타일이 적용된 컴포넌트(스타일 컴포넌트)를 생성하는 방식
    - 자바스크립트를 사용해 CSS를 정의하고 해당 스타일이 적용된 컴포넌트를 바로 만들어 사용할 수 있다

    1. 설치 : npm install styled-components
    - 버전 정보는 설치 시점에 따라 다를다

    2. 기본 사용법 : import styled from 'styled-components'
    - 'styled-component'를 사용하려면 먼저 라이브러리에서 styled 객체를 불러와야 한다
    - styled 객페는 HTML 태그 이름에 해당하는 함수를 제공해 이 함수를 사용하면 스타일 컴포넌트를 만들 수 있다
        ex) 태그드 템플릿 리터럴
            const Button = styled.button`
                                background: transparent;
                                border-radius: 3px;
                                border: 2px solid #bf4f74;
                                color: #bf4f74;
                                margin: 0.1em;
                                padding: 0.25em 1em;
                            `
    - 'styled.button`코드`' 형식이 조금 생소할 수 있는데 이는 '태그드 템플릿 리터럴'이라는 문법
    - 'styled-component'는 템플릿 리터럴 안에 작성한 CSS 코드를 읽어 해당 스타일이 적용된 컴포넌트를 생성해 반환
    - 즉 'styled-button`코드`'을 호출하면 스타일이 적용된 버튼 컴포넌트가 만들어진다
        ex) 
            import styled from 'styled-components'

            const Button = styled.button`
                    background : reansparent;
                    border-radius : 3px;
                    border : 2px soild #bf4f74;
                    color : #bf4f74;
                    margin : 0.1em;
                    padding : 0.25em 1em;
                `
            = 'styled' 객체는 부모컴포넌트 함수 바깥에서 정의
            = 이처럼 컴포넌트 바깥에서 스타일 컴포넌트를 정의하면 성능상 유리하기 때문에 일반적으로 이 방식을 사용

            export default function StyledComponent() {
                return <Button>Click Me</Button>
                = 생성한 'Button' 컴포넌트를 부모 컴포넌트에서 렌더링하면 스타일이 적용된 버튼이 화면에 표시
            }


            Tip) 태그드 템플릿 리터럴
            - 템플릿 리터럴 앞에 함수를 붙여 문자열을 처리할 수 있는 자바스크립트 문법
            - 함수는 템플릿 리터럴의 '문자열'과 '${}'로 감싼 표현식을 분리된 배열 형태로 전달받아 이를 바탕으로 원하는 방식으로 문자열을 가공할 수 있다
                ex)
                    function tagFunciton(strings, ...values){
                        console.log(strings); -> 문자열 배열
                        console.log(values); -> 삽입된 표현식 값
                    }

                    const name = 'Jonh';
                    const age = 25;
                    tagFunciton `Hello my name is ${name} and I am ${age} years old`;

                    출력결과 : ['Hello my name is', 'and I am ', 'years old']
                            ['Jonh', 25];
*/
