document.addEventListener("DOMContentLoaded", function () {
    const modeBtn = document.getElementById('switch');

    // on first render, 
    modeBtn.onchange = (e) => {
        if (modeBtn.checked === true) {
            document.documentElement.classList.remove("dark")
            document.documentElement.classList.add("light")
            window.localStorage.setItem('mode', 'light')
        } else {
            document.documentElement.classList.remove("light")
            document.documentElement.classList.add("dark")
            window.localStorage.setItem('mode', 'dark')

        }
    };

    const mode = window.localStorage.getItem('mode');
    if (!mode) {
        console.log('inside')
        document.documentElement.classList.add("dark")
    } else if (mode == 'dark') {
        modeBtn.checked = false;
        document.documentElement.classList.remove("light")
        document.documentElement.classList.add("dark")
    } else if (mode == 'light') {
        modeBtn.checked = true;
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
    }
}); 