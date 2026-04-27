// interface Products{
//     id: number;
//     name: string;
//     cxzc: () => void;
//     zxc: () => void;
// }

// export default function UserCard({name, cxzc, zxc} : Products) {
//   return (
//     <>
//         <button onClick={cxzc}>{name}
//             <h1>{name}</h1>

//             <button onClick={(e) => { e.stopPropagation(); zxc(); }}>삭제</button>
//         </button>
//     </>
//   )
// }

interface Props{
  id : number,
  name : string,
  casc : () => void,
  dasdas : () => void,
}

import React from 'react'

export default function UserCard({ id, name, casc, dasdas } : Props) {
  return (
    <div>
      <button onClick={casc}>{name}</button>
      <h1>{name}</h1>

      <button onClick={(e) => { e.stopPropagation(); dasdas(); }}>삭제</button>
    </div>
  )
}

