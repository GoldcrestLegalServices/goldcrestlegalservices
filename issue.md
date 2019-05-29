```
efun@inspiron ~/D/g/g/g/js> html-minifier script.js -o script.js --removeComments --minify-js true
Minification error:
Parse Error: < arrayLength; i++) {
        e.getElementsByTagName("p")[i].style.display = Display(show);
    }
}

function ShowInfo(id) {
    ShowHideInfo(id, true)
}

function HideInfo(id) {
    ShowHideInfo(id, false)

}

function ShowInfoInView(id) {
    document.getElementById(id).scrollIntoView();
    ShowInfo(id);
}

function HideAll() {
    HideInfo('show_hide_1');
    HideInfo('show_hide_2');
    HideInfo('show_hide_3');
    HideInfo('show_hide_4');
    HideInfo('show_hide_5');
}

function ShowIfMobile(id) {
    ShowInfo(id)
}

function ScrollPosit() {
    var element = document.getElementById("scroll");
    var position = element.scrollTop;
    var down = position > 100;
    if (down) {
        element.classList.add('not-scrolled');
    } else {
        element.classList.remove('not-scrolled');
    }
}

```