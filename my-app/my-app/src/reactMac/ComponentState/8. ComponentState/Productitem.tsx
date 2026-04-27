// import React from "react";

// interface Props {
//     id: number;
//     name: string;
//     onDelete: (id: number) => void;
//     }

//     export default function Productitem({ id, name, onDelete }: Props) {
//     return (
//         <div>
//             <span>{name} : </span>

//             <button onClick={() => onDelete(id)}>
//                 삭제
//             </button>
//         </div>
//     );
// }


import React from 'react'

interface Props {
    id: number;
    name: string;
    onDelete: (id: number) => void;
}

export default function Productitem({ id, name, onDelete }: Props) {
  return (
    <div>
        <span>{name} : </span>
        <button onClick={() => onDelete(id)}>
            삭제
        </button>
    </div>
  )
}

