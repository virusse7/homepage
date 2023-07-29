{
    const welcome = () => {
        console.log("Hello Dev!");
    }

    const toggleBackground = () => {
        const toggleBackground = document.querySelector(".js-toggleBackground");

        toggleBackground.addEventListener("click", () => {
            const bodyElement = document.querySelector(".js-main");
            let themeName = document.querySelector(".js-themeName");

            bodyElement.classList.toggle("darkBackground");

            themeName.innerText = bodyElement.classList.contains("darkBackground") ? "jasny" : "ciemny";
        })
    }
    const init = () => {
        toggleBackground();
        welcome();
    }


    init();
}