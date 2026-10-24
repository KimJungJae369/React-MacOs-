import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function TailwindMerge() {
  const buttonClass = twMerge(
    'bg-transparent text-red-500 rounded-md border-2 border-blue-500 m-[0.1em] py-[1em]',
    'bg-rose-500 text-white'
  )

  return (
    <>
        <button
            className={twMerge(
                'bg-transparent text-[red] rounded-[3px] border-2 border-[blue] m-[0.1em] py-[1em]', 'bg-rose-500 text-red'
            )}
        >
            Click Me
        </button>
    </>
  )
}

/*
    Tailwind-Merge
    = 'Tailwind CSS' 클래스명을 충돌 없이 병합할 수 있게 도와주는 '유틸리티 라이브러리'
        유틸리티 라이브러리 
        - 개발할 때 자주 사용하는 기능들을 모아 놓은 코드 모음
        - 즉 자주 사용하는 기능을 미리 만들어 놓아서 필요할 때 가져다 쓰는 도구 모음
    
    = 특히 동적으로 클래스명을 조합해야 할 때 매우 유용
        < twMerge() >
        - 여러 Tailwind CSS 클래스를 결합할 때 중복되거나 충돌되는 클래스가 있으면 마지막 클래스를 우선시해 중복을 제거

        < twJoin() >
        - 여러 클래스를 단순히 문자열로 연결하며 중복되거나 충돌되는 클래스도 그대로 유지
    
    = 두 함수는 중복 클래스명을 제거하느냐의 차이만 있을 뿐 나머지 작동 방식은 동일
    = Tailwind CSS를 사용하다 보면 같은 속성 그룹의 클래스가 중복되는 경우가 많기 때문에 일반적으로 중복을 제거해주는 'twMerge()' 함수를 사용하는 것이 더 편리

        <Tailwind-Merge 설치>
        1. npm i tailwind-merge
        2. import { twMerge } from 'tailwind-merge'; -> 불러오기

    = 'twMerge()' 함수는 기본적으로 전달된 클래스명을 하나로 결합
    = 이때 중복 속성이 있는 경우 나중에 등장한 클래스를 우선 적용
    = 전달하는 인자의 개수에는 제한이 없다
    = 'twMerge()' 함수는 같은 속성 그훕의 클래스가 중복되었을 때 가장 마지막에 등장한 클래스만 남기고 나머지를 제거
    = 'AND(&&) 연산자'나 '삼항 연산자'를 사용하면 조간에 따라 클래스를 동적으로 조합
*/
