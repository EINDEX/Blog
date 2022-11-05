#bin/sh

export timestamp=$(date +%s)
if [ $1 = "en" ]; then
    filename="$timestamp.en.md"
else
    filename="$timestamp.md"
fi

echo "content/thoughts/$filename"
hugo new "thoughts/${filename}"

lineno=`wc -l archetypes/thoughts.md | awk '{printf ($1)}'`

if [ `uname` = "Darwin" ]; then
    code -g "content/thoughts/${filename}:${lineno}"
elif [ `uname` = "Linux" ]; then
    code-server -g "content/thoughts/${filename}:${lineno}"
fi