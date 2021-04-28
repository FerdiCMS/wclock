window.onload = () => {
    setTimeout(removeLoader, 1000)

    function removeLoader() {
        const loader = document.querySelector(".loading-screen")
        loader.style.display = "none"
    }

    getClock()

    function getClock() {
        var date = new Date()

        var h = date.getHours()
        var m = date.getMinutes()
        var s = date.getSeconds()

        var condition = (h < 12) ? "AM" : "PM"

        h = (h > 12) ? h - 12 : h
        h = ("0" + h).slice(-2)
        m = ("0" + m).slice(-2)
        s = ("0" + s).slice(-2)

        var nd = date.getDate();
        var d = date.getDay()
        var month = date.getMonth()
        var y = date.getYear()

        if (y < 1000) {
            y += 1900
        }

        var dateArr = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ]

        var montharr = [
            'January',
            'Febuary',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ]

        const clock = document.getElementById("clock")
        clock.innerHTML = h + " : " + m + " : " + s + " " + condition

        const day = document.getElementById("date")
        day.innerHTML = "" + dateArr[d] + " " + "-" + " " + nd + " " + montharr[month] + " " + y
    }
    setInterval(getClock, 500)
}