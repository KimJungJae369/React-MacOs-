import React, { useState } from "react";
import Productitem from "./8. ComponentState/Productitem";

    const initialProducts = [
        { id: 1, name: "무선 키보드" },
        { id: 2, name: "게이밍 마우스" },
        { id: 3, name: "모니터 받침대" },
    ];

    export default function Text() {
    const [products, setProducts] = useState(initialProducts);

    const handleDelete = (id) => {
        setProducts(prev => prev.filter(item => item.id !== id));
        // prev : 이전 상태값
        // 삭제 버튼 누른 애만 빼고 다시 그려줘
        // 현재 기준 상태로 삭제를 버튼을 누른 값은 안보이고 나머지는 보이게 상태를 변경하는 함수
        // 현재 상태에서 삭제한 값만 제외하고 나머지를 보이게 상태를 변경하는 함수
    };

    return (
        <div>
        {products.map(product => (
            <Productitem
            key={product.id}
            id={product.id}
            name={product.name}
            onDelete={handleDelete}
            />
        ))}
        </div>
    );
}