window.onload = () => {
    setTimeout(removeLoader, 1000)

    function removeLoader() {
        const loader = document.querySelector(".loading-screen")
        loader.style.display = "none"
    }
}