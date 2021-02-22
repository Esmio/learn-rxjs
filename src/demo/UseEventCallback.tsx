import React from 'react';
import { useEventCallback } from 'rxjs-hooks';
import { map } from 'rxjs/operators';

const UseEventCallback: React.FC = () => {
  const [clickCallback, [description, x, y]] = useEventCallback((event$) => 
    event$.pipe(
      map((event: any) => [event.target.innerHTML, event.clientX, event.clientY])
    ),
    ["nothins", 0, 0]
  )
  return (
    <div>
      <h1>Title: useEventCallback</h1>
      <h3>click position: {x}, {y}</h3>
      <h3>"{description}" was clicked.</h3>
      <button onClick={clickCallback}>click me</button>
      <button onClick={clickCallback}>click you</button>
      <button onClick={clickCallback}>click him</button>
    </div>
  )
};

export default UseEventCallback;
