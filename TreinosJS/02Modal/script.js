function start() {
    const btn = document.querySelector("#btn");
    const window = document.querySelector("#window")

    btn.addEventListener("click", showWindow);
    document.addEventListener("keydown", (event) => {
        if (!window.classList.contains("hidden") && event.key === "Escape")
            showWindow()
    });

    function showWindow() {
        btn.classList.toggle("hidden");
        window.classList.toggle("hidden");
    }
}

document.addEventListener('DOMContentLoaded', start);
