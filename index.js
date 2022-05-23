let url = document.querySelectorAll('.yuRUbf > a, h3 > a[href], a.WlydOe, a.a-no-hover-decoration');
let scrollerId;
let paused = true;

document.getElementsByTagName('body')[0].addEventListener('keypress', (event) => {

    if (event.keyCode === 50 || event.which == 50) { //2
        //scroll down
        if (paused) {
            scrollerId = downScroll();
            paused = false;
        } else {
            stopScroll();
            paused = true;
        }

    } else if (event.keyCode === 49 || event.which == 49) { //1
        //scroll up
        if (paused) {
            scrollerId = upScroll();
            paused = false;
        } else {
            stopScroll();
            paused = true;
        }

    } else if (event.keyCode === 13 || event.which === 13) { //enter
        //select url
        selectUrls();
    }
});





function downScroll() {
    let id = setInterval(function () {
        window.scrollBy(0, 2)
        if (window.scrollY + window.innerHeight == document.body.offsetHeight) {
            stopScroll();
        }
    }, 10)
    return id
}

function upScroll() {
    let id = setInterval(function () {
        window.scrollBy(0, -2)
        if (window.scrollY === 0) {
            stopScroll();
        }
    }, 10)
    return id
}

function stopScroll() {
    clearInterval(scrollerId);
}

function selectUrls() {
    url.forEach((a, index) => {
        res = window.confirm(`Enlace Nº: ${index + 1}?`);
        if (res != false) {
            window.open(a, '_blank');
        }
    });
}