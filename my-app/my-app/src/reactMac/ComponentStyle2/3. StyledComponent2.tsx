import styled, { css } from 'styled-components';

const Button = styled.button<{ $primary?: boolean }>`
    background : transparent;
    border-radius : 3px;
    border : 2px solid #bf4f74;
    color : #333;
    marign : 0.1em;
    padding : 0.25em, 1em;
    ${(props) => 
        props.$primary && 
        css`
            background : #bf4f74;
            color : #fff
        `
    }
`;

export default function StyledComponent2() {
  return <Button $primary>Click Me</Button>
}

/*
    동적인 스타일
    = 'style-components'를 사용할 때 컴포넌트의 속성을 사용해 동적으로 스타일을 지정할 수도 있다
    = 이 기능을 사용하면 상태에 따라 버튼 색을 다르게 표시하는 등 조건에 따른 스타일 변경이 매우 간편하다
    ex)
        import styled, { css } from 'styled-components';
        - css 함수를 불러온다
        - 'css 함수'는 'style-components'에서 조건부 스타일을 작성할 때 사용하는 함수
        - 태그드 템플릿 리터럴을 지원하면 동적 스타일을 정의할 때 자주 사용


        const Button = styled.button<{ $primary?: boolean }>`
        - 타입스크립트에서는 스타일 컴포넌트에 전달할 props의 타입을 명시


            background : transparent;
            border-radius : 3px;
            border : 2px solid #bf4f74;
            color : #333;
            marign : 0.1em;
            padding : 0.25em, 1em;


            ${(props) => 
                props.$primary && 
                css`
                    background : #bf4f74;
                    color : #fff
                `}
            - 스타일 컴포넌트에 전달된 props는 ${(props) => css``} 형식으로 사용하고 조건에 따라 새로운 스타일을 동적으로 추가할 수 있다
            - 'true'일 경우 즉 '$primary' 속성이 전달되면 버튼의 배경색과 글자색을 변경


        `;

        export default function StyledComponent2() {
        return <Button $primary>Click Me</Button>
        - 'Button' 스타일 컴포넌트로 '$primary' 속성을 전달
        - <Button $primary> 처럼 속성 이름만 적으면 타입스크립트에서는 $primary={true}와 동일하게 처리
        - 반면에 $primary={false}를 명시하거나 아예 속성을 생략하면 스타일이 적용되지 않는다
        }


        Tip) 트래지언트 props
        - '$primary'처럼 변수 안에 $기호를 붙여 전달하는 방식을 '트래지언트 props'라고 한다
        - 이 기능은 'styled-components' 5.1 버전부터 도입
        - $ 기호로 시작하는 props는 컴포넌트의 스타일링에는 사용되지만 최종 DOM에는 전달되지 않기 때문에 콘솔에 불필요한 경고가 뜨거나 예기치 않은 동작이 발생하는 것을 방지할 수 있다

    = 'styled-components'는 자바스크립트와 스타일을 유기적으로 결합해 동적인 스타일링을 매우 간편하게 구현할 수 있게 도와준다

        Tip)
            - 2025년 3월 'styled-components' 공식 팀은 새로운 기능 개발을 중단하고 버스 수정 및 보안 패치와 같은 유지보수에만 집중하겠다고 발표
            - 따라서 현재 시점에서는 새로운 프로젝트에 'styled-components'를 사용하는 것은 권장하지 않는다 
*/