import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin'

export default function VanillaExtract() {
    piugins : [react(), vanillaExtractPlugin()]
  return (
    <div>dd</div>
  )
}

/*
    vanilla-extract
    = 타입스크립트 기반의 CSS-in-JS 라이브러리로 가장 큰 특징은 '제로 런타입'
        제로 런타임 : 애플리케이션이 실행될 때 스타일을 생성하거나 적용하는 데 추가 비용이 전혀 발생하지 않는다는 의미
    = styled-components, emotion과 같은 CSS-in-JS 라이브러리는 자바스크립트 코드 안에 스타일을 작성하고 이를 실행 중에 동적으로 처리
    = 이 방식은 개발이 편리하지만 자바스크립트가 실행될 때마다 스타일이 생성되어 초기 렌더링이  느려질 수 있고 스타일이 많을수록 성능 저하 가능성이 증가
    = 'vanilla-extract'는 개발자가 작성한 스타일이 '빌드 타임(내가 작성한 코드를 브라우저가 실행할 수 있는 파일로 미리 변환하는 시간)'에 정적 CSS 파일로 변환
    = 웹 브라우저는 이 CSS 파일을 일반 CSS처럼 정적으로 로딩
    = 따라서 실행 중에 스타일을 생성하지 않으므로 런타임 비용 없습니다 
    = 그래서 초기 렌더링 속도가 빠르고 CSS 파일이 정적이므로 웹 브라우저 '캐싱(한 번 만든 결과를 저장해 두었다가 다음에 다시 적용하는 것)'이 가능하다
    = 타입 스크립트 기반으로 정적 타입 검사 및 자동 완성을 지원

    1. 설치
    = 패키지를 2번에 나눠 설치
    = '@vanilla-extract/css'는 프로젝트에서 실제 사용할 스타일 관련 기능을 제공하므로 일반 의존성에 설치
    = '@vanilla-extract/vite-plugin'은 Vite에서 빌드 시 스타일 파일을 처리하는 역할을 하므로 개발 의존성에 설치
        - npm install @vanilla-extract/css
        - npm install --save-dev @vanilla-extract/vite-plugin
    = 설치를 완료하면 package.json 파일의 dependencies와 devDependencies 항목에 vanilla-extract가 추가
    = vanilla-extract를 사용하려면 Vite 설정 파일인 vite.config.ts에 플러그인을 추가해야 한다
*/
