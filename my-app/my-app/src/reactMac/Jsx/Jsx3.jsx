import React from 'react'

const Jsx3 = () => {
    return (
        <>
            {/* 
                1. 모든 태그 닫기
                = html에서는 일부 태그를 닫지 않아도 아무 문제없이 작동한다
                    ex) <br>, <hr>, <img> 등 : 이런 태그를 '빈 태그'라고 한다

                = 하지만 "JSX"에서는 빈 태그라도 '<br />' 처럼 '자체 종료 태그(self- closing tag)'로 작성해야 한다
                = 모든 태그는 반드시 열고 닫는 구조를 가져야 하며 빈 태그도 예외가 아니다
                    ex) <br />, <img />, <hr /> 등
                
                = 이 부분에서 실수하기 쉬우니 주의해야한다

                2. 태그 속성은 camelCase(카멜 케이스)로 사용
                = JXS에서는 속성명을 자바스크립트 변수명처럼 '카멜 케이스'로 작성해야 한다
                    TIP) '카멜 케이스(camelCase)'란?
                    = 이름을 붙일 때 첫 번째 단어, 첫글자를 소문자 두 번째 단어부터는 첫 글자를 대문자로 사용

                = class는 자바스크립트에서 클래스를 선언할 때 사용하는 예약어이므로 JSX에서는 그 대신 'className'을 사용
                    ex) HTML과 JSX의 속성명 차이
                        class -> className
                        tabindex -> tabIndex
                        onclick -> onClick
                        maxlength -> maxLength
                        for -> htmlFor

                3. 표현식은 중괄호 안에서 사용
                = JSX에서는 중괄호({}) 안에 자바스크립트 표현식을 넣어 사용할 수 있다
                = JSX 내에서 자바스크립트 표혁식을 사용하면 동적 데이터를 손쉽게 렌더링하거나 조건에 따라 다른 컴포넌트를 출력할 수 있다
            */}
            <h1>
                {/* 자바스크립트 표현식 */}
                {/* result : {10 + 8} */}
                {/* result : {10 + 20} */}

                {/* 삼항연산자  */}
                {/* {10 > 20 && <h1>10이 더 크다</h1>}
                {10 < 20 && <h1>20이 더 크다</h1>} */}

                {10 > 20 && <h1>20dl ej zmek</h1>}
            </h1>
        </>
    )
}

export default Jsx3