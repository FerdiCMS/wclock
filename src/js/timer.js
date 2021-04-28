// prepare modal
const t = document.getElementById("modal-trigged")
const c = document.getElementById("close")

const modal = document.getElementById("modal-bg")

t.addEventListener('click', () => {
    modal.classList.add("active")
})

c.addEventListener('click', () => {
    modal.classList.remove("active")
})

// Setup timer

const submit = document.getElementById("submit")

var time = document.querySelector(".time")
var sd = document.querySelector(".second-display")

let alarm = "default"
let hours = 0
let minute = 0
let second = 0

submit.addEventListener('click', () => {
    let hoursI = document.getElementById("hourInput").value
    let minuteI = document.getElementById("minuteInput").value
    let secondI = document.getElementById("secondInput").value

    if (hoursI > 99) {
        hours = 99
    } else {
        hours = hoursI
    }

    if (minuteI > 59) {
        minute = 59
    } else {
        minute = minuteI
    }

    if (secondI > 59) {
        second = 59
    } else {
        second = secondI
    }

    if (hoursI == 0) {
        hours = 0
    }
    if (minuteI == 0) {
        minute = 0
    }
    if (secondI == 0) {
        second = 0
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;


    modal.classList.remove("active")

    time.innerHTML = h + " : " + m + " : " + s
    sd.innerHTML = "Timer " + "(" + h + " : " + m + " : " + s + ")"

})

// test alarm
alarmDisplay = document.getElementById("alarm")

let selectSound = document.getElementById("alarmInput")
var value = selectSound.options[selectSound.selectedIndex]

const sound = document.getElementById("sound")

selectSound.addEventListener('change', () => {
    alarmDisplay.innerHTML = `<i style="cursor: default;" class="fas fa-volume"></i>` + selectSound.options[selectSound.selectedIndex].text;
})

sound.addEventListener('click', () => {
    alarm = selectSound
    if (alarm.value == "not suport") {
        console.log("audio cant play")
    } else {
        audio = new Audio(alarm.value)
        audio.play()
    }
})

alarm = selectSound

//start timer

const btn = document.getElementById("start")
const btn_stop = document.getElementById("stop")
const btn_reset = document.getElementById("reset")

var int

btn.addEventListener("click", () => {
    btn.classList.add("disabled")
    btn_reset.classList.add("hide")
    btn_stop.classList.remove("hide")
    int = setInterval(startTime, 1000);
})

btn_stop.addEventListener("click", () => {
    stop()
})

btn_reset.addEventListener("click", () => {
    reset()
})

function startTime() {
    if (hours == 0 && minute == 0 && second == 0) {
        hours = 0;
        minute = 0;
        second = 0;
    } else if (second != 0) {
        second--;
    } else if (minute != 0 && second == 0) {
        second = 59;
        minute--;
    } else if (hours != 0 && minute == 0) {
        minute = 60;
        hours--;
    }

    let s = second < 10 ? "0" + second : second;
    let m = minute < 10 ? "0" + minute : minute;
    let h = hours < 10 ? "0" + hours : hours;

    time.innerHTML = h + " : " + m + " : " + s
    if (second == 0 && minute == 0 && hours == 0) {
        stopInterval()
    }

}

function stop() {
    btn_stop.classList.add("hide")
    btn_reset.classList.remove("hide")
    btn.classList.remove("hide")
    btn.classList.remove("disabled")
    clearInterval(int)
}

function reset() {
    btn.classList.remove("disabled")
    btn_reset.classList.remove("hide")
    btn_stop.classList.add("hide")
    btn.classList.remove("hide")
    time.innerHTML = "00" + " : " + "00" + " : " + "00"
    sd.innerHTML = "Timer " + "(" + "00" + " : " + "00" + " : " + "00" + ")"
}

function stopInterval() {
    btn.classList.remove("disabled")
    btn_reset.classList.remove("hide")
    btn_stop.classList.add("hide")
    btn.classList.remove("hide")
    clearInterval(int)
    sd.innerHTML = "Timer " + "(" + "00" + " : " + "00" + " : " + "00" + ")"
    if (alarm.value == "not suport") {
        console.log("audio cant play")
    } else {
        audio = new Audio(alarm.value)
        audio.play()
    }
}