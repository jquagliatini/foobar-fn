#!/bin/sh

INSTALLER=""
if ! command -v yarn > /dev/null; then
  if ! command -v npm > /dev/null; then
    echo "Install Npm or Yarn!";
    exit -1;
  else
    INSTALLER="npm"
  fi
else
  INSTALLER="yarn"
fi

echo "Installing"
"$INSTALLER" install

echo "Compiling"
node_modules/.bin/tsc -p src

node dist/index.js > output.log

node src/__tests__/integration.spec.js output.log
exit_code=$?

if [ "$exit_code" -eq 0 ]; then echo "OK"
else echo "ERR $exit_code"; fi

echo "Clean"
rm -rf dist output.log

exit $exit_code;
