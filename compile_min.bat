start cmd /k sass style/css: --style compressed
timeout 5
start cmd /k pug index.pug privacy-policy.pug cookies-policy.pug privacy-policy.pug cookies-policy.pug
timeout 5
start cmd /k image-watcher -c
timeout 5
start cmd /k html-minifier index.html -o index.html --collapseBooleanAttributes --removeComments --preserveLineBreaks --minify-css true --minify-js true --maxLineLength 100