interface Products{
    id: number;
    name: string;
    cxzc: () => void;
    zxc: () => void;
}

export default function UserCard({name, cxzc, zxc} : Products) {
  return (
    <>
        <button onClick={cxzc}>{name}
            <h1>{name}</h1>

            <button onClick={(e) => { e.stopPropagation(); zxc(); }}>삭제</button>
        </button>
    </>
  )
}
