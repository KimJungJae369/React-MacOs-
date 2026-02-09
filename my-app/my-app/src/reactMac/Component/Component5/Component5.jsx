// import Footer from "./Footer";
// import Header from "./Header";
// import Main from "./Main";


// export default function Component5() {
//     return (
//         <>
//             <Header />
//             <Main />
//             <Footer />
//         </>
//     )
// }

import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default function Component5() {
  return (
    <>
        <Header />
        <Main />
        <Footer />
    </>
  )
}





/*
    <컴포넌트 추가>
    = 리액트 애플리케이션은 여러 컴포넌트 파일이 결합되어 하나의 화면을 구성
    = 따라서 화면에 여러 컴포넌트를 함께 렌더링하는 방법을 익히는 것이 중요하다


    (1) Header.jsx 파일 생성
    function  Header(){
        return(
            <h1>Header</h1>
        )
    }
    export default Header;
    = 'Header'라는 함수형 컴포넌트를 정의
    = 'return'문 안에 JSX를 작성해 화면에 표시할 내용을 구성

    (2) 'Main'라는 함수형 컴포넌트를 정의
    function  Main(){
        return(
            <h1>Main</h1>
        )
    }
    export default Main;

    (3)'Footer'라는 함수형 컴포넌트를 정의
    function  Footer(){
        return(
            <h1>Footer</h1>
        )
    }
    export default Footer;


    (4) App.jsx 파일 생성
    export default function App(){
        return(
            <>
                <Header />
                <Main />
                <Footer />
            </>
        )
    }
    = 'App 컴포넌트(출력 컴포넌트)' 내부에서 Header 컴포넌트를 HTMl 태그처럼 '<Header />' 형태로 사용
    = 리액트는 이 태그를 보고 Header 컴포넌트를 실행하고 그 결과로 생성된 JSX를 App 컴포넌트의 JSX에 포함시켜 렌더링
    = 애플리케이션을 실행하면 App 컴포넌트가 return 문 안의 JSX를 웹 브라우저에 출력
    = '<Header />'는 Header 컴포넌트를 실행
    = '<Main />'는 Main 컴포넌트를 실행
    = '<Footer />'는 Footer 컴포넌트를 실행
    = 컴포넌트를 한 파일에 정의하고 사용할 수도 있다
    = 하지만 여러 컴포넌트를 한꺼번에 한 파일에서 작성하면 코드가 복잡해지고 관리하기 어려워진다

    <컴포넌트 분리>
    = 실무에서 컴포넌트를 파일 단위로 분리해 관리하는 것이 일반적
    = 이렇게 하면 각 컴포넌트를 독립적으로 관리할 수 있어 코드의 가독성과 유지보수성이 높아진다
    = 리액트에서는 다른 파일에 있는 컴포넌트를 사용할 때 'import'문을 사용해 불러온다
        ex) import 컴포넌트_이름 from '파일경로'
        - '상대경로'는 현재 파일이 있는 위치를 기준으로 다른 파일의 위치를 나타내는 방식
        - 즉 'import' 문법을 사용하는 컴포넌트 파일의 위치를 기준으로 불러오는 컴포넌트 파일의 위치를 작성
        - './'는 현재 파일이 위치한 폴더를 나타낸다
        - '../'는 상위 폴더(한 단계 위)를 나타낸다

        Tip) 리액트 애플리케이션에서 컴포넌트 파일을 보통 src 폴더 하위에 작성
        Tip) import문 자동 완성 : fn + control + space : 단 파일이 열려 있어야 한다

*/