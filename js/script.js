function Display(show) {
    if (show) {
        return 'block';
    } else {
        return 'none';
    }
}


function ShowHideInfo(id, show) {
    var e = document.getElementById(id);

    if (show) {
        e.addEventListener('transitionend', function() {
            if (event.target.className == "shown") {
                e.style.maxHeight = 'unset';
            }
        }, false);
        e.classList.remove('hidden');
        e.classList.add('shown');
    } else {
        e.style.maxHeight = null;
        e.removeEventListener('transitionend', function() {});
        e.classList.remove('shown');
        e.classList.add('hidden');
    };

    e.getElementsByClassName("show")[0].style.display = Display(!show);
    e.getElementsByClassName("hide")[0].style.display = Display(show);

    var arrayLength = e.getElementsByTagName("p").length;
    for (var i = 0; i < arrayLength; i++) {
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
    var down = position > 300;
    if (down) {
        element.classList.add('not-scrolled');
    } else {
        element.classList.remove('not-scrolled');
    }
}