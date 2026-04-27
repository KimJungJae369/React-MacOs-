interface User {
  id: number;
  name: string;
  age: number;
  isOnline: boolean;
}

// 1. UserCard 컴포넌트
function UserCard({ name, age, isOnline } : User) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <p>
        상태: {isOnline ? "🟢 온라인" : "🔴 오프라인"}
      </p>
    </div>
  );
}