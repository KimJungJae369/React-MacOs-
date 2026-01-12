// function Header(){
//   return(
//     <header>
//         <h1>My Website</h1>
//         <Nav />
//     </header>
//   )
// }
// // header 컴포넌트 : 로고와 네비게이션

// function Nav(){
//   return(
//     <nav>
//       Home | About | Services | Content
//     </nav>
//   )
// }
// // Navigatine 컴포넌트 : 웹 사이트 메뉴

// function Article(){
//   return(
//     <article>
//       <h2>Main Article</h2>
//     </article>
//   )
// }
// // Article 컴포넌트 : 주요 콘텐츠

// function Section(){
//   return(
//     <h3>More Detail</h3>
//   )
// }
// // Section 컴포넌트 : 세부 컨텐츠

// function Aside(){
//   return(
//     <aside>
//       <h3>Related links</h3>
//     </aside>
//   )
// }
// // Aside 컴포넌트 : 광고, 추가 정보

// function Footer(){
//   return(
//     <footer>
//       <p>&copy; 2025 My Wedsite All right reseved.</p>
//     </footer>
//   )
// }
// // Footer 컴포넌트 : 저작권 정보, 연락처

function Header(){
  return(
    <header>
      <h1>Header</h1>
      <Nav />
    </header>
  )
}

function Nav(){
  return(
    <nav>
      <h2>Home | About | Services | Content</h2>
    </nav>
  )
}

function Article(){
  return(
    <article>
      <h3>Article</h3>
    </article>
  )
}

function Section(){
  return(
    <section>
      <h4>Section</h4>
    </section>
  )
}

function Aside(){
  return(
    <aside>
      <h4>Aside</h4>
    </aside>
  )
}

function Footer(){
  return(
    <footer>
      <h4>Footer</h4>
    </footer> 
  )
}

const Component1 = () => {
  return (
    <>
      {/* <Header/>
      <Nav/>
      <Article/>
      <Section/>
      <Aside/>
      <Footer/> */}


        <Header />
        <Article />
        <Section />
        <Aside />
        <Footer />
    </>
  )
}
// 마지막 : 모든 컨포넌트를 조합해 전체 페이지 구성

export default Component1
/*
  Component(컴포넌트)
  = UI를 구성하는 독립적이며 재사용 가능한 작은 단위를 의미
  = '리액트'는 이러한 컴포넌트를 조합해 하나의 애플리케이션을 완성
  = 웹 페이지 구조를 'header, nav, article, section, aside, footer'와 같이 각 기능에 따라 나눌 경우 이들을 각각 컴포넌트 구현한 후 App 컴포넌트에서 모두 조합하면 하나의 웹 페이지가 완성

    <웹 페이지 추상화>
    header : 로고, 내비게이션 바
    nav : 웹사이트 메뉴
    article : 주요 콘텐츠
    section : 세부 콘텐츠
    aside : 광고, 추가 정보
    footer : 저작권 정보, 연락처

  <컴포넌트 단위로 애플리케이션을 구성하면 이점>
  1) 재사용 가능
  = 컴포넌트 여러 위치에서 반복적으로 사용
  = 에를 들어 헤더와 푸터는 대부분의 페이지에서 공통으로 사용한다 따라서 이를 컴포넌트로 분리해두면 중복 코드 없이 필요한 곳에서 쉽게 불러와서 사용할 수 있다

  2) 유지보수 용이
  = 컴포넌트를 작게 나누면 각 컴포넌트를 독립적으로 관리할 수 있어 유지보수가 편리
  = 오류가 발생했을 때 어느 컴포넌트에서 문제가 생겼는지 빠르게 파악할 수 있다
  = 수정할 때 다른 부분에 영향을 주지 않아 안정적인 개발이 가능하다

  3) 로직 분리 가능
  = 사용자 인테페이스(UI)와 사용자 경험(UX) 관력 로직을 컴포넌트별로 분리할 수 있다
  = 예를 들어 데이터를 처리하는 비지니스 로직 컴포넌트와 화면을 구성하는 UI 컴포넌트를 분리하면 코드의 가독성과 유지보수성이 높아진다

  4) 복잡한 상태 관리 기능
  = 컴포넌트를 가능한 한 작은 단위로 나누면 상태 관리가 더 명확해지고 효율적인 렌더링이 가능
  = 리액트에서는 상태가 변경되면 자동으로 화면(UI)이 리렌더링되는데 컴포넌트를 세분하면 변경된 부분만 선택적으로 렌더링할 수 있어 성능을 최적화
  = 상태 변화가 잦은 UI영역을 별도의 컴포넌트로 분리하면 불필요한 렌더링을 줄여 성능 저하를 방지

  Tip
    - '너무 세분하면 관리가 어렵고 너무 뭉뚱그리면 재사용성과 유지보수성이 떨어진다'
    - 따라서 목적에 맞게 적절한 수준으로 나누는 것이 가장 중요하다
*/