var hourheading = document.getElementById("hour")
var minheading = document.getElementById("min")
var secheading = document.getElementById("sec")
var msecheading = document.getElementById("msec")
var hour = 0
var min = 0
var sec = 0
var msec = 0
var interval;

function timer() {
    msec++
    msecheading.innerHTML = msec

    if (msec >= 100) {
        sec++
        secheading.innerHTML = sec
        msec = 0

        if (sec >= 60) {
            min++
            minheading.innerHTML = min
            sec = 0

            if (min >= 60) {
                hourheading.innerHTML = hour
                min = 0
            }

        }
    }
}


function start() {
    interval = setInterval(timer, 10)
}

function stop() {
    clearInterval(interval)
}

function reset() {
    hour = 0
    min = 0
    sec = 0
    msec = 0
    hourheading.innerHTML = hour
    minheading.innerHTML = hour
    secheading.innerHTML = hour
    msecheading.innerHTML = hour
    stop()
}