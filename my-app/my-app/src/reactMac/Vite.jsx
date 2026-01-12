import React from 'react'

const Vite = () => {
    return (
        <>
            {/* 
                // 리액트 애플리케이션 만들기 
                = 리액트 프로젝트는 처음부터 모든 파일과 설정을 직접 만드는 것이 아니라 기본 구조와 '미리 설정된 템플릿(보일러플레이트)'을 사용해 빠르게 시작하는 것이 일반적
                    <CRA(Create React App)>: 페이스북에서 제공하는 공식 도구로, 리액트 애플리케이션을 빠르게 시작할 수 있도록 도와준다
                    <Vite>: 빠르고 가벼운 빌드 도구로, 최신 프론트엔드 개발에 적합하고 리액트와 같은 라이브러리와 쉽게 통합 가능

                // 터미널 명령어 종류
                <npm creacte vite@latest.>
                npm creacte : npm을 사용해 프로젝트 생성 도구를 실행하는 명령어
                vite@latest : 최신 버전의 Vite 프로젝트를 생성
                .(마침표) : 현재 폴더에 프로젝트를 생성하겠다는 뜻
                

                <npm creacte vite@latest. 오류>
                1. npm notice Run install -g npm@9.6.7 to update! : 업데이트
                = npm 최신 버전에서 create 명령어를 사용하려면, npm 6버전 이상이 필요.
                = npm의 새 버전이 나왔다는 안내로 강제적인 오류가 아니다
                = 최신 기능을 사용하거나 오류를 줄이기 위해 npm 버전을 업데이트하는 것이 좋다

                2. npm ERR! notsup Required: node@^14.0.0 || ^16.0.0 || >=18.0.0 / npm ERR! notsup Actual: node@12.22.12 : 최신버전 설치
                = npm 버전 11.1.0을 설치하려면 Node.js 버전 14 이상이 필요
                = 현재 설치된 Node.js 버전이 12.22.12로, 요구사항을 충족하지 못해 발생하는 오류
                = Node.js를 최신 버전으로 업데이트해야 한다

                <설치 완료후>
                <npm install>
                = 프로젝트에 필요한 의존성 패키지 설치 명령어
                
                <npm run dev>
                = 개발 서버를 실행해 리액트 애플리케이션을 웹 브라우저에서 확인할 수 있도록 한다

                <정상작동>
                = 'Local : http://localhost:5173/' 주소를 웹 브라우저에서 열면 리액트 애플리케이션이 실행되는 것을 확인할 수 있다

                <npm run dev 오류>
                - npm ERR! Missing script: "dev"
                npm ERR!
                npm ERR! To see a list of scripts, run:
                npm ERR!   npm run
                npm ERR! A complete log of this run can be found in: // 오류로그 -
                = package.json 파일에 "dev" 스크립트가 정의되어 있지 않아서 발생하는 오류
                = 이 파일에는 npm run dev 명령어와 연결된 스크립트 정보가 담겨 있다 따라서 터미널의 현재 위치가 'vite-react' 폴더 밖이라면 npm은 해당 스크립트를 찾을 수 없기 때문에 오류가 발생한다
                
                -Tip : 프로젝트를 빠르게 시작할 수 있도록 기본 구조와 설정을 자동으로 생성하는 과정을 '스캐폴딩'이라고 한다-
                
            */}
        </>
    )
}

export default Vite