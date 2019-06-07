#!/bin/sh

gnome-terminal --command="sass style/css:"
sleep 5
gnome-terminal --command="sass --watch style/css:"
sleep 5
gnome-terminal --command="pug index.pug privacy-policy.pug cookies-policy.pug -w -P"
sleep 5
gnome-terminal --command="image-watcher -w"