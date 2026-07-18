import "./Text.css";
import UserCard from "./UserCard";

export default function Text() {
  return (
    <div className="container">
      <UserCard
        name="김철수"
        job="프론트엔드 개발자"
        isVip={true}
      />

      <UserCard
        name="이영희"
        job="백엔드 개발자"
        isVip={false}
      />
    </div>
  );
}