import styles from "./ProductCard.module.css";
import classNames from "classnames";
import "./ProductCard.css";

export default function ProductCard() {
  return (
    <div className="product-card">
      <h1
        style={{
          fontSize: "24px",
          textAlign: "center",
        }}
      >
        맥북 프로
      </h1>

      <div>
        <p>M4 Pro</p>
        <p>24GB RAM</p>
        <p>512GB SSD</p>
      </div>

      <p className={styles.price}>2,790,000원</p>

      <button className={classNames("button", "primary")}>
        장바구니
      </button>
    </div>
  );
}