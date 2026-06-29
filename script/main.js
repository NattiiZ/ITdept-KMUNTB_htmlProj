var delayStart = async => {
    var vid = document.getElementById("video");

    vid.play();
    vid.volume = 0.35;

    vid.addEventListener('click', function () {
        if (vid.paused == false) {
            vid.pause();
            vid.firstChild.nodeValue = 'Play';
        } else {
            vid.play();
            vid.firstChild.nodeValue = 'Pause';
        }
    });
}

setTimeout(delayStart, 3000)