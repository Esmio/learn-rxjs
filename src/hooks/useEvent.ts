import { useCallback, useMemo } from 'react';
import {Subject} from 'rxjs';
type EventHandler<T> = (event: T) => void;

export const useEventObservable: <T>() => [Subject<T>, EventHandler<T>] = <T>() => {
  const subject$ = useMemo(() => new Subject<T>(), [])
  const handleEvent = useCallback<EventHandler<T>>(event => {
    subject$.next(event)
  }, [])

  return [subject$, handleEvent];
}