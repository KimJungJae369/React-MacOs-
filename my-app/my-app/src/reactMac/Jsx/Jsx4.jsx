import React from 'react'

const Jsx4 = () => {
    return (
        <div>
            {/* 
                1. 인라인 스타일은 객체로 지정하기
                = 태그 안에 직접 스타일을 작성하는 방식을 '인라인 스타일'이라고 합니다.
                    ex) <h1 style="color: red; background-color: yellow;"> Hello </h1>

                = JSX에서는 style 속성에 문자열이 아닌 자바스크립트 객체를 할당
                = css 속성명은 반드시 '카멜 케이스'로 작성
                    ex)
                        <h1
                            style={
                                color : 'red',
                                backgroundColor : 'yellow',
,                            }
                        >
                            Style Text
                        </h1>

                2. 중괄호 안에 주석 작성
                = 프로그래밍에서는 코드에 설명을 추가하거나 특정 부분을 임시로 비활성화할 때 '주석'을 사용
            */}
        </div>
    )
}

export default Jsx4