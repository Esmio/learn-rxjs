import React from "react"

interface CursorProps {
  left: number
  top: number
  visible: boolean
}

const Cursor: React.FC<CursorProps> = props => {
  const { top, left, visible } = props

  return (
    <div
      className="cursor"
      style={{ left, top, visibility: visible ? undefined : "hidden" }}
    />
  )
}

export default Cursor