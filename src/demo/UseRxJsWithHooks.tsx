import React from 'react';
import { interval, Observable } from 'rxjs';
import useObservable from '../hooks/useObservable';

const once: number[] = [];

const Counter:React.FC = (props) => {
  const count$: Observable<number> = React.useMemo(() => interval(1000), once);
  const count = useObservable<number>(count$);
  return (
    <>
      <h1>Title: UseRxJsWithHooks</h1>
      <div>{count}</div>
    </>
  )
}

export default Counter;