
#!/usr/bin/env sh

set -e

npm run build

cd list

git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:manuelurruti/LolApp.git main:gh-pages