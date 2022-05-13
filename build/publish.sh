#!bash

hugo --minify 
rsync -arvz --delete public qcloud:~/projects/blog/