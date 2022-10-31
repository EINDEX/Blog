#bin/sh

export timestamp=$(date +%s)
if [ $1 = "en" ]; then
    filename="$timestamp.en.md"
else
    filename="$timestamp.md"
fi

echo "content/thoughts/$filename"
hugo new "thoughts/${filename}"

if [ `uname` = "Darwin" ]; then
    code -g "content/thoughts/${filename}:5"
elif [ `uname` = "Linux" ]; then
    code-server -g "content/thoughts/${filename}:5"
fi