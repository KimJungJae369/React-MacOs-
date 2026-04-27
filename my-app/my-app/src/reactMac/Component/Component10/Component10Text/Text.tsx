import React from "react";

interface User {
  id: number;
  name: string;
  age: number;
  isOnline: boolean;
}

// 1. UserCard 컴포넌트
function UserCard({ name, age, isOnline }: User) {
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

// 2. UserList 컴포넌트
function UserList({ users }: { users: User[] }) {
  // User[] : User 타입의 객체들이 담긴 배열을 의미
  return (
    <div>
      {users.map((user) => (
        <UserCard
          key={user.id} // 고유한 id를 key로 사용하여 리스트 렌더링 최적화
          name={user.name} // UserCard 컴포넌트에 name, age, isOnline props 전달
          age={user.age} // UserCard 컴포넌트에 name, age, isOnline props 전달
          isOnline={user.isOnline} // UserCard 컴포넌트에 name, age, isOnline props 전달
        />
      ))}
    </div>
  );
}

// 3. App 컴포넌트
function App() {
  const users = [
    { id: 1, name: "민수", age: 25, isOnline: true },
    { id: 2, name: "지은", age: 28, isOnline: false },
    { id: 3, name: "현우", age: 22, isOnline: true },
  ];

  return (
    <div>
      <h1>유저 목록</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;