import { range } from './utils';
import foobar from './foobar';

range(15)(2)
  .map((i: number) => { console.log(`${i} : ${foobar(i)}`); });
