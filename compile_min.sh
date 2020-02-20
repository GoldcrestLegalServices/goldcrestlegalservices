#!/bin/sh

gnome-terminal --command="sass style/css: --style compressed"
sleep 5
gnome-terminal --command="pug index.pug privacy-policy.pug cookies-policy.pug"
sleep 5
gnome-terminal --command="image-watcher -c"
sleep 5
gnome-terminal --command="html-minifier index.html -o index.html --collapseBooleanAttributes --removeComments --preserveLineBreaks --minify-css true --minify-js true --maxLineLength 100"