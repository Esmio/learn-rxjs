import React from 'react';
import { useObservable } from 'rxjs-hooks';
import { interval } from 'rxjs';
// import { map } from 'rxjs/operators';

function App() {
  const value = useObservable(() => interval(1000)
    // .pipe(map((val) => val *3))
  , 0);
  return (
    <div>
      <h1>Title: useObservable</h1>
      <h3>Incremental number: {value}</h3>
    </div>
  )
}

export default App;