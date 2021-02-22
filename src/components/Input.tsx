import React from 'react';

interface InputProps {
  onChange: (e: string) => void;
  onKeyDown: (e: KeyboardEvent) => void;
  onKeyUp: (e: KeyboardEvent) => void;
  onCompositionStart: (e: CompositionEvent) => void;
  onCompositionEnd: (e: CompositionEvent) => void;
  left: number;
  top: number;
  value?: string;
}

const Input: React.FC<InputProps> = ({ onChange, onKeyDown, onKeyUp, onCompositionStart, onCompositionEnd, left, top, value }) => {
  const handleChange = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
    onChange(e.currentTarget.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    onKeyDown(e.nativeEvent);
  }

  const handleKeyUp = (e: React.KeyboardEvent) => {
    onKeyUp(e.nativeEvent)
  }

  const handleCompositionStart = (e: React.CompositionEvent<HTMLTextAreaElement>) => {
    onCompositionStart(e.nativeEvent)
  }

  const handleCompostionEnd = (e: React.CompositionEvent<HTMLTextAreaElement>) => {
    onCompositionEnd(e.nativeEvent)
  }

  return (
    <textarea
      className="input"
      style={{ left, top }}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onCompositionStart={handleCompositionStart}
      onCompositionEnd={handleCompostionEnd}
      tabIndex={0}
      autoFocus
      spellCheck={false}
    />
  )
}

export default Input;
