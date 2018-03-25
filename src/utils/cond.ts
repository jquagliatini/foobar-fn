import { AnyFunction, Predicate } from '../types';

type CondTuple = [Predicate, Function];

export default function cond(predicates: CondTuple[]): AnyFunction {
  return (...args: any[]) => {
    const found = predicates.find(
      (p: CondTuple) => p[0].apply(null, args),
    );

    return found
      ? found[1].apply(null, args)
      : undefined;
  };
}
