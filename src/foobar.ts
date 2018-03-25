import {
  cond,
  entity,
  equal,
  flow,
  mod,
  passAll,
  pipe,
  T,
} from './utils';
import { NumberOrString } from './types';

type CurriedPredicateTakesTwoNumbers =
  (a: number) => (b: number) => boolean;

const divisibleBy: CurriedPredicateTakesTwoNumbers =
    (a: number) => pipe([mod(a), equal(0)]);

const foobar: (v: number) => NumberOrString =
  cond([
    [
      passAll(
        divisibleBy(3),
        divisibleBy(5),
      ),
      entity('foobar'),
    ],
    [
      divisibleBy(5),
      entity('bar'),
    ],
    [
      divisibleBy(3),
      entity('foo'),
    ],
    [
      T,
      flow,
    ],
  ]);

export default foobar;
