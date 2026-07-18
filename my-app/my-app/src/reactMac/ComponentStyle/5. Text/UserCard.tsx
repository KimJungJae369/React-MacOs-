import classNames from "classnames";
import styles from "./UserCard.module.css";

type UserCardProps = {
  name: string;
  job: string;
  isVip: boolean;
};

export default function UserCard({
  name,
  job,
  isVip,
}: UserCardProps) {
  return (
    <div
      className={classNames(styles.card, {
        [styles.vip]: isVip,
        [styles.normal]: !isVip,
      })}
      style={{
        border: "2px solid black",
      }}
    >
      <h2>{name}</h2>

      <p>{job}</p>

      <span>
        {isVip ? "VIP 회원" : "일반 회원"}
      </span>
    </div>
  );
}