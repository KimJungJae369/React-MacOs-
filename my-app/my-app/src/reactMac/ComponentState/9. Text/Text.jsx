// import {useState} from 'react'

// export default function Text() {
//   const [user, setUser] = useState(null); // 로그아웃 상태
//   const [name, setName] = useState(''); // 입력값 초기화 

//   const login = () => {
//     if(name.trim() === '') return;
//     // 공백일 경우 로그인 하지 않음

//     setUser({name}); // 사용자 상태 업데이트
//     setName(''); // 로그인 후 입력값 초기화
//   }

//   const logout = () => setUser(null);
//   // 사용자 상태 초기화 : 다시 로그아웃 상태
//   return (
//     <div>
//       {user ? ( // 삼항 연산자 사용 
//         <div>
//           <p>{user.name}님 환영합니다</p>
//           <button onClick={logout}>logout</button>
//         </div>
//       ) : (
//         <div>
//           <input 
//             type="text" 
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder='이름 입력'
//             />
//             <button onClick={login}>login</button>
//         </div>
//       )}
//     </div>
//   )
// }



import {useState} from 'react'

export default function Text() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');

  const login = () => {
    if(name.trim() === '') return;
    setUser({name});
    setName('');
  }

  const logout = () => setUser(null);
  return (
    <div>
      {user ? (
          <div>
            <p>{user.name}님 환영합니다</p>
            <button onClick={logout}>logout</button>
          </div>
      ) : (
          <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='이름입력'/>
            <button onClick={login}>login</button>
          </div>
      )}
    </div>
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
