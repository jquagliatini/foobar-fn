import { AnyFunction, NonVoidFunction } from '../types';

export default function pipe(fns: NonVoidFunction[]): AnyFunction {
  return fns.reduce(
    (f, g) => (...args) => g(f(...args)),
  );
}
