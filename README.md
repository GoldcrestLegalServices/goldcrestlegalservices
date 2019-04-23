# Goldcrest Legal Services Web

## How to compile

Watch
```
sass --watch style/css:style/css
pug index.pug -w -P
```
Normal
```
sass style/css:style/css
pug index.pug -P
```
Compressed
```
sass style/css:style/css --style compressed
pug index.pug
```