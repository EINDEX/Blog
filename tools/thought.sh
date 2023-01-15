#bin/sh

export timestamp=$(date +%s)
if [ $1 = "en" ]; then
    filename="$timestamp.md"
else
    filename="$timestamp.cn.md"
fi

echo "content/thoughts/$filename"
hugo new "thoughts/${filename}"

lineno=`wc -l archetypes/thoughts.md | awk '{printf ($1)}'`

code -g "content/thoughts/${filename}:${lineno}"