import { useState, useEffect } from 'react';
import { Observable } from 'rxjs';

function useObservable<T>(
  input$: Observable<T>,
  initialState?: T
): T | undefined {
  const [value, setValue] = useState(initialState);
  useEffect(
    () => {
      const subscriptioin = input$.subscribe({
        next(value) {
          setValue(value)
        }
      })

      return () => {
        subscriptioin.unsubscribe()
      }
    },
    [input$]
  )
  return value;
}

export default useObservable
