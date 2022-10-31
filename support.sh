#bin/sh

export timestamp=$(date +%s)
if [ $1 = "en" ]; then
    filename="$timestamp.en.md"
else
    filename="$timestamp.md"
fi

echo "content/thoughts/$filename"
hugo new "thoughts/${filename}"
code -g "content/thoughts/${filename}:5"