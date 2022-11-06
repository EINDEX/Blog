#bin/sh

if [ $1 = "en" ]; then
    filename="$2.md"
else
    filename="$2.cn.md"
fi

echo "content/posts/$filename"
hugo new "posts/$filename"
lineno=`wc -l archetypes/posts.md | awk '{printf ($1)}'`

if [ `uname` = "Darwin" ]; then
    code -g "content/posts/$filename:${lineno}"
elif [ `uname` = "Linux" ]; then
    code-server -g "content/posts/$filename:${lineno}"
fi