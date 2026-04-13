import React from "react";

interface ButtonProps {
  id: number;
  name: string;
  onDelete: (id: number) => void;
}

export default function Button({ id, name, onDelete }: ButtonProps) {
  return (
    <div>
      <span>{name}</span>
      <button onClick={() => onDelete(id)}>삭제</button>
    </div>
  );
}