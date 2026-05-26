import {useState} from 'react'

export default function Text() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  }
  return (
    <>
      <button onClick={handleClick}>{` 좋아요 : ${count}`}</button>
    </>
  )
}



/*
  trim()
  = 문자열의 양 끝(앞과 뒤)에 있는 공백(스페이스, 탭, 줄바꿈 등)을 싹 제거해 주는 메서드

  target vs currentTarge
  1. target: 이벤트를 직접 일으킨 요소 (진짜 범인) / 즉 이벤트가 어디서(어떤 태그에서) 일어났는지 그 주인공을 지목하는 것
  - target: <button> (직접 누른 것)

  2. currentTarget: 이벤트 리스너가 실제로 붙어 있는 요소 (보안 구역)
  - currentTarget: <div> (이벤트가 걸려 있는 곳)

  예시: <div> 안에 <button>이 있는데, <div>에 클릭 이벤트를 걸어두고 <button>을 눌렀다면?

  삼항 연산자
  = 이거 아니면 저거"를 결정해야 하는 상황(로그인 vs 로그아웃, 켜짐 vs 꺼짐)에서는 삼항 연산자가 최고의 스위치
  = 화면 스위치("로그인 했니?"처럼 조건에 따라 화면을 통째로 갈아끼우고 싶을 때 사용하는 리액트 전용 스위치)
*/
