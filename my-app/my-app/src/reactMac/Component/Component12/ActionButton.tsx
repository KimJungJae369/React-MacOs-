import React from 'react'

interface ActionButtonProps {
  label: string
  onAction: () => void
}

export default function ActionButton({ label, onAction }: ActionButtonProps) {
  return (
    <button onClick={onAction} style={{ marginRight: '8px' }}>
      {label}
    </button>
  )
}