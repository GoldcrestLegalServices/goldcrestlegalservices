#!/bin/sh

gnome-terminal --command="sass style/css:"
sleep 5
gnome-terminal --command="pug index.pug -P"
sleep 5
gnome-terminal --command="image-watcher -c"