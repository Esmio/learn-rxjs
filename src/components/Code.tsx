import React from "react"

interface CodeProps {
  lines: string[]
  currentLine?: number
}

const Code: React.FC<CodeProps> = props => {
  const { lines, currentLine } = props

  return (
    <div className="code">
      {lines.map((code, index) => (
        <div
          key={index}
          className={currentLine === index ? "line active" : "line"}
        >
          <span className="no">{index + 1}</span>
          <pre className="code">{code}</pre>
        </div>
      ))}
    </div>
  )
}

export default Code