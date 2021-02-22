import React, {useMemo} from 'react';
import { useEventObservable } from '@/hooks/useEventObservable';
import useObservable from '@/hooks/useObservable';
import Input from '@/components/Input';
import { interval, merge, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, mapTo, startWith, switchMap, takeUntil } from 'rxjs/operators';
import Code from '@/components/Code';
import Cursor from '@/components/Cursor';

const once: any[] = [];

const Editor: React.FC<{}> = props => {
  const [text$, handleInputChange] = useEventObservable<string>()
  const [keyDown$, handleInputKeyDown] = useEventObservable<KeyboardEvent>()
  const [keyUp$, handleInputKeyUp] = useEventObservable<KeyboardEvent>()
  const [compositionStart$, handleInputCompositionStart] = useEventObservable<CompositionEvent>();
  const [compositionEnd$, handleInputCompositionEnd] = useEventObservable<CompositionEvent>();

  const cursorShow$ = useMemo(() => merge(
    // 键盘按下时，光标始终展示
    keyDown$.pipe(mapTo(true)),
    // 键盘抬起时，重置光标闪烁
    keyUp$.pipe(
      // 控制响应速率
      debounceTime(500),
      // 自动开始闪烁
      startWith(null),
      // 启动闪烁，通过 switchMap, 新的闪烁开始时，旧的闪烁停止
      switchMap(() => {
        // 闪动流
        const blink$ = interval(500).pipe(map(time => time % 2 === 0))
        // 当键盘按下时，停止闪动
        return blink$.pipe(takeUntil(keyDown$))
      })
    )
  ).pipe(
    // 优化： 只有显隐改变时，才发出值
    distinctUntilChanged()
  ) , once)

  const text = useObservable(text$, '');
  const cursorShow = useObservable(cursorShow$, false)
  return (
    <div className="sql-editor">
      <Code lines={[text!]} />
      <Cursor left={40} top={0} visible={cursorShow!} />
      <Input
        left={42}
        top={0}
        value={text}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        onKeyUp={handleInputKeyUp}
        onCompositionStart={handleInputCompositionStart}
        onCompositionEnd={handleInputCompositionEnd}
      />
    </div>
  )
}

export default Editor;
