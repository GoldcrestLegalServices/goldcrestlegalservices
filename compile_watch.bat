start cmd /k sass style/css:style/css
start cmd /k sass --watch style/css:style/css
timeout 5
start cmd /k pug index.pug -w -P
timeout 5
start cmd /k image-watcher -w