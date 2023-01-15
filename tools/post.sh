#bin/sh

if [ $1 = "en" ]; then
    filename="$2.md"
else
    filename="$2.cn.md"
fi

echo "content/posts/$filename"
hugo new "posts/$filename"
lineno=`wc -l archetypes/posts.md | awk '{printf ($1)}'`


code -g "content/posts/$filename:${lineno}"