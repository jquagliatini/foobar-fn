import { Predicate } from '../types';

export default function passAll(...predicates: Predicate[]): (...args: any[]) => boolean {
  return (...args: any[]) =>
    !predicates.some(p => !p.apply(null, args));
}
