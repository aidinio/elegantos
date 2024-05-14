document.addEventListener("DOMContentLoaded", () => {
    let linksSection = {hovered: false};
    let linksText = document.querySelector("#menu-links");
    let linksMenu = document.querySelector("#links-section");
    linksText.addEventListener("mouseover", () => {
        linksSection.hovered = true;
        let linksSection = document.querySelector("#links-section");
        linksSection.style.display = "grid";
    });
    linksText.addEventListener("mouseout", () => {
        let linksSection = document.querySelector("#links-section");
        linksSection.hovered = false;
        setTimeout(() => {
            if (!linksSection.hovered)
                linksSection.style.display = "none";
        }, 300);
    });
    linksSection.addEventListener("mouseover", () => {
        linksSection.hovered = true;
    });
    linksSection.addEventListener("mouseout", () => {
        linksSection.hovered = false;
    });
});