const { readFile } = require('fs');
const { strictEqual } = require('assert');

readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(-1);
  }

  const expected = `2 : 2
3 : foo
4 : 4
5 : bar
6 : foo
7 : 7
8 : 8
9 : foo
10 : bar
11 : 11
12 : foo
13 : 13
14 : 14
15 : foobar
`;
  try {
    strictEqual(data.toString(), expected);
  } catch (e) {
    console.error(e.message() || e.toString() || 'Something bad Happened!');
    process.exit(2);
  }
});
