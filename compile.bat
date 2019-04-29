start cmd /k sass style/css:
timeout 5
start cmd /k pug index.pug -P
timeout 5
start cmd /k image-watcher -c