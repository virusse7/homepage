{
    const welcome = () => {
        console.log("Hello Dev!");
    };

    const toggleBackground = () => {
        const mainElement = document.querySelector(".js-main");
        let themeName = document.querySelector(".js-themeName");

        mainElement.classList.toggle("darkBackground");
        themeName.innerText = mainElement.classList.contains("darkBackground") ? "jasny" : "ciemny";
    };


    const init = () => {
        const toggleBackgroundButton = document.querySelector(".js-toggleBackgroundButton");

        welcome();

        toggleBackgroundButton.addEventListener("click", toggleBackground);
    };

    init();
}