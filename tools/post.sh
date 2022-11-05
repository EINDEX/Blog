#bin/sh

echo "content/posts/$1"
hugo new "posts/$1"

lineno=`wc -l archetypes/posts.md | awk '{printf ($1)}'`

if [ `uname` = "Darwin" ]; then
    code -g "content/posts/$1:${lineno}"
elif [ `uname` = "Linux" ]; then
    code-server -g "content/posts/$1:${lineno}"
fi