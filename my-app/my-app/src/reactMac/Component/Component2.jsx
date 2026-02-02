// import {Component} from 'react';

// class Component2 extends Component{
//     render(){
//         return <h1>Hello, class Component</h1>
//     }
// }

import React, { Component } from 'react'

export default class Component2 extends Component {
  render() {
    return (
      <div>Component2</div>
    )
  }
}


/*
    Class Component(클래스 컴포넌트)
    = 'ES6'에서 도입된 클래스 문법을 사용해 컴포넌트를 정의
    = 리액트의 'Component' 클래스를 상속받아 생성하며 반드시 'render()' 메서드를 포함해야 한다
    = 'render()' 메서드 안에서 컴포넌트가 화면에 보여줄 UI를 반환한다
    = 단축 문법 : rcc

        [형식]
            (1) import {Component} from 'react';
            = 'react' 패키지에서 'Component' 클래스를 불러온다
            = 'Component'는 리액트에서 제공하는 기본 컴포넌트 클래스이다
            = 이 클래스를 상속하면 리액트 컴포넌트를 클래스 문법으로 정의할 수 있다

            (2) class 컴포넌트_이름 extends Component{
            = 'extends' 키워드로 'Component' 클래스를 상속받는다
            = 이렇게 하면 App 컴포넌트는 리액트의 기본 컴포넌트 기능을 사용할 수 있다

                
                (3) render(){   // JSX를 반환하는 'render()' 메서드
                    return(
                        <h1>
                            Hellow Class Component
                        </h1>
                    )
                }
                = 'render()' 메서드는 클래스 컴포넌트에서 꼭 필요하다
                = 이 메소드는 화면에 보여줄 UI 요소를 반환하는 역할
                = JSX 문법으로 작성한 '<h1>Hellow Class Component</h1>'를 반환하므로 웹 브라우저 화면에는 해당 텍스트가 표시
            }
            (4) export default 컴포넌트_이름;
            = APP 컴포넌트를 다른 파일에서 사용할 수 있도록 내보내고 그러면 다른 곳에서 App 컴포넌트를 불러와 사용할 수 있다
            = 예를 들어 'main.tsx' 파일에서는 'import App from, "./App"'과 같은 형태로 임포트해서 렌더링할 수 있다
*/